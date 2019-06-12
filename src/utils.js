export function getMatchedOptions(tagList, selection) {
  return selection.filter(option => tagList.indexOf(option) !== -1)
}

export function getMatchedNum(plant, selection) {
  return getMatchedOptions(plant.tagList, selection).length
}
