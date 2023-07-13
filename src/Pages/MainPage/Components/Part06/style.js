import styled from 'styled-components';
import { FaPhone, FaInstagram } from 'react-icons/fa';


export const Part06 = styled.section`
    display: flex;
    background-color: #D9D9D9;

    section{
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
    
            div{
                /* padding-left: 30%; */
                display: flex;
                width:100%;
                text-align: start;
                margin-bottom: 1%;
                
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
        /* justify-content: start; */
        max-height: 100vh;


        section{
            max-height: calc((100vh - 96px)/2);
            justify-content: center;
            align-items: center;

            html{
            margin-left: 15%;
            margin-top: -20%;
            
        }

        }
    }
`

export const PhoneIcon = styled(FaPhone)`
    color: green;
    font-size: 24px;
    cursor: pointer;
`;

export const InstagramIcon = styled(FaInstagram)`
    color: purple;
    font-size: 24px;
    cursor: pointer;
`;