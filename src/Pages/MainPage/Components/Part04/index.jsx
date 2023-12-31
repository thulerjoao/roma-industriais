import * as Style from "./style";
import catalogo from "../../../../assets/Catalogo/catalogo.pdf"

const Part04 = () => {

    

    return (
        <Style.Part04>
            <section>
                        <div className="catologDiv">
                            <p>Renove cada ambiente</p>
                            <p>com nossos exclusivos</p>
                            <p className="redText">móveis de alto padrão.</p>
                            <p className="catalog">
                                <a href={catalogo} download="catalogo_roma.pdf">Conferir catálogo</a>
                            </p>
                        </div>
                        <h2></h2>
                        <div className="exampleDiv">
                            <p className="examples">• Cozinhas</p>
                            <p className="examples">• Banheiros</p>
                            <p className="examples">• Quartos</p>
                            <p className="examples">• Sala de estar</p>
                            <p className="examples">• Lojas</p>
                            <p className="examples">• Salas comerciais</p>
                            <p className="examples">• Escritórios</p>
                            <p className="examples">• Consultórios</p>
                        </div>
                    </section>
        </Style.Part04>
    )
}

export default Part04