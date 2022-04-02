import React from "react"
import styled from "styled-components"
import pxpDesktop from "../../assets/img/works/pxp/pxp_desktop.jpg"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"
// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"
import FullImage from "../shared/FullImage"

const StyledPXP = styled.div`
  video {
    width: 100%;
  }
  img {
    width: 100%;
  }
  .chart {
    .typography {
      span.text-typo {
        &.one {
          font-family: "Montserrat";
        }
        &.two {
          font-family: "Gotham";
        }
      }
    }
    .colors {
      .color {
        &.one {
          background-color: white;
        }
        &.two {
          background-color: black;
          color: white;
        }
      }
    }
  }
`

const PXP = () => {
  return (
    <StyledPXP>
     
    </StyledPXP>
  )
}

export default PXP
