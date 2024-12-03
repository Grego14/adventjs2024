function organizeInventory(inventory) {
  const organized = {}

  for(let {name, quantity, category} of inventory){
    organized[category] ??= {}

    if(organized[category][name]){
      organized[category][name] += quantity
      continue
    }

    organized[category][name] = quantity
  }

  return organized
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary))
