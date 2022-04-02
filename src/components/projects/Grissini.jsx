import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/grissini/moodboard.jpg"
import homepage from "../../assets/img/works/grissini/homepage.jpg"
import contact from "../../assets/img/works/grissini/contact.jpg"
import about from "../../assets/img/works/grissini/about.jpg"
import homeMobile from "../../assets/img/works/grissini/home_mobile.jpg"
import menuMobile from "../../assets/img/works/grissini/menu_mobile.jpg"
import shopMobile from "../../assets/img/works/grissini/shop_mobile.jpg"
import contactMobile from "../../assets/img/works/grissini/contact_mobile.jpg"
import FullImage from "../shared/FullImage"


const StyledGrissini = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.responsive{
    img{
      border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};;
    }
  }
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLight";
      }
      &.two{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
      &.three{
        background-color: #FDC463;
        color: white !important;
      }
    }
  }
}
`

const Grissini = () => {
  return (
    <StyledGrissini>
     
    </StyledGrissini>
  )
}

export default Grissini
