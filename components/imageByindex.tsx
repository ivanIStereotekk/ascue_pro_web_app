import image1 from '../public/pic1.png'
import image2 from '../public/pic2.png'
import image3 from '../public/pic3.png'
import image4 from '../public/pic4.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex