export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]): boolean {
  // Write your code here.
  let isValid = true
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)
  if (redShirtHeights[0] > blueShirtHeights[0]) return classPhotos(blueShirtHeights, redShirtHeights)
  redShirtHeights.forEach((e, i) => {
    if (blueShirtHeights[i] <= e) isValid = false
    console.log(e, i, blueShirtHeights[i], isValid)
  })
  return isValid
}

// 2023/10/30 Done.
