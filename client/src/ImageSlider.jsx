import React from 'react';
import { SliderContainer, ButtonDiv, SliderWrapperDiv } from './styling';
class ImageSlider extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
      prevDisable: true,
      nextDisable:
      this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
     };
    }
   
    componentDidMount() {
     this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
    }
    checkButtons = (offsetWidthValue, scrollWidthValue) => {
     this.setState({
      prevDisable: this.refs.scrollLeft <= 0 ? true : false,
      nextDisable:
      this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
     });
    };
   
   render() {
    const offsetWidthValue = this.refs.offsetWidth,
          scrollWidthValue = this.refs.scrollWidth
          

      //const PrevButton = this.state.prevDisable ? 
    return (
     <SliderContainer
      ref={el => {
       this.refs = el;
      }}
      >
      <SliderWrapperDiv>{this.props.children}</SliderWrapperDiv>
      <ButtonDiv
       className={`prev ${this.state.prevDisable ? "disable" : ""}`}
       disabled={this.state.prevDisable}
       onClick={() => {
        this.refs.scrollLeft -= offsetWidthValue / 1;
        this.checkButtons(offsetWidthValue, scrollWidthValue);
       }}
       >
       {"<"}
      </ButtonDiv>
      <ButtonDiv
       className={`next ${this.state.nextDisable ? "disable" : ""}`}
       disabled={this.state.nextDisable}
       onClick={() => {
        this.refs.scrollLeft += offsetWidthValue / 1;
        this.checkButtons(offsetWidthValue, scrollWidthValue);
       }}
       >
       {">"}
      </ButtonDiv>
     </SliderContainer>
    );
   }
   }

   export default ImageSlider