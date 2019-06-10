import testPicture from './img/testPicture1.jpg'
import uid from 'uid'

const plantObjects = [
  {
    title: 'test1',
    img: testPicture,
    id: '11',
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'moist',
      'easy',
      'not-big',
      'wide',
      'toxic',
      'not-winter',
      'allergenic',
    ],
    description:
      'lorem ipsum sldkfj lsdkfj alsdkfj aölsdkfj dicj dlskfj ödslkvj cöij ölaekjd ldkjf öalkje cöijv aöldkjf aödjv löakdjf aöijcöl jijaödkjfaöelkj öcjv',
  },
  {
    title: 'test2',
    img: testPicture,
    id: uid(),
    isBookmarked: false,
    tagList: [
      'room',
      'not-dark',
      'moist',
      'not-easy',
      'big',
      'wide',
      'not-toxic',
      'winter',
      'not-allergenic',
    ],
    description:
      'lorem ipsum sldkfj lsdkfj alsdkfj aölsdkfj dicj dlskfj ödslkvj cöij ölaekjd ldkjf öalkje cöijv aöldkjf aödjv löakdjf aöijcöl jijaödkjfaöelkj öcjv',
  },
  {
    title: 'test3',
    img: testPicture,
    id: uid(),
    isBookmarked: false,
    tagList: [
      'not-room',
      'not-dark',
      'not-moist',
      'easy',
      'not-big',
      'not-wide',
      'not-toxic',
      'winter',
      'not-allergenic',
    ],
    description:
      'lorem ipsum sldkfj lsdkfj alsdkfj aölsdkfj dicj dlskfj ödslkvj cöij ölaekjd ldkjf öalkje cöijv aöldkjf aödjv löakdjf aöijcöl jijaödkjfaöelkj öcjv',
  },
  {
    title: 'test4',
    img: testPicture,
    id: uid(),
    isBookmarked: false,
    tagList: [
      'room',
      'dark',
      'not-moist',
      'easy',
      'big',
      'wide',
      'toxic',
      'not-winter',
      'allergenic',
    ],
    description:
      'lorem ipsum sldkfj lsdkfj alsdkfj aölsdkfj dicj dlskfj ödslkvj cöij ölaekjd ldkjf öalkje cöijv aöldkjf aödjv löakdjf aöijcöl jijaödkjfaöelkj öcjv',
  },
  {
    title: 'test5',
    img: testPicture,
    id: uid(),
    isBookmarked: false,
    tagList: [
      'not-room',
      'dark',
      'moist',
      'not-easy',
      'big',
      'wide',
      'not-toxic',
      'not-winter',
      'allergenic',
    ],
    description:
      'lorem ipsum sldkfj lsdkfj alsdkfj aölsdkfj dicj dlskfj ödslkvj cöij ölaekjd ldkjf öalkje cöijv aöldkjf aödjv löakdjf aöijcöl jijaödkjfaöelkj öcjv',
  },
]

export default plantObjects
