function prepareGifts(gifts) {
  const giftsNoDups = [...new Set(gifts)]

  return giftsNoDups.sort((a,b) => a-b)
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))
