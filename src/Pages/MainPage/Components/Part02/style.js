import styled from 'styled-components';

export const Part02 = styled.section`
            display: flex;
            flex-direction: row;

            div{
                width: 50%;
                height: calc(100vh - 96px);
            }

            .first{
                    background-color: #515151;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    h2{
                        color: white;
                    }

                    .firstText{
                    color: white;
                    font-size: 2em;
                    width: 15rem;
                    text-align: center;
                    margin-bottom: 1rem;
                    font-weight: 400;
                }

                .secondText{
                    color: white;
                    font-size: 1.2em;
                    width: 22rem;
                    text-align: center;
                    border-top: 1px solid #df0024;
                    padding-top: 1rem;
                    font-weight: 300;
                    
                }

                .buttonBudget{
                    color: white;
                    background-color: #df0024;
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

            @media screen and (max-width: 768px) {
                flex-direction: column;
                
                div{
                width: 100%;
                height: calc((100vh - 75px)/2);
                }

                .first{

                    .firstText{
                        width: 90%;
                        font-size: 1.8em;

                    }

                    .secondText{
                    font-size: 1em;
                    
                }

                .buttonBudget{

                    margin-top: 3vh;
                }
                }

                
            
            }
`