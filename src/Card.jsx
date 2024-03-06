import Paragraph from "./Paragraph";
import './card.css';

export default function Card(){
    return(
    <div className='card'>
        <div className='container'>
            <img src="../public/image-qr-code.png" alt="qr code image" className='image'/>
            <Paragraph ></Paragraph>
        </div>
    </div>
    );
}