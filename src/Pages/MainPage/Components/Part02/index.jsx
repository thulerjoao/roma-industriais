import * as Style from "./style";
import imageRight from '../../../../assets/images/rightImg.jpg'
import imageLeft from '../../../../assets/images/leftImg.jpg'
import Carousel from '../../../GlobalComponents/Carousel/index';
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp"



const Part02 = () => {

    const images = [
        imageRight,
        imageLeft,
        imageRight,
        imageLeft,
        imageRight,
        imageLeft,
    ];

    return (
        <Style.Part02>
            <div className="first">
                <p className="firstText">Realize conosco o seu projeto dos sonhos.</p>
                <p className="secondText">Te ajudaremos a tirar do papel o projeto de ter móveis de alto padrão e sob medida para seu lar, gerando sofisticação, conforto e requinte.</p>
                <p className="buttonBudget" onClick={handleWhatsAppRedirect}>Quero orçar</p>
            </div>
            <div className="second">
                <Carousel images={images} />
            </div>
        </Style.Part02>
    )
}

export default Part02