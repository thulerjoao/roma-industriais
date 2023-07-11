import styled from 'styled-components';

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

            .active{
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
    }

    footer{
        background-color: black;
        height: 10vh;
        width: 100%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
    }
`
