import { ref } from "vue"
import gsap from 'gsap'
import { useThree } from "./useThree"
import { generateMapData } from "@/scripts/map"

const three = useThree()
const instance = ref(null)

export function useScene() {
  function start() {
    const setup = {
      ...three.setup(),
      tiles: generateMapData()
    }
    three.createBase(setup)
    three.createMap(setup)
    three.start(setup)
    
    instance.value = setup
    setTimeout(show, 150)
  }

  function resetMap() {
    const scene = instance.value.scene
    const tiles = instance.value.tiles
    while (tiles.length) {
      scene.remove(tiles[0].meshes.group)
      tiles.shift()
    }
  }

  function reset() {    
    hide()
    setTimeout(() => {
      resetMap()
      const newSetup = {
        ...instance.value,
        tiles: generateMapData()
      }
      three.createMap(newSetup)
      instance.value = newSetup

      show()
    }, 500)
  }
  
  function destroy() {
    hide()
    resetMap()
    three.stop(instance.value)
  }

  function show() {
    instance.value.tiles.forEach(tile => {
      gsap.to(tile.meshes.tile.scale, {
        z: tile.display.height / 10,
        duration: .5,
      })
  
      if(tile.meshes.decorum)
      setTimeout(() => {
        gsap.to(tile.meshes.decorum.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: .2,
        })
      }, 300)
    })
  }
  function hide() {
    instance.value.tiles.forEach(tile => {
      if(tile.meshes.decorum) {
        gsap.to(tile.meshes.decorum.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: .2,
        })
        gsap.to(tile.meshes.decorum.position, {
          y: 0,
          duration: .2,
        })
      }

      gsap.to(tile.meshes.tile.scale, {
        z: 0,
        duration: .2,
      })
    })
  }

  return {
    start, show, hide, reset, destroy
  }
}