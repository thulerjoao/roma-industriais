import styled from 'styled-components';


export const Part06 = styled.section`
    display: flex;
    background-color: #D9D9D9;
    height: calc((100vh - 100px));


    .mainDiv{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        html{
            margin-left: 25%;
            margin-top: -20%;
        }


            
            h2{
                width: 100%;
                text-align: start;
                /* padding-left: 15%; */
                margin: 5% 0;
            }
    
            p{
                width: 100%;
                padding-left: 5%;
                padding-right: 25%;
                margin: 0.1% 0;
            }

            .contactP{
                padding-right: 0;
                min-width: 15rem;
                max-width: 16rem;
            }

            img{
                height: 22px;
                cursor: pointer;
            }
    
            div{
                /* padding-left: 30%; */
                display: flex;
                width:100%;
                text-align: start;
                margin-bottom: 2%;
                
                p{
                    cursor: pointer;
                }
    
            }


        .map{
            height: 80%;
            width: 80%;
            border-radius: 0.5rem;
            text-decoration: none;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: calc((100vh - 75px));
        justify-content: space-between;



        .mainDiv{
 
            height: 50%;
            width: 100%;
            justify-content: start;
            padding: 5% 8%;
            

            html{
                max-height: 50%;
                margin-left: 0%;
                margin-top: 0vh;
            }

            h2{
                font-size: 1.4em;
                margin-bottom: 1vh;
                margin-top: 2.5vh;

            }

            p{
                font-size: 1em;
                margin: 0;
            }

            .map{
            height: 30vh;
            width: 95%;
            border-radius: 0.5rem;
            /* margin-top: 5%; */

            text-decoration: none;
        }
        }
    }
`