import styled from 'styled-components';

export const Part05 = styled.section`
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

`