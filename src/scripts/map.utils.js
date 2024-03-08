import { CONFIG } from "./config"

// numbers
export function randomNb(max) {
  return Math.floor(Math.random() * max)
}
export function negOrPos(nb) {
  return Math.random() > .5 ? -nb : nb
}
export function normalize (val, max, min) {
  return (val - min) / (max - min)
}

// config
export function distanceFactor (hex) {
  return Math.ceil((1 - normalize(getDistance(hex), CONFIG.SIZE * 50, 0)) * 10) * 10
}

// geometry
export function getDistance ({x, y}) {
 return  Math.sqrt(x * x + y * y)
}
export function getMidPoint ({x: x1, y: y1}, {x: x2, y: y2}) {
  return ({x: (x1 + x2) / 2, y: (y1 + y2) / 2});
}
export function getAngle ({x: x1, y: y1}, {x: x2, y: y2}) {
  return Math.atan2(y2 - y1, x2 - x1) * 180/Math.PI; // to degrees
}
export function getCorner(point, angle, length) {
  angle = angle * (Math.PI / 180) // degrees to radians
  return { x: point.x + Math.sin(angle) * length, y: point.y + Math.cos(angle) * length}
}

// tile colors
export function getBeachColor(height) {
  return `hsl(54, 100%, ${Math.round(normalize(height, 0, 20)*10 + 70)}%)`
}
export function getLandColor(height) {
  return `hsl(72, 49%, ${Math.round(normalize(height, 10, 90)*30 + 10)}%)`
}
export function getMountainColor(height) {
  return `hsl(0, 0%, ${50 - normalize(height, 30, 100)*20}%)`
}