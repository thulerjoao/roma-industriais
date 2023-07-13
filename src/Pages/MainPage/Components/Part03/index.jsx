import * as Style from "./style";
import ownerPic from '/src/assets/images/ownerPic.jpg'

const Part03 = () => {
    return (
        <Style.Part03>
            <section>
                <img src={ownerPic}></img>
                <div>
                    <h2>De onde viemos</h2>
                    <p>Rodrigo e Maria são um jovem casal empreendedor no mercado de design de interiores com móveis no estilo industrial. Rodrigo cria móveis planejados únicos, combinando aço, ferro e madeira rústica. Com o apoio de Maria no atendimento ao cliente, fundaram a Roma Industriais, oferecendo um serviço personalizado e de qualidade.  Hoje, são referência no mercado, sendo reconhecidos pela excelência e atenção aos detalhes, e mostrando que com paixão e talento é possível transformar uma ideia em realidade.</p>
                </div>
            </section>
        </Style.Part03>
    )
}

export default Part03