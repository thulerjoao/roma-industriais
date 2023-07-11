import * as Style from "./style";
import { handleWhatsAppRedirect } from "../../../../Utils/functions/linkToWpp.js"

const Part06 = () => {

    const redirectToInstagram = () => {
        const instagramUsername = 'romaindustriais'; // Substitua pelo nome de usuário do perfil do Instagram desejado
        const instagramURL = `https://www.instagram.com/${instagramUsername}`;
        window.open(instagramURL, '_blank');
      };

    return (
        <Style.Part06>
            <section>
                <html>
                    <h2>Faça-nos uma visita</h2>
                    <p>Segunda a Sexta | 08:00h às 17:00h</p>
                    <p>Sábado | 08:00h à 13:00h</p>
                    <p>---</p>
                    <p>Av. Manoel de menezes, 449, Ponte da Saudade, Nova Friburgo, RJ </p>
                    <h2>Contato</h2>
                    <div>
                        <p className="contactP" onClick={handleWhatsAppRedirect}>
                            22 98877-4726 (WhatsApp)
                        </p>
                        <Style.PhoneIcon onClick={handleWhatsAppRedirect}/>
                    </div>
                    <div>
                        <p className="contactP" onClick={redirectToInstagram}>
                            @romaindustriais
                        </p>
                        <Style.InstagramIcon onClick={redirectToInstagram}/>
                    </div>
                </html>
            </section>
            <section>
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m20!1m11!1m3!1d677.1783054990112!2d-42.52018478497411!3d-22.31242569925102!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-22.3124145!2d-42.520151!5e1!3m2!1spt-BR!2sbr!4v1689035706072!5m2!1spt-BR!2sbr"
                    allowfullscreen="true"
                    loading="lazy"></iframe>
            </section>
        </Style.Part06>
    )
}

export default Part06