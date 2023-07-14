import * as Style from "./style";
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp.js"
import wpp from '/src/assets/logos/wpp02.png'
import instagram from '/src/assets/logos/instagram02.png'

const Part06 = () => {

    const redirectToInstagram = () => {
        const instagramUsername = 'romaindustriais'; // Substitua pelo nome de usuário do perfil do Instagram desejado
        const instagramURL = `https://www.instagram.com/${instagramUsername}`;
        window.open(instagramURL, '_blank');
      };

    return (
        <Style.Part06>
            <div className="mainDiv">
                <html>
                    <h2>Contato</h2>
                    <div>
                        <p className="contactP" onClick={handleWhatsAppRedirect}>
                            22 98877-4726 (WhatsApp)
                        </p>
                        <img onClick={handleWhatsAppRedirect} src={wpp}></img>
                    </div>
                    <div>
                        <p className="contactP" onClick={redirectToInstagram}>
                            @romaindustriais
                        </p>
                        <img onClick={redirectToInstagram} src={instagram}></img>
                    </div>
                    <h2>Faça-nos uma visita</h2>
                    <p>Segunda a Sexta | 08:00h às 17:00h</p>
                    <p>Sábado | 08:00h à 13:00h</p>
                    <p>---</p>
                    <p>Av. Manoel Carneiro de Menezes, 441, Ponte da Saudade, Nova Friburgo, RJ </p>
                </html>
            </div>
            <div className="mainDiv">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d922.772564507506!2d-42.520185!3d-22.312426!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x978b1cbbd38dfd%3A0x3801558b2e9748bc!2sRoma%20industriais%2C%20Av.%20Manoel%20Carneiro%20de%20Menezes%2C%20441%20-%20Mury%2C%20Nova%20Friburgo%20-%20RJ%2C%2028615-060!3m2!1d-22.3123328!2d-42.5200548!5e0!3m2!1spt-BR!2sbr!4v1689043793600!5m2!1spt-BR!2sb"
                    allowfullscreen="true"
                    loading="lazy"></iframe>
            </div>
        </Style.Part06>
    )
}

export default Part06