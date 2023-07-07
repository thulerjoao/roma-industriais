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
        height: 135px;
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
                transition: 0.2s ease-in-out;

            }

            p:hover{
                color: #df0024;
                border-bottom: 3px solid red;
            }
 

            .budget{
                background-color: #df0024;
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
        margin-top: 135px;

        section{
            width: 100%;
            min-height: calc(100vh - 135px);

        }

        .part01{
            background: url(${background01});
            background-size: 100%;

            div{
                min-height: calc(100vh - 135px);
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
        }

        .part02{
            display: flex;
            flex-direction: row;

            div{
                width: 50%;
                height: calc(100vh - 134px);

            }

            .first{
                    background-color: #df0024;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    h2{
                        color: white;
                        
                    }

                    .firstText{
                    font-size: 2em;
                    width: 15rem;
                    text-align: center;
                    margin-bottom: 1rem;
                    font-weight: 400;
                }

                .secondText{
                    font-size: 1.2em;
                    width: 22rem;
                    text-align: center;
                    border-top: 1px solid white;
                    padding-top: 1rem;
                    font-weight: 300;
                    
                }

                .buttonBudget{
                    color: white;
                    background-color: black;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-top: 2rem;
                }

                .buttonBudget:hover{
                    transform: scale(1.01);
                }
            }

            .second{
                display: flex;
                flex-direction: row;

                img{
                    max-width: 100%;
                }
            }
        }

        .part03{
            display: flex;
            justify-content: center;
            align-items: center;
            
            
            section{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                justify-content: space-between;
                
                img{
                    height: 18rem;
                    width: 18rem;
                    border-radius: 50%;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
    
                    h2{
                        font-size: 2em;
                        padding-bottom: 3rem;
                        border-bottom: 1px solid red;
                        width: 350px;
                        font-weight: 400;
                    }
    
                    p{
                        margin-top: 1rem;
                        width: 500px;
                        font-size: 1.2em;
                        font-weight: 300;

                    }
                }
            }
            
        }
    }

    footer{
        border-top: 1px solid black;
        width: 100%;
    }
`
