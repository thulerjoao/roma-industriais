import styled from 'styled-components';

export const Part02 = styled.section`
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
`