import styled from 'styled-components'
import { pxToRem, mediaQuery, shadow, color, fontWeight } from '../../../design'

const FeaturesSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FeaturesSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: ${pxToRem(50)};
  /* grid-template-areas: "quote", "circle", "circle", "circle", "circle"; */

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, ${pxToRem(300)});
    grid-template-rows: repeat(3, auto);
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
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.sm} {
    grid-column: 1 / 3;
  }

  ${mediaQuery.md} {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    height: 100%;
  }
`

const FeaturesSectionHeader = styled.div`
    box-shadow: 3px 5px 20px 5px rgba(255, 255, 255, .5) inset;
    display: inline-block;

    ${mediaQuery.lg} {
        white-space: nowrap;
        transform: translateY(-25px);
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
    /* display: inline-block; */

    border: 2px solid rgb(252, 252, 233);
    box-shadow: 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .5);
    border-radius: 3px;
`



export {
    FeaturesSectionContainer,
    FeaturesSectionGrid,
    HeaderContainer,
    FeaturesSectionHeader,
    FeaturesSectionHeaderH2,
}