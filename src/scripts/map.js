import { defineHex, Grid, spiral, ring } from 'honeycomb-grid'
import { createNoise2D } from 'simplex-noise'
import { randomNb, negOrPos, getMidPoint, getAngle, getCorner, getBeachColor, getLandColor, getMountainColor, normalize} from './map.utils'
import { CONFIG } from './config'

function createSeed(noise) {
  const seed = { id: null, x: null, y: null }
  do {
    seed.x = randomNb(100)
    seed.y = randomNb(100)
    seed.id = noise(seed.x, seed.y)
  }
  while (
    seed.id < CONFIG.HMAP_SEED_MIN_HEIGHT
  )
  return seed
}

export function generateMapData() {
  // 1. Create world seed
  const noise = createNoise2D()
  const noise2 = createNoise2D()
  const seed = createSeed(noise)

  const grid = new Grid(defineHex({ dimensions: 30 }), spiral({ radius: CONFIG.SIZE }))

  // 3. Create tile datas
  const tiles = []

  let i = 0
  grid.forEach(hex => {
    // a. Data setup
    const tile = {
      data: {
        gridId: i++,
        center: { x: hex.x, y: hex.y },
        coords: { q: hex.q, r: hex.r },
        rawHeight: null,
      },
      display: {
        name: null,
        color: null,
        height: null
      },
      neighbors: [],
    }

    // b. Height
    const hmapX = seed.x + (hex.x / CONFIG.HMAP_ZOOM)
    const hmapY = seed.y + (hex.y / CONFIG.HMAP_ZOOM)
    const h = noise(hmapX, hmapY)

    const rawHeight = h / CONFIG.SMOOTHING
    tile.data.rawHeight = rawHeight 
    
    const height = CONFIG.getHeight(rawHeight, hex)
    tile.display.height = height

    // c. Type
    if(height <= 0) {
      tile.data.type = 0
      tile.display.name = "Océan"
      tile.display.color = `#0084b2`
      tile.display.height = 10
    }
    else if(height < 70) {
      tile.data.type = 2
      tile.display.name = "Plaine"
      tile.display.color = getLandColor(height)
    }
    else if (height < 80) {
      tile.data.type = 3
      tile.display.name = "Montagne"
      tile.display.color = getMountainColor(height)
    }
    else {
      tile.data.type = 4
      tile.display.name = "Peak"
      tile.display.color = `lightgray`
    }

    if(tile.display.height < 10)
    tile.display.height = 10
    
    if(CONFIG.TYPE === "VALLEY" && tile.display.height >= 80) {
      tile.display.height *= 1 + normalize(tile.display.height, 120, 80)
    }

    tiles.push(tile)
  })
  
  // d. Neighbors
  tiles.forEach(tile => {
    const gridNeighbors = grid.traverse(ring({ center: { q: tile.data.coords.q, r: tile.data.coords.r }, radius: 1 }))
    gridNeighbors.forEach(n => {
      tile.neighbors.push(tiles.find(t => t.data.coords.q === n.q && t.data.coords.r === n.r))
    })
  })

  // add shores
  tiles
    .filter(tile => tile.data.type === 0)
    .forEach(tile => {
      if(tile.neighbors.find(n => n.data.type > 0)) {
        tile.data.shore = true
        tile.display.color = "hsl(190, 56%, 50%)"
      }
    })
    
  // add deep shores
  tiles
    .filter(tile => tile.data.type === 0 && !tile.data.shore)
    .forEach(tile => {
      if(!tile.neighbors.find(n => n.data.type > 0) && tile.neighbors.find(n => n.data.shore)) {
        tile.data.deepShore = true
        tile.display.color = "hsl(192, 78%, 40%)"
      }
    })

  // add beaches
  if(CONFIG.TYPE === "ISLAND")
  tiles
    .filter(tile => tile.data.type === 2)
    .forEach(tile => {
      if(tile.neighbors.find(n => n.data.shore) && tile.data.rawHeight < 0) {
        tile.data.type = 1
        tile.display.name = "Plage"
        tile.display.color = getBeachColor(tile.display.height)
        tile.display.height = 10
      }
      else if(tile.display.height < 20) {
        tile.display.height = 20
      }
    })

  // Decorum
  tiles
    .filter(tile => tile.data.type > 0)
    .forEach(tile => {

      // add forests
      const hasTree = noise2(tile.data.center.x/CONFIG.HMAP_ZOOM*2, tile.data.center.y/CONFIG.HMAP_ZOOM*2) < tile.display.height / 500

      if (tile.data.type === 2 && hasTree) {
        tile.data.hasForest = true
        tile.display.name = "Forêt"
        tile.display.forest = []
        for (let i = 0; i < randomNb(6) + 14; i++) {
          const positionXFactor = negOrPos(randomNb(19))
          const positionYFactor = randomNb(3)
          const positionZFactor = negOrPos(randomNb(19))

          tile.display.forest.push({
            position: { x: positionXFactor, y: positionYFactor, z: positionZFactor},
            scale: { x: 3.5, y: 5, z: 3.5 },
          })
        }
      }

      // add stones
      if (tile.data.type === 3 && Math.random() > .33) {
        tile.data.hasStone = true
        tile.display.stones = []
        for (let i = 0; i < randomNb(2) + 8; i++) {
          const positionXFactor = negOrPos(randomNb(19))
          const positionZFactor = negOrPos(randomNb(19))
          const scaleFactor = { x: .2 + Math.random(), y: .2 + Math.random()/2, z: .2 + Math.random() }
          const rotationFactor = (Math.PI/2*4)*Math.random()

          tile.display.stones.push({
            position: { x: positionXFactor, y: 100, z: positionZFactor },
            scale: scaleFactor,
            rotation: rotationFactor
          })
        }
      }

      // add mountainz
      if (tile.data.type === 3 && Math.random() > .7) {
        tile.data.hasMountain = true
        tile.display.mountains = []
        const rotationFactor = (Math.PI/2*4)*Math.random()
        tile.display.mountains.push({
          position: { x: 0, y: 0, z: 0 },
          scale: { x: 1 + Math.random(), y: 2 + Math.random()*2, z: 1 + Math.random() },
          rotation: rotationFactor
        })
        for (let i = 0; i < randomNb(2) + 3; i++) {
          const positionXFactor = negOrPos(randomNb(7) + 7)
          const positionZFactor = negOrPos(randomNb(7) + 7)
          const rotationFactor = (Math.PI/2*4)*Math.random()
          tile.display.mountains.push({
            position: { x: positionXFactor, y: 0, z: positionZFactor },
            scale: { x: .5 + Math.random(), y: .5 + Math.random()*1.5, z: .5 + Math.random() },
            rotation: rotationFactor
          })
        }
      }

      // add tall mountains
      if (tile.data.type === 4 && Math.random() > .7) {
        tile.data.hasMountain = true
        tile.display.mountains = []
        const rotationFactor = (Math.PI/2*4)*Math.random()
        tile.display.mountains.push({
          position: { x: 0, y: 0, z: 0 },
          scale: { x: 1 + Math.random(), y: 2.5 + Math.random()*3, z: 1 + Math.random() },
          rotation: rotationFactor
        })
        for (let i = 0; i < randomNb(2) + 3; i++) {
          const positionXFactor = negOrPos(randomNb(7) + 7)
          const positionZFactor = negOrPos(randomNb(7) + 7)
          const rotationFactor = (Math.PI/2*4)*Math.random()
          tile.display.mountains.push({
            position: { x: positionXFactor, y: 0, z: positionZFactor },
            scale: { x: 1 + Math.random(), y: 2.5 + Math.random()*3, z: 1 + Math.random() },
            rotation: rotationFactor
          })
        }
      }
    })

  // add cliffs
  if(CONFIG.TYPE !== "LAKE")
  tiles
    .filter(tile => tile.data.type > 1 && tile.data.type < 4)
    .forEach(tile => {
      tile.display.cliffs = []
      
      tile.neighbors.forEach(neighbor => {
        if(tile.display.height < 20 || (tile.display.height - neighbor.display.height <= 10 && neighbor.data.type !== 0))
        return

        tile.data.hasCliff = true

        let orientation = getAngle(tile.data.center, neighbor.data.center)
        const midPoint = getMidPoint(neighbor.data.center, tile.data.center)
        const leftPoint = getCorner(midPoint, -orientation, 10)
        const rightPoint = getCorner(leftPoint, Math.PI/2 - orientation, -20)

        tile.display.cliffs.push([
          {
            position: { x: midPoint.x - tile.data.center.x, y: 0, z: midPoint.y - tile.data.center.y },
            scale: { x: 1 + Math.random()*2, y: 5 + tile.display.height, z: 1 + Math.random()*2 },
            rotation: (Math.PI/2*4)*Math.random()
          },
          {
            position: { x: leftPoint.x - tile.data.center.x, y: 0, z: leftPoint.y - tile.data.center.y },
            scale: { x: 1 + Math.random()*2, y: 5 + tile.display.height, z: 1 + Math.random()*2 },
            rotation: (Math.PI/2*4)*Math.random()
          },
          {
            position: { x: rightPoint.x - tile.data.center.x, y: 0, z: rightPoint.y - tile.data.center.y },
            scale: { x: 1 + Math.random()*2, y: 5 + tile.display.height, z: 1 + Math.random()*2 },
            rotation: (Math.PI/2*4)*Math.random()
          },
        ])
      })
    })

  return tiles
}