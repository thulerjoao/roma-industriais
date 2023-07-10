import styled from 'styled-components';
import background01 from '/src/assets/images/background01.png'



export const MainPage = styled.html`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .hidenImage{
        position: fixed;
        z-index: -1;
        width: 100%;
        max-width: 150rem;
        background-size: 100%;
        bottom: 0;
    }

    header{
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: white;
        z-index: 99;
        height: 100px;
        width: 100%;
        /* border-bottom: 1px solid black; */
        
        img{
            height: 85px;
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
        margin-top: 100px;

        section{
            width: 100%;
            min-height: calc(100vh - 100px);

        }

        .part01{
            background: url(${background01});
            background-size: 100%;

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
        }

        .part02{
            display: flex;
            flex-direction: row;

            div{
                width: 50%;
                height: calc(100vh - 96px);

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
            background-color: white;
            
            
            section{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                justify-content: space-between;
                height: calc(100vh - 96px);

                
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

        .part04{
            margin-top: 50vh;
            background-color: black;
            color: white;
            height: calc(100vh - 96px);            

            section{
                display: flex;
                align-items: center;
                padding: 0 8rem;

                h2{
                    width: 1px;
                    height: 60vh;
                    border: 1px solid white;
                };

                .catologDiv{
                    width: 100%;
                    max-height: 50%;
                    margin-top: -3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    p{
                        font-size: 2rem;
                        margin: 0.1rem;
                        text-align: start;
                    }

                    .redText{
                        color:  #df0024;
                    }

                    .catalog{
                        margin-top: 2rem;
                        font-size: 1em;
                        background-color: white;
                        padding: 10px 20px;
                        color: black;
                        cursor: pointer;
                        border-radius: 5px;
                        margin-top: 2rem;

                        &:hover{
                            transform: scale(1.01);
                        }
                    }
                }

                .exampleDiv{
                        width: 100%;
                        max-width: 50%;
                        margin-top: -3rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;

                        .examples{
                            font-size: 1.3em;
                            width: 50%;
                            text-align: start;
                            padding-left: 20%;
                            margin: 2rem 0;
                        }
                    }
            }
        }

        .part05{
            display: flex;
            flex-direction: row;

            div{
                width: 50%;
                height: calc(100vh - 96px);

            }

            .first{
                display: flex;
                flex-direction: row;

                img{
                    max-width: 100%;
                }
            }

            .second{
                    background-color: #df0024;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    
                .firstText{
                    font-size: 2em;
                    text-align: center;
                    font-weight: 400;
                    margin-top: -3rem;
                }
                
                .secondText{
                    font-size: 2em;
                    text-align: center;
                    border-bottom: 1px solid white;
                    padding: 0 3rem;
                    padding-bottom: 1.5rem;
                    font-weight: 400;
                    
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

            

        }
    }

    footer{
        border-top: 1px solid black;
        width: 100%;
        background-color: white;
    }
`
