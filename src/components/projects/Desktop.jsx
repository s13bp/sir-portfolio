import React from "react"
import styled from "styled-components"

// Desktop
import step1 from "../../assets/img/works/desktop/step1.png"
import step2 from "../../assets/img/works/desktop/step2.svg"
import step3 from "../../assets/img/works/desktop/step3.svg"
import preview from "../../assets/img/works/desktop/preview.jpg"
import FullImage from "../shared/FullImage"


const StyledDesktop = styled.div`
img{
  height:0px;
  width: 100%;
  margin-bottom: 50px;
  &.step{
    height:0px;
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: black;
        color: white !important;
      }
      &.two{
        background-color: #FFFFFF;
        color: black !important;
      }
      &.three{
        background-color: #CCD6F8;
        color: white !important;
      }
    }
  }
}
`

const Desktop = () => {
  return (
    <StyledDesktop>
     
    </StyledDesktop>
  )
}

export default Desktop
