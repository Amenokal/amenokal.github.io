import { ref } from 'vue'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as three from '@/scripts/three.js'

const ASSETS = ['tree']
const customObjects = ref([])

export function useThree() {

  async function loadAssets() {
    if(customObjects.value.length === ASSETS.length)
    return new Promise(resolve => resolve())

    await new Promise(resolve => {
      ASSETS.forEach(name => {

        new MTLLoader()
        .setPath(`/models/${name}/`)
        .load(`${name}.mtl`, materials => {
          materials.preload()

          new OBJLoader()
          .setMaterials(materials)
          .setPath(`/models/${name}/`)
          .load(`${name}.obj`, object => {
            customObjects.value.push({ name, object })

            if(customObjects.value.length === ASSETS.length)
            resolve()
          })
        })
      })
    })
  }

  function setup() {
    const scene = three.createScene()
    const camera = three.createCamera()
    const { renderer, composer } = three.createRenderer(scene, camera)
    const controls = three.createControls(camera, renderer)

    return { scene, camera, renderer, composer, controls }
  }

  function createBase({ scene }) {
    const baseMeshes = three.createBase(scene)
    baseMeshes.forEach(mesh => scene.add(mesh))
  }
  function createMap({ scene, tiles }) {
    const tileMeshes = three.createTiles(tiles, customObjects.value)
    tileMeshes.forEach(mesh => scene.add(mesh))
  }

  
  function start({ camera, controls, renderer, composer }) {
    three.handleDOM(camera, renderer, composer)
    three.animate(camera, controls, renderer, composer)
  }
  
  function stop({ renderer, composer }) {
    three.stopAnimation(renderer, composer)
  }

  return {
    loadAssets, setup, createBase, createMap, start, stop
  }
}