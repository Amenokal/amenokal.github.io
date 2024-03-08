import * as THREE from 'three'

// Geometries
const GEOMETRIES = {
  TILE: createTileGeometry(),
  STONE: new THREE.BoxGeometry( 10, 10, 10 ),
  MOUNTAIN: new THREE.BoxGeometry( 15, 15, 15 ),
  CLIFF: new THREE.BoxGeometry( 5, 1, 5 )
}

// Materials
export const MATERIALS = {
  TILE: new THREE.MeshLambertMaterial(),
  STONE: new THREE.MeshStandardMaterial({ color: 'gray' }),
  SNOW: new THREE.MeshStandardMaterial({ color: 'lightgray' }),
}

// Meshes
export const MESHES = {
  TILE: createTileMesh(),
  STONE: createStoneMesh(),
  MOUNTAIN: createMountainMesh(),
  CLIFF: createCliffMesh(),
}

// ------------------------------------------------------------------------------------

function createTileGeometry () {
  const size = 29.5
  const sides = 6
  const shape = new THREE.Shape()

  shape.moveTo(size * Math.cos(0), size * Math.sin(0))
  for (let i = 1; i <= sides; i += 1) {
    shape.lineTo(size * Math.cos((i * 2 * Math.PI) / sides), size * Math.sin((i * 2 * Math.PI) / sides))
  }
  const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.5, bevelOffset: 0, bevelSegments: 10, }
  return new THREE.ExtrudeGeometry(shape, extrudeSettings)
}

function createTileMesh() {
  const mesh = new THREE.Mesh(GEOMETRIES.TILE, MATERIALS.TILE)
  mesh.receiveShadow = true
  mesh.castShadow = true
  return mesh
}

function createStoneMesh() {
  const mesh = new THREE.Mesh(GEOMETRIES.STONE, MATERIALS.STONE)
  mesh.receiveShadow = true
  mesh.castShadow = true
  return mesh
}

function createMountainMesh() {
  const mesh = new THREE.Mesh(GEOMETRIES.MOUNTAIN, MATERIALS.STONE)
  mesh.receiveShadow = true
  mesh.castShadow = true
  return mesh
}

function createCliffMesh() {
  const mesh = new THREE.Mesh(GEOMETRIES.CLIFF, MATERIALS.STONE)
  mesh.receiveShadow = true
  mesh.castShadow = true
  return mesh
}