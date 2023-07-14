import styled from 'styled-components';

export const Part03 = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            
            
            section{
                display: flex;
                justify-content: center;
                align-items: center;
                justify-content: space-evenly;
                height: calc(100vh - 96px);

                
                img{
                    height: 18rem;
                    width: 18rem;
                    border-radius: 50%;
                    margin-right: -10rem;
                    box-shadow: 2px 2px 10px 1px black;

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
                        text-align: justify;

                    }
                }
            }

            @media screen and (max-width: 600px) {

                section{
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    height: calc(100vh - 75px);


                    img{
                        margin: 0;
                        height: 30vh;
                        width: 30vh;
                    }

                    div{
                        padding: 0 2rem;
                        max-width: 100%;

                        h2{
                        border-bottom: 1px solid red;
                        width: 85%;

                    }

                        h2{
                        font-size: 1.8em;
                        padding-bottom: 2rem;


                        }

                        p{
                            font-size: 1em;
                            max-width: 100%;

                        }
                    }

                }

            }
`