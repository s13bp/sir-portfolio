import React from "react"
import styled from "styled-components"
import moodboard1 from "../../assets/img/works/hologramme/moodboard1.png"
import moodboard2 from "../../assets/img/works/hologramme/moodboard2.png"
import homepage from "../../assets/img/works/hologramme/homepage.png"
import homepage2 from "../../assets/img/works/hologramme/homepage2.png"
import homepage3 from "../../assets/img/works/hologramme/homepage3.png"
import maroquinerie from "../../assets/img/works/hologramme/maroquinerie.png"






const StyledHologramme = styled.div`
img{
  width: 100%;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLighe";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #303030;
        color: white !important;
      }
      &.two{
        background-color: #EDEDED;
      }
      &.three{
        background-color: #C9BEBD;
      }
      &.four{
        background-color: #BAD7E5;
      }
    }
  }
}
`

const Hologramme = () => {
  return (
    <StyledHologramme>
  
      <div className="spacer"></div>


    </StyledHologramme>
  )
}

export default Hologramme
