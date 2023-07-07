import styled from 'styled-components';

export const MainPage = styled.html`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        /* background-color: pink; */
        height: 144px;
        width: 100%;
        border-bottom: 1px solid black;
        

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            

            img{
                height: 120px;
            }

            p{
                margin: 0 15px;
                margin-top: 3px;
                cursor: pointer;
                border-bottom: 3px solid #ffffff00;

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
`