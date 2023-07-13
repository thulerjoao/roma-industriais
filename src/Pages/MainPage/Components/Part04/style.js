import styled from 'styled-components';

export const Part04 = styled.section`
            margin-top: 50vh;
            background-color: black;
            color: white;
            height: calc(100vh - 96px);            

            section{
                display: flex;
                align-items: center;
                padding-left: 0 8rem;

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
                        cursor: pointer;
                        border-radius: 5px;
                        margin-top: 2rem;

                        a{
                            text-decoration: none;
                            color: black;

                        }

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
                        padding-right: 10%;

                        .examples{
                            font-size: 1.3em;
                            width: 50%;
                            text-align: start;
                            padding-left: 20%;
                            margin: 2rem 0;
                        }
                    }
            }
            @media screen and (max-width: 768px) {

                section{
                    margin-top: -4rem;
                    min-width: 100%;
                    flex-direction: column;
                    justify-content: center;

                    h2{
                    width: 60vw ;
                    height: 1px;
                    border: 1px solid white;
                    margin: 3rem 0;
                    };

                    .catologDiv{
                        height: 40%;
                        margin-top: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        p{
                            font-size: 1.8em;
                            margin: 0.1rem;
                            text-align: start;
                        }

                    }

                    .exampleDiv{
                        min-width: 100%;
                        min-height: 60%;
                        margin-top: 0;
                        justify-content: center;
                        align-items: center;
                        padding-right: 0%;

                        .examples{
                            font-size: 1.2em;
                            width: default;
                            max-width: 40%;
                            padding-left: 0;
                            margin: 0.9rem 0;
                            flex-wrap: nowrap;

                        }
                    }
                }

            }
`