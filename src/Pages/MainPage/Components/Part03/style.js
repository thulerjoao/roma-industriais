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
                max-width: 50%;
                justify-content: space-between;
                height: calc(100vh - 96px);

                
                img{
                    height: 18rem;
                    width: 18rem;
                    border-radius: 50%;
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

                    }
                }
            }
`