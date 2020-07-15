// useTesseract.js
import Tesseract, {test0 as test, test1} from './tesseract.js'

const tess = new Tesseract('myPath')
test(tess)
test1(tess)
