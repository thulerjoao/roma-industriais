import styled from 'styled-components';
import background01 from '/src/assets/images/background01.png'

export const Part01 = styled.section`
            
            background: url(${background01});
            background-size: cover;
            background-position: center;

            div{
                min-height: calc(100vh - 100px);
                width: 100%;
                background-color: #00000090;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                p{
                    font-size: 4em;
                }

                h2{
                    border: 2.5px solid #df0024;
                    width: 40%;
                }

                img{
                    margin-top: 2%;
                    height: 2rem;
                    animation: moveArrow 1s infinite;
                }

                @keyframes moveArrow {
                 0% {
                   transform: translateY(0);
                 }
                 50% {
                  transform: translateY(10px);
                 }
                 100% {
                 transform: translateY(0);
                }
                }   
            }

            @media screen and (max-width: 600px) {

                div{
                    min-height: calc(100vh - 75px);
                    
                        p{
                        font-size: 2em;
                    }

                    h2{
                        border: 1px solid #df0024;
                        width: 80%;
                    }

                    img{
                    margin-top: 12%;
                    height: 1.5rem;
                    animation: moveArrow 1s infinite;
                }
                }
                
            }
`