function createXmasTree(height, ornament) {
  let tree = ''

  for(let i = 1, j = 0; i < height + 1; i++, j++){
    let space = '_'.repeat(height - i)

    tree += `${space}${ornament.repeat(i + j)}${space}\n`

    if(i === height){
      let trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
      tree += `${trunk}\n${trunk}`
    }
  }

  return tree
}

console.log(createXmasTree(3, '*'))
