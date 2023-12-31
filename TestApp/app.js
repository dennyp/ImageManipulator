import ImageManipulator from '../ImageManipulator.js'

const canvas = document.getElementById('canvas')
const originalImageSrc = 'wepik-export-20230922142657alsS.jpeg'
const imageManipulator = new ImageManipulator(canvas, originalImageSrc)

const resetButton = document.getElementById('btn-reset')
resetButton.addEventListener('click', () => {
  imageManipulator.drawImageIntoContext(originalImageSrc)
})

const grayscaleButton = document.getElementById('btn-grayscale')
grayscaleButton.addEventListener('click', () => {
  imageManipulator.applyFilterGrayscale()
})

const negativeButton = document.getElementById('btn-negative')
negativeButton.addEventListener('click', () => {
  imageManipulator.applyFilterNegative()
})

const brightenButton = document.getElementById('btn-brighten')
brightenButton.addEventListener('click', () => {
  imageManipulator.changeBrightness(1.1)
})

const darkenButton = document.getElementById('btn-darken')
darkenButton.addEventListener('click', () => {
  imageManipulator.changeBrightness(0.9)
})

const opacityButton = document.getElementById('btn-opacity')
opacityButton.addEventListener('click', () => {
  imageManipulator.changeOpacity(127)
})

const rotateClockwiseButton = document.getElementById('btn-rotate-clockwise')
rotateClockwiseButton.addEventListener('click', () => {
  imageManipulator.changeRotation(90)
})

const rotateCounterClockwiseButton = document.getElementById(
  'btn-rotate-counterclockwise'
)
rotateCounterClockwiseButton.addEventListener('click', () => {
  imageManipulator.changeRotation(-90)
})

const tintColorButton = document.getElementById('btn-tint-color')
const selectOption = document.getElementById('select-color')
tintColorButton.addEventListener('click', () => {
  const selectedColor = selectOption.value
  imageManipulator.changeTint(selectedColor, 1.1)
})
