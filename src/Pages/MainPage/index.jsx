import * as Style from "./style";
// import imageRight from '../../assets/images/rightImg.jpg'
import imageLeft from '../../assets/images/leftImg.jpg'
import arrowDown from '../../assets/images/arrowDown.png'
import ownerPic from '/src/assets/images/ownerPic.png'
import logo03 from '/src/assets/logos/logo03.png'



const MainPage = () => {

    return (
        <Style.MainPage>
            <header>
                <div>
                    <img src={logo03}></img>
                </div>
                <div>
                    <p>Início</p>
                    <p>Nossa missão</p>
                    <p>Sobre</p>
                    <p>Serviços</p>
                    <p>Projetos</p>
                    <div className="budget">Orçamento</div>
                </div>
            </header>
            <body>
                <section className="part01">
                    <div>
                        <p>Decorando sonhos,</p>
                        <h2></h2>
                        <p>criando mundos.</p>
                        <img src={arrowDown}></img>
                    </div>
                </section>
                <section className="part02">
                    <div className="first">
                        <p className="firstText">Realize conosco o seu projeto dos sonhos.</p>
                        <p className="secondText">Te ajudaremos a tirar do papel o projeto de ter móveis de alto padrão e sob medida para seu lar, gerando sofisticação, conforto e requinte.</p>
                        <p className="buttonBudget">Quero orçar</p>
                    </div>
                    <div className="second">
                        <img src={imageLeft}></img>

                    </div>
                </section>
                <section className="part03">
                    <section>
                        <img src={ownerPic}></img>
                        <div>
                            <h2>De onde viemos</h2>
                            <p>surgiu da ideia de dois potenciais projetistas, Rafael oliveira e Jonatan Martins com a proposta de entegar a seus clientes
                                uma nova forma de atendimento direcionado a criação e
                                decoração de ambientes baseado em móveis planejados</p>
                        </div>
                    </section>
                </section>
                <section className="part04">servi~cos</section>
                <section className="part05">projetos</section>
            </body>
            <footer> final of the website</footer>
        </Style.MainPage>
    )
}

export default MainPage