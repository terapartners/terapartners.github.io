import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';


const ContentWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Content = styled.span`
  font-size: 16px;
  line-height: 40px;
  font-family: 'Raleway';
  font-weight: 300;
  text-align: center;
`;


const ImgWrapper = styled.div`

  overflow: hidden;
  position: relative;
  margin: 0 auto;
  @media (min-width: 767px) {
    height: ${props => props.height}px;
    width: ${props => props.width}px;
  }
`;

const BoxText = styled.span`
  font-size: 22px;
  font-family: 'Raleway';
  color: white;
  display: block;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  line-height: 30px;
  top: 20%;
  left: 20%;
  opacity: 0;
  -webkit-transform: translate(-20%, -20%);
  -ms-transform: translate(-20%, -20%);
  transform: translate(-20%, -20%);
  transition: .5s ease;
  ${ImgWrapper}:hover & {
    opacity: 1;
  }
`;
const LearnMore = styled.a`
  font-size: 15px;
  font-family: 'Raleway';
  font-weight: 600;
  text-align: left;
  color: white;
  cursor: pointer;
  &:hover {
    font-family: 'Raleway';
    font-family: 700;
    text-decoration: underline;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  ${ImgWrapper}:hover & {
    opacity: 1;
    filter: none;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  filter: grayscale(100%) brightness(100%);
  -webkit-filter: grayscale(100%) brightness(100%);
  ${ImgWrapper}:hover & {
    filter: none;
    -webkit-filter: grayscale(0%) brightness(100%);
  }
`;

export default function Column(props) {
  const {
    width, height, src, overlaySrc, name, surname, content,
  } = props;
  return (
    <ScrollAnimation style={{ position: 'relative' }} animateOnce animateIn="fadeIn">
      {src
        && (
        <ImgWrapper width={width} height={height}>
          <Img src={src} />
          {src}
          <Overlay>
            {overlaySrc && <Img src={overlaySrc} />}
          </Overlay>
          <BoxText>
            {name}
            <br />
            {surname}
            <br />
            <LearnMore>Learn More</LearnMore>
          </BoxText>
        </ImgWrapper>
        )
      }
      <ContentWrapper>
        <Content>
          {content}
        </Content>
      </ContentWrapper>
    </ScrollAnimation>
  );
}
