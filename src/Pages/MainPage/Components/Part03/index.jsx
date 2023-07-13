import * as Style from "./style";
import ownerPic from '/src/assets/images/ownerPic.jpg'

const Part03 = () => {
    return (
        <Style.Part03>
            <section>
                <img src={ownerPic}></img>
                <div>
                    <h2>De onde viemos</h2>
                    <p>Casal empreendedor: fruto da junção dos nomes Rodrigo e Maria nasceu o nome da nossa marca: ROMA. 
                        Na pandemia, o casal transformou o hobby em serralheira e marcenaria em um novo negócio.
                        Ela com as ideias e ele na execução formam uma ótima dupla.
                        Hoje, a Roma Industriais é uma marca forte no mercado regional, com loja própria e serralheira de ponta.</p>
                </div>
            </section>
        </Style.Part03>
    )
}

export default Part03