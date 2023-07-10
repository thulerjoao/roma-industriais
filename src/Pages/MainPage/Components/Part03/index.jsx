import * as Style from "./style";
import ownerPic from '/src/assets/images/ownerPic.jpg'

const Part03 = () => {
    return (
        <Style.Part03>
            <section>
                <img src={ownerPic}></img>
                <div>
                    <h2>De onde viemos</h2>
                    <p>surgiu da ideia de dois potenciais projetistas, Rafael oliveira e Jonatan Martins com a proposta de entegar a seus clientes
                        uma nova forma de atendimento direcionado a criação e
                        decoração de ambientes baseado em móveis planejados</p>
                </div>
            </section>
        </Style.Part03>
    )
}

export default Part03