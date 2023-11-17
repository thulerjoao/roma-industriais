import * as Style from "./style";
import imageRight from '../../../../assets/images/rightImg.jpg'
import imageLeft from '../../../../assets/images/leftImg.jpg'
import img01 from '../../../../assets/images/img01.png'
import img02 from '../../../../assets/images/img02.png'
import img03 from '../../../../assets/images/img03.png'
// import img04 from '../../../../assets/images/img04.png'

import Carousel from '../../../GlobalComponents/Carousel/index';
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp"



const Part02 = () => {

    const images = [
        imageRight,
        imageLeft,
        img01,
        img02,
        img03,
        // img04
        
    ];

    return (
        <Style.Part02>
            <div className="second">
                <Carousel images={images} />
            </div>
            <div className="first">
                <p className="firstText">Realize conosco o seu projeto dos sonhos.</p>
                <p className="secondText">Te ajudaremos a tirar do papel o projeto de ter móveis de alto padrão e sob medida para seu lar, gerando sofisticação, conforto e requinte.</p>
                <p className="buttonBudget" onClick={handleWhatsAppRedirect}>Quero orçar</p>
            </div>
        </Style.Part02>
    )
}

export default Part02