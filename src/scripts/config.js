import { distanceFactor } from './map.utils'

const ISLAND_CONFIG = {
  TYPE: "ISLAND",
  SIZE: 8,
  HMAP_SEED_MIN_HEIGHT: .66,
  HMAP_ZOOM: 600,
  SEA_LEVEL: -5,
  SMOOTHING: 6,
  getHeight: (rawHeight, hex) => (Math.ceil(rawHeight * 10) * 10) + (CONFIG.SEA_LEVEL * 10) + (distanceFactor(hex))
}
const VALLEY_CONFIG = {
  TYPE: "VALLEY",
  SIZE: 8,
  HMAP_SEED_MIN_HEIGHT: .1,
  HMAP_ZOOM: 500,
  SEA_LEVEL: 5,
  SMOOTHING: 2,
  getHeight: (rawHeight, hex) => (Math.ceil(rawHeight * 10) * 10) + (CONFIG.SEA_LEVEL * 10)
}
const LAKE_CONFIG = {
  TYPE: "LAKE",
  SIZE: 8,
  HMAP_SEED_MIN_HEIGHT: .1,
  HMAP_ZOOM: 500,
  SEA_LEVEL: 2,
  SMOOTHING: 5,
  getHeight: (rawHeight, hex) => (Math.ceil(rawHeight * 10) * 10) + (CONFIG.SEA_LEVEL * 10) - (distanceFactor(hex)/2)
}

export const CONFIGS = [ISLAND_CONFIG, VALLEY_CONFIG, LAKE_CONFIG]
export let CONFIG = ISLAND_CONFIG

export function setConfig(id) {
  CONFIG = CONFIGS[id]
}