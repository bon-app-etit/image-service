import React from 'react';
import axios from 'axios';
import {ImageModal} from './Imagemodal.jsx'

import ImageSlider from './ImageSlider.jsx';
import { ChildDiv, ParentDiv,
   ImageModalChildDiv, ImageButton, ImageWrapper} from './styling';

   
   class SliderParent extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            isShowing: false,
            imageData: null,
         }
         this.handleClick = this.handleClick.bind(this);
      }


      handleClick() {
         event.preventDefault()
         this.setState({
            isShowing: true
         })
      }
      closeModalHandler = () => {
         console.log("clicked")
         event.preventDefault();
         this.setState({
             isShowing: false
         });
     }

     getData(){
      axios.get('/images')
         .then((response) => {
            
            const imageData = response.data.images;
            this.setState({
               imageData: imageData
            })
            
         })
      
      };

     componentDidMount() {
        this.getData();
        
     }
      
      render() {
     let data = this.state.imageData;
    
     
     

     return (
      <ParentDiv>
         {(!this.state.isShowing && this.state.imageData) && 
       <ImageSlider>
        {data.map((image, index) => {
         return (
          <ChildDiv key={index} className="child">
             <ImageButton onClick={this.handleClick}>
           <ImageWrapper src={image.images[0]+".jpg"}></ImageWrapper>
           </ImageButton>
          </ChildDiv>
         );
        })}
       </ImageSlider>
      }
      {this.state.isShowing &&
      <ImageModal
      show={this.state.isShowing}
      close={this.closeModalHandler}
      currentImage={this.state.imageData || null}
      images={this.state.imageData || null}
      >
      </ImageModal>
      }
      
       </ParentDiv>
      
     )
     

    }
   }

   export default SliderParent
