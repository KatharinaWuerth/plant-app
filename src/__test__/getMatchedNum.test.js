import { getMatchedNum } from '../utils'

const plant = {
  title: 'Orchidee',
  id: '5',
  isBookmarked: false,
  tagList: [
    'room',
    'dark',
    'moist',
    'easy',
    'not-big',
    'not-wide',
    'toxic',
    'not-winter',
    'allergenic',
  ],
  description:
    'Orchideen sind relative pflegeleicht. Sie wollen keine pralle Sonne und vertragen einen halbschattigen Standort. Ein West- oder Ost-Fenster eignen sich daher gut. Die Pflanze bevorzugt eine höhere Luftfeuchtigkeit. Ein Standort im Badezimmer ist hierbei sehr hilfreich oder man besprüht die Orchideen einfach regelmäßig mit Wasser. Betreffend des Gießens: Einmal pro Woche die Pflanze tauchen. Orchidden sind nicht direkt giftig, eine Einnahme der Blätter oder Wurzeln kann jedoch zu Überkeit, Schweindel, ... führen.',
}

describe('get matched Number', () => {
  test('works with empty selection list', () => {
    expect(getMatchedNum(plant, [])).toEqual(0)
  })
  test('works with content', () => {
    expect(getMatchedNum(plant, ['toxic'])).toEqual(1)
  })
})
