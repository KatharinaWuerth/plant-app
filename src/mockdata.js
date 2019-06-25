import pilea from './img/Pilea.jpg'
import gasteria from './img/Gasteria.jpg'
import haworthia from './img/Haworthia.jpg'
import orchid from './img/Orchid.jpg'
import magnolia from './img/Magnolia.jpg'
import mohn from './img/Mohn.jpg'
import gummibaum from './img/Gummibaum.jpg'
import geranie from './img/Geranie.jpg'

const plantObjects = [
  {
    title: 'Magnolie',
    img: magnolia,
    id: '1',
    isBookmarked: false,
    tagList: [
      'not-room',
      'not-dark',
      'moist',
      'easy',
      'big',
      'wide',
      'toxic',
      'winter',
      'not-allergenic',
    ],
    description:
      'Magnolien haben einen hohen Wasserbedarf. Gerade in den Sommermonaten sollte die Pflanze daher regelmäßigen Zugang zu Wasser haben und nicht austrocknen. Die weitere Pflege der Magnolie ist recht einfach. Beschnitten wird der Baum nur etwa alle drei bis fünf Jahre, gedüngt werden muss er nur bei einem nährstoffarmen Boden. Die Pflanze kann auch in einem Kübel gehalten werden, sollte dann jedoch regelmäßig gegossen und gedüngt werden. Der Baum ist leicht giftig, für Menschen jedoch ungefährlich.',
  },
  {
    title: 'Pilea',
    img: pilea,
    id: '2',
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'moist',
      'easy',
      'big',
      'not-wide',
      'not-toxic',
      'not-winter',
      'not-allergenic',
    ],
    description:
      'Die Pilea oder auch Ufopflanze ist sehr pflegeleicht. Ein sonniger bis halbschattiger Standort, regelmäßiges gießen - der Boden sollte niemals komplett austrocknen - und die Pflanze sollte rundum glücklich sein. Um einen schönen Wuchs zu garantieren muss die Pilea regelmäßig um ihre eigene Achse gedreht werden.',
  },
  {
    title: 'Gasteria',
    img: gasteria,
    id: '3',
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'not-moist',
      'easy',
      'not-big',
      'not-wide',
      'toxic',
      'not-winter',
      'not-allergenic',
    ],
    description:
      'Wer nicht viel Zeit hat, sich aber an grünen Pflanzen erfreut, für den ist die Gasteria genau richtig. Sie verträgt einen halbschattigen, aber auch sonnigen Standort und sie kommt auch längere Zeit ohne regelmäßiges Gießen aus. Wer Katzen hat, die gerne an grünen Blättern naschen sollte aber lieber auf diese Pflanze verzichten.',
  },
  {
    title: 'Haworthia',
    img: haworthia,
    id: '4',
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'not-moist',
      'easy',
      'not-big',
      'not-wide',
      'not-toxic',
      'not-winter',
      'not-allergenic',
    ],
    description:
      'Ihre meist schmale Wuchsform und ihre unaufwendige Handhabung machen die Pflanze zu einer beliebten und dekorativen Zimmerpflanze. Ungiftig und selbst mit kargen Bedingungen zufrieden ist es die perfekte Einsteigerpflanze.',
  },
  {
    title: 'Orchidee',
    img: orchid,
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
      'Orchideen sind relative pflegeleicht. Sie wollen keine pralle Sonne und vertragen einen halbschattigen Standort. Ein West- oder Ost-Fenster eignet sich daher gut. Die Pflanze bevorzugt eine höhere Luftfeuchtigkeit. Ein Standort im Badezimmer ist hierbei sehr hilfreich oder man besprüht die Orchideen einfach regelmäßig mit Wasser. Betreffend des Gießens: Einmal pro Woche die Pflanze tauchen. Orchideen sind nicht direkt giftig, eine Einnahme der Blätter oder Wurzeln kann jedoch zu Übelkeit und Schwindel führen.',
  },
  {
    title: 'Gummibaum',
    img: gummibaum,
    id: '6',
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'moist',
      'easy',
      'big',
      'wide',
      'toxic',
      'not-winter',
      'allergenic',
    ],
    description:
      'Ein sehr attraktiver und pflegeleichter Baum. Wer allerdings Kinder oder Haustiere hat, der sollte lieber auf diese Pflanze verzichten. Die Blätter sind leicht giftig und können allergische Hautreaktionen hervorrufen. Er verträgt einen halbschattigen Standort, sogar Heizluft im Winter macht ihm nichts aus. Jedoch sollte man ausreichend Platz in der Wohnung haben, da der Gummibaum ausladend und hoch wächst.',
  },
  {
    title: 'Mohn',
    img: mohn,
    id: '7',
    isBookmarked: false,
    tagList: [
      'not-room',
      'not-dark',
      'moist',
      'easy',
      'not-big',
      'not-wide',
      'toxic',
      'winter',
      'allergenic',
    ],
    description:
      'Der attraktive Klatschmohn macht sich in jedem Garten gut. Vor allem die ureifen Samen sind jedoch leicht giftig und können zu Übelkeit, Erbrechen und Bauchschmerzen führen. Gerne hat die Pflanze einen wasserdurchlässigen Boden, sie verträgt keine Staunässe. Volle Sonneneinstrahlung ist kein Problem.',
  },
  {
    title: 'Garanie',
    img: geranie,
    id: '8',
    isBookmarked: false,
    tagList: [
      'not-room',
      'not-dark',
      'moist',
      'easy',
      'not-big',
      'not-wide',
      'toxic',
      'not-winter',
      'allergenic',
    ],
    description:
      'Wer kleine Haustiere hat, sollte auf jeden fall auf diese Pflanze verzichten. Für Hamster und Hasen kann der Verzehrt tötdlich enden. Katzen und Hunde sind davon nicht betroffen, auch für Menschen ist die Geranie ungefährlich. Sie verträgt pralle Sonne, möchte dann aber ausreichend gegossen werden.',
  },
]

export default plantObjects
