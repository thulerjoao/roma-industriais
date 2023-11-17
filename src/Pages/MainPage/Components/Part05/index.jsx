import * as Style from "./style";
import pic_01  from '../../../../assets/jobs_images/pic_01.jpeg'
import pic_02  from '../../../../assets/jobs_images/pic_02.jpeg'
// import pic_03  from '../../../../assets/jobs_images/pic_03.jpeg'
import pic_04  from '../../../../assets/jobs_images/pic_04.jpeg'
// import pic_05  from '../../../../assets/jobs_images/pic_05.jpeg'
import pic_06  from '../../../../assets/jobs_images/pic_06.jpeg'
import pic_07  from '../../../../assets/jobs_images/pic_07.jpeg'
// import pic_08  from '../../../../assets/jobs_images/pic_08.jpeg'
import pic_09  from '../../../../assets/jobs_images/pic_09.jpeg'
import pic_10  from '../../../../assets/jobs_images/pic_10.jpeg'
import pic_11  from '../../../../assets/jobs_images/pic_11.jpeg'
import pic_12  from '../../../../assets/jobs_images/pic_12.jpeg'
// import pic_13  from '../../../../assets/jobs_images/pic_13.jpeg'
import pic_14  from '../../../../assets/jobs_images/pic_14.jpeg'
import pic_15  from '../../../../assets/jobs_images/pic_15.jpeg'
// import pic_16  from '../../../../assets/jobs_images/pic_16.jpeg'
import pic_17  from '../../../../assets/jobs_images/pic_17.jpeg'
import pic_18  from '../../../../assets/jobs_images/pic_18.jpeg'



import Carousel from '../../../GlobalComponents/Carousel/index';
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp"


const Part05 = () => {

    const images = [
        pic_01,
        pic_02,
        // pic_03,
        pic_04,
        // pic_05,
        pic_06,
        pic_07,
        // pic_08,
        pic_09,
        pic_10,
        pic_11,
        pic_12,
        // pic_13,
        pic_14,
        pic_15,
        // pic_16,
        pic_17,
        pic_18,

    ];

    return (
        <Style.Part05>
            <div className="second">
                <p className="firstText">Se apaixone por alguns dos</p>
                <p className="secondText">nossos últimos projetos.</p>
                <p className="buttonBudget" onClick={handleWhatsAppRedirect}>Quero um orçamento</p>
            </div>
            <div className="fisrt">
                <Carousel images={images} />
            </div>
        </Style.Part05>
    )
}

export default Part05