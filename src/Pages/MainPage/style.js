import styled from 'styled-components';
import background01 from '/src/assets/images/background01.png'

export const MainPage = styled.html`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    header{
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: white;
        z-index: 99;
        height: 144px;
        width: 100%;
        /* border-bottom: 1px solid black; */
        
        img{
            height: 120px;
        }

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            


            p{
                margin: 0 15px;
                margin-top: 3px;
                cursor: pointer;
                border-bottom: 3px solid #ffffff00;
                transition: 0.4s ease-in-out;

            }

            p:hover{
                color: red;
                border-bottom: 3px solid red;
            }
 

            .budget{
                background-color: red;
                color: white;
                padding: 12px;
                border-radius: 5px;
                margin-left: 15px;
                cursor: pointer;
                
            }

            .budget:hover{
                transform: scale(1.01);
            }
        }
    }

    body{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-top: 144px;

        section{
            width: 100%;
            min-height: calc(100vh - 144px);

        }

        .part01{
            background: url(${background01});
            background-size: 100%;

            div{
                min-height: calc(100vh - 144px);
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
                    border: 2.5px solid red;
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
        }

        .part02{

        }
    }

    footer{
        border-top: 1px solid black;
        width: 100%;
    }
`