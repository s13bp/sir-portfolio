import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.jpg"
import jinx2 from "../../assets/img/works/arcane/jinx2.jpg"
import silco from "../../assets/img/works/arcane/silco.jpg"
import silco2 from "../../assets/img/works/arcane/silco2.jpg"
import vi from "../../assets/img/works/arcane/vi.jpg"
import sisters from "../../assets/img/works/arcane/sisters.jpg"
import ekko from "../../assets/img/works/arcane/ekko.jpg"

const StyledArcane = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "BebasNeueRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #3c39bd;
        color: white;
      }
      &.three{
        background-color: #d45394;
        color: white;
      }
      &.four{
        background-color:#45744c;
        color: white;
      }
    }
  }
}
`

const Arcane = () => {
  return (
    <StyledArcane>
    
    </StyledArcane>
  )
}

export default Arcane
