function createFrame(names) {
  let sortedNames = [...names].sort((a,b) => a.length - b.length)
  let longestName = sortedNames[names.length - 1]
  let biggestRowLength = longestName.length + 4
  let frame = ''.padStart(biggestRowLength, '*') + '\n'

  for(let [key, name] of Object.entries(names)){
    let row = ''

    row = `* ${name}`.padEnd(biggestRowLength - 1) + '*\n'

    frame += row
  }

  frame = frame.padEnd(frame.length + biggestRowLength, '*')

  return frame
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz', 'midu']))
