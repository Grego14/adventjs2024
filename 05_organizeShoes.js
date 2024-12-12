/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */

function organizeShoes(shoes) {
  const pairs = []
  let objs = {}
  const types = {'I': 'R', 'R': 'I'}

  let i = 0

  while(i !== shoes.length){
    objs[shoes[i].size] ??= {I: 0, R: 0}

    const pairObj = objs[shoes[i].size]

    objs[shoes[i].size][shoes[i].type]++

    if(pairObj?.I >= 1 && pairObj?.R >= 1){
      objs[shoes[i].size].I--
      objs[shoes[i].size].R--
      pairs.push(shoes[i].size)
    }

    i++
  }

  objs = Object.entries(objs)

  return pairs
}

console.log(organizeShoes([
  { type: 'I', size: 40 },
  { type: 'R', size: 40 },
  { type: 'I', size: 40 },
  { type: 'R', size: 40 }]
))

console.log(organizeShoes([
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }]
))

console.log(organizeShoes([
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]))

console.log(organizeShoes([
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 } ]
))

console.log(organizeShoes([
  { type: 'I', size: 40 },
  { type: 'R', size: 40 },
  { type: 'I', size: 40 },
  { type: 'R', size: 40 }]
))
