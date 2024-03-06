import Paragraph from "./Paragraph";
import './card.css';
import imgURL from '../public/image-qr-code.png';

export default function Card(){
    return(
    <div className='card'>
        <div className='container'>
            <img src={imgURL} alt="qr code image" className='image'/>
            <Paragraph ></Paragraph>
        </div>
    </div>
    );
}