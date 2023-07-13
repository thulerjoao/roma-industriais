import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  min-width: 100%;
  overflow: hidden;
  /* border: 10px solid #515151;
  border-top: 0; */
  /* margin-top: -1px; */
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.9s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 200}%);
  width: ${(props) => props.totalImages * 100}%;

  @media screen and (max-width: 768px) {
    transform: translateX(${(props) => -props.currentIndex * 100}%);
  }
`;

export const CarouselImage = styled.img`
  min-width: 200%;
  /* height: 100%; */
  background-size: 100%;
  /* height: 100%; */
  object-fit: cover;
  transition: 0.7s ease-in-out;

  &:hover{
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    min-width: 100%;

    &:hover{
    transform: scale(1);
  }

  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  font-size: 25px;
  border: none;
  cursor: pointer;
`;

export const PreviousButton = styled(NavigationButton)`
  left: 20px;
  width: 20px;
  border-radius: 3px;
  background-color: #00000090;
`;

export const NextButton = styled(NavigationButton)`
  right: 20px;
  width: 20px;
  border-radius: 3px;
  background-color: #00000090;
`;
