import styled from 'styled-components'
import { pxToRem, mediaQuery, color } from '../../../design'

const FeaturesSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FeaturesSectionGrid = styled.div`
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  ${mediaQuery.sm} {
    grid-column: 1 / 3;
  }

  ${mediaQuery.md} {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    height: 100%;
  }

  ${mediaQuery.lg} {
    margin-top: ${pxToRem(55)};
  }
`

const FeaturesSectionHeader = styled.div`
  box-shadow: 3px 5px 20px 5px rgba(255, 255, 255, 0.5) inset;
  display: inline-block;
  background-color: black;
  z-index: 9;

  ${mediaQuery.lg} {
    white-space: nowrap;
    transform: translateY(-50px);
  }
`

const FeaturesSectionHeaderH2 = styled.h2`
  background: linear-gradient(to right, lightgray, gray);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  border: 2px solid rgb(252, 252, 233);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  z-index: 9;
`

const HorizontalLine = styled.div`
  ${mediaQuery.sm} {
    background-color: ${color.white[100]};
    box-shadow: 0px 0px 19px 1px ${color.white[100]};
    position: absolute;
    top: ${pxToRem(602)};
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: ${pxToRem(348)};
    height: 2px;
  }

  ${mediaQuery.md} {
    top: ${pxToRem(458)};
    width: ${pxToRem(700)};
  }

  ${mediaQuery.lg} {
    width: ${pxToRem(900)};
  }
`

export {
  FeaturesSectionContainer,
  FeaturesSectionGrid,
  HeaderContainer,
  FeaturesSectionHeader,
  FeaturesSectionHeaderH2,
  HorizontalLine,
}
