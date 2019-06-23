import uid from 'uid'

// Liste von OptionGroups

const optionList = [
  {
    id: uid(),
    options: [
      { id: 'room', label: 'Wohnungspflanze' },
      { id: 'not-room', label: 'Gartenpflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-dark', label: 'heller Raum' },
      { id: 'dark', label: 'dunkler Raum' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-moist', label: 'niedrige Luftfeuchtigkeit' },
      { id: 'moist', label: 'hohe Luftfeuchtigkeit' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'easy', label: 'pflegeleicht' },
      { id: 'not-easy', label: 'grüner Daumen' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-big', label: 'kleine Pflanze' },
      { id: 'big', label: 'große Pflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-wide', label: 'schmale Pflanze' },
      { id: 'wide', label: 'ausladende Pflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-toxic', label: 'tierfreundlich' },
      { id: 'toxic', label: 'ungenießbar' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'winter', label: 'frostbeständig' },
      { id: 'not-winter', label: 'temperaturempfindlich' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-allergenic', label: 'allergikerfreundlich' },
      { id: 'allergenic', label: 'allergen' },
    ],
  },
]

export default optionList
