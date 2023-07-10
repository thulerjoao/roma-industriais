import * as Style from "./style";
import imageRight from '../../../../assets/images/rightImg.jpg'
import imageLeft from '../../../../assets/images/leftImg.jpg'
import Carousel from '../../../GlobalComponents/Carousel/index';
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp"


const Part05 = () => {

    const images = [
        imageRight,
        imageLeft,
        imageRight,
        imageLeft,
        imageRight,
        imageLeft,
    ];

    return (
        <Style.Part05>
            <div className="fisrt">
                <Carousel images={images} />
            </div>
            <div className="second">
                <p className="firstText">Se apaixone por alguns dos</p>
                <p className="secondText">nossos últimos projetos.</p>
                <p className="buttonBudget" onClick={handleWhatsAppRedirect}>Quero um orçamento</p>
            </div>
        </Style.Part05>
    )
}

export default Part05