import testPicture from './img/testPicture1.jpg'
import uid from 'uid'

const plantObjects = [
  { title: 'test1', img: testPicture, id: uid(), isBookmarked: false },
  { title: 'test2', img: testPicture, id: uid(), isBookmarked: false },
  { title: 'test3', img: testPicture, id: uid(), isBookmarked: false },
]

export default plantObjects
