////immaggine mappamondo
import imag from './mappamondo.gif';

import './stile.css';

function imagine(){
    const imgDomImage = new Image();
    imgDomImage.src = imag;
    imgDomImage.className = "my-image";
    return imgDomImage;

}


export default imagine;

