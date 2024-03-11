import * as THREE from 'three'
import { WebGLRenderer } from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { MESHES } from './three.utils'

// SETUP
export function createScene() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('lightblue')
  scene.fog = new THREE.Fog(0xA9C9CD, 400, 3000)
  return scene
}
export function createCamera() {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.set(600, 670, 600)
  return camera
}
export function createRenderer(scene, camera) {
  const sceneContainer = document.getElementById('gameScreen')

  const renderer = new WebGLRenderer({
    powerPreference: "high-performance",
    antialias: true,
    stencil: false,
    depth: false
  })

  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(sceneContainer.offsetWidth, sceneContainer.offsetHeight)

  const composer = new EffectComposer(renderer)

  const renderPass = new RenderPass( scene, camera )
  composer.addPass( renderPass )

  const outputPass = new OutputPass()
  composer.addPass(outputPass)

  return { renderer, composer }
}
export function createControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true
  controls.minDistance = 500
  controls.maxDistance = 1200
  controls.enableDamping = true
  controls.dampingFactor = .05
  controls.minPolarAngle = Math.PI / 3.5
  controls.maxPolarAngle = Math.PI / 3.5
  return controls
}

// MESHES
export function createBase() {
  const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 3 );
  hemiLight.color.setHSL( 0.6, 1, 0.6 );
  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
  hemiLight.position.set( 200, 200, 200 );
  
  const dayAmbiance = new THREE.AmbientLight('orange', .7)

  const sunLight = new THREE.DirectionalLight(0xffffff, 4)
  sunLight.color.setHSL(.42, .69, .9)
  sunLight.position.set(200, 200, 0)
  sunLight.castShadow = true
  sunLight.shadow.mapSize.width = 8192
  sunLight.shadow.mapSize.height = 8192
  sunLight.shadow.camera.left = - 5000
  sunLight.shadow.camera.right = 5000
  sunLight.shadow.camera.top = 5000
  sunLight.shadow.camera.bottom = - 5000
  sunLight.shadow.camera.near = -1000
  sunLight.shadow.camera.far = 1000

  return [hemiLight, dayAmbiance, sunLight]
}

export function createTiles(tiles, customObjects) {
  let meshes = []
  tiles.forEach(tile => {
    tile.meshes = {}

    const group = new THREE.Group()
    group.position.set(tile.data.center.x, 0, tile.data.center.y)
    tile.meshes.group = group
    
    // Tile mesh
    const tileMesh = createHexagon(tile)
    tile.meshes.tile = tileMesh
    group.add(tileMesh)
  
    // Decorum
    if(tile.data.hasForest || tile.data.hasStone || tile.data.hasMountain || tile.data.hasCliff) {
  
      const decorum = new THREE.Group()
      decorum.userData.name = 'decorum'
      decorum.position.set(0, tile.display.height, 0)
      decorum.scale.set(0, 0, 0)
  
      if(tile.data.hasForest) {
        const trees = createForest(tile, customObjects)
        tile.meshes.trees = trees
        decorum.add(trees)
      }
  
      if(tile.data.hasStone) {
        const stones = createStones(tile)
        tile.meshes.stones = stones
        decorum.add(stones)
      }
  
      if(tile.data.hasMountain) {
        const mountains = createMountains(tile)
        tile.meshes.mountains = mountains
        decorum.add(mountains)
      }
  
      if(tile.data.hasCliff) {
        const cliffs = createCliffs(tile)
        tile.meshes.cliffs = cliffs
        decorum.add(cliffs)
      }
  
      tile.meshes.decorum = decorum
      group.add(decorum)
    }
  
    meshes.push(group)
  })
  return meshes
}

// ANIMATION LOOP
export function animate(camera, controls, renderer, composer) {
  requestAnimationFrame(() => animate(camera, controls, renderer, composer))
  camera.updateProjectionMatrix()
  controls.update()
  composer.render()
}

export function stopAnimation(renderer, composer) {
  cancelAnimationFrame(() => animate(renderer, composer))
  window.onresize = null
}

// DOM HANDLER
function handleDOMResize(camera, renderer, composer) {
  const gameScreen = document.getElementById('gameScreen')
  const height = gameScreen.offsetHeight
  const width = gameScreen.offsetWidth

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize( width, height )
  composer.setSize( width, height )
}
export function handleDOM(camera, renderer, composer) {
  const gameScreen = document.getElementById('gameScreen')
  gameScreen.appendChild(renderer.domElement)
  window.onresize = function() { handleDOMResize(camera, renderer, composer) }
}

// ------------------------------------------------------------------------
// UTILS

function createHexagon(tile) {
  const tileMesh = MESHES.TILE.clone()
  tileMesh.material = MESHES.TILE.material.clone()
  tileMesh.material.color = new THREE.Color(tile.display.color)
  tileMesh.scale.set(0, 0, 0)
  tileMesh.rotation.set(-Math.PI / 2, 0, -Math.PI / 2)
  return tileMesh
}
function createForest(tile, customObjects) {
  const forestGrp = new THREE.Group()

  tile.display.forest.forEach(tree => {
    const treeMesh = customObjects.find(obj => obj.name === "tree").object.clone()
    treeMesh.children[0].castShadow = true
    treeMesh.children[0].receiveShadow = true
    treeMesh.position.set(tree.position.x, 0, tree.position.z)
    treeMesh.scale.set(tree.scale.x, tree.scale.y, tree.scale.z)
    forestGrp.add(treeMesh)
  })

  return forestGrp
}
function createStones(tile) {
  const stoneGrp = new THREE.Group()

  tile.display.stones.forEach(stone => {
    const stoneMesh = MESHES.STONE.clone()
    stoneMesh.position.set(stone.position.x, -2, stone.position.z)
    stoneMesh.scale.set(stone.scale.x, 1, stone.scale.z)
    stoneMesh.rotation.y = stone.rotation
    stoneGrp.add(stoneMesh)
  })

  return stoneGrp
}
function createMountains(tile) {
  const mountainGrp = new THREE.Group()

  tile.display.mountains.forEach(mountain => {
    const mountainMesh = MESHES.MOUNTAIN.clone()
    mountainMesh.position.set(mountain.position.x, 0, mountain.position.z)
    mountainMesh.scale.set(mountain.scale.x, mountain.scale.y, mountain.scale.z)
    mountainMesh.rotation.y = mountain.rotation
    mountainGrp.add(mountainMesh)
  })

  return mountainGrp
}
function createCliffs(tile) {
  const cliffGrp = new THREE.Group()
  cliffGrp.position.y = -tile.display.height/2

  tile.display.cliffs.forEach(cliffs => {
    cliffs.forEach(cliff => {
      const cliffMesh = MESHES.CLIFF.clone()
      cliffMesh.position.set(cliff.position.x, 0, cliff.position.z)
      cliffMesh.scale.set(cliff.scale.x, cliff.scale.y, cliff.scale.z)
      cliffMesh.rotation.y = cliff.rotation
      cliffGrp.add(cliffMesh)
    })
  })

  return cliffGrp
}