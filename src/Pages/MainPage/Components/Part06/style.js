import styled from 'styled-components';
import { FaPhone, FaInstagram } from 'react-icons/fa';


export const Part06 = styled.section`
    display: flex;
    background-color: #9a9a9a;

    section{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        html{
            background-color: white;
            height: 55vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 75%;
            padding-left: 5rem;
            border-radius: 1rem;
            /* box-shadow: 2px 2px 5px 0px black; */

            
            h2{
                width: 100%;
                text-align: start;
                /* padding-left: 15%; */
                margin: 1.5% 0;
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
        }


        .map{
            height: 55vh;
            width: 80vh;
            border-radius: 1rem;
            box-shadow: 2px 2px 5px 0px black;


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