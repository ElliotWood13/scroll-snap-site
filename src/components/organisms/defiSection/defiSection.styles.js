import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color } from '../../../design'

const DefiSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DefiSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: ${pxToRem(50)};

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, ${pxToRem(300)});
    grid-template-rows: repeat(3, auto);
    row-gap: ${pxToRem(100)};
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, ${pxToRem(300)});
    grid-template-rows: repeat(2, auto);
  }

  ${mediaQuery.lg} {
    grid-template-columns: ${pxToRem(300)} ${pxToRem(500)} ${pxToRem(300)};
    grid-template-rows: repeat(2, auto);
  }
`

const HeaderContainer = styled.div`
  background-color: transparent;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.sm} {
    grid-column: 1 / 3;
  }

  ${mediaQuery.md} {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    height: 100%;
  }
`

const BlockquoteWrapper = styled.div`
  ${mediaQuery.md} {
    box-shadow: 0px -13px 22px 13px #000, 0px 13px 22px 13px #000,
      0px 0px 19px 20px #000 inset;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7122199221485469) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0.71) 100%
    );
  }
`

const Blockquote = styled.blockquote`
  filter: drop-shadow(0px 0px 4px #9a9a9a);
  background: linear-gradient(to bottom, lightgray, gray);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 9;

  font-size: ${pxToRem(40)};
  text-align: center;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0 ${pxToRem(20)};

  ${mediaQuery.md} {
    max-width: ${pxToRem(300)};
    padding: ${pxToRem(18)};
  }
`

const BlockquoteName = styled.span`
  display: block;
  font-size: ${pxToRem(18)};
  font-weight: 600;
  margin-top: ${pxToRem(16)};
  z-index: 9;
`

const Circle = styled.div`
  width: ${pxToRem(300)};
  height: ${pxToRem(300)};
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  border: ${pxToRem(2)} solid rgb(252, 252, 233);
  box-shadow: ${shadow.yellowOuter};
`

const CircleInnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${shadow.yellowInner};
`

const HorizontalLine = styled.div`
  ${mediaQuery.md} {
    background-color: ${color.brand};
    box-shadow: 0px 0px 19px 1px ${color.brand};
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: calc(100% + 400px);
    height: ${pxToRem(2)};
  }
`

const HorizontalLineLeft = styled.div`
  ${mediaQuery.sm} {
    position: absolute;
    top: ${pxToRem(663)};
    left: 50%;
    transform: translateX(-50%);
    width: ${pxToRem(350)};
    height: ${pxToRem(2)};
    background-color: #fffc66b1;
    box-shadow: 0px 0px 19px 1px ${color.brand};
  }

  ${mediaQuery.md} {
    left: -${pxToRem(96)};
    top: ${pxToRem(345)};
    width: ${pxToRem(206)};
  }

  ${mediaQuery.lg} {
    left: -${pxToRem(48)};
    top: ${pxToRem(345)};
    width: ${pxToRem(302)};
  }
`
const HorizontalLineRight = styled.div`
  ${mediaQuery.md} {
    position: absolute;
    top: ${pxToRem(345)};
    right: -${pxToRem(302)};
    transform: translateX(-50%);
    width: ${pxToRem(206)};
    height: ${pxToRem(2)};
    background-color: #fffc66b1;
    box-shadow: 0px 0px 19px 1px ${color.brand};
  }

  ${mediaQuery.lg} {
    width: ${pxToRem(302)};
    right: -${pxToRem(350)};
  }
`

export {
  DefiSectionContainer,
  DefiSectionGrid,
  HeaderContainer,
  BlockquoteWrapper,
  Blockquote,
  BlockquoteName,
  Circle,
  CircleInnerShadow,
  HorizontalLine,
  HorizontalLineLeft,
  HorizontalLineRight,
}
