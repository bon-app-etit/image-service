import React from 'react';
import { ModalWrapper, ModalCloseButton,ImageModalWrapper,ImageModalButton,
     ModalWrapperDiv, ImageModalMainImg, ImageButton, 
     ImageModalChildDiv, ImageModalRightColumn, ImageWrapper,
     ImageModalRightColumnImg } from './styling'

export class ImageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.images || null
        }
    }

    render() {
        let data = this.state.data;
        console.log("This.state.data ",this.state.data);
        return (
            <ModalWrapper
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-500vh)',
                    opacity: this.props.show ? '1' : '0',
                    zIndex: this.props.show ? "11": "0",
                    position: this.props.show ? "absolute" : "static"
                    
                }}>
                    <ImageModalButton onClick={this.props.close}> X</ImageModalButton>
                    <ImageModalMainImg>
                        
                    <ImageModalWrapper src={data[0].images[0]+".jpg"}></ImageModalWrapper>
                    
                    </ImageModalMainImg>
                <ImageModalRightColumn>

                {data.map((image, index) => {
         return (
          <ImageModalChildDiv key={index}>
             <ImageModalButton onClick={this.props.close}>
           <ImageModalRightColumnImg src={image.images[0]+".jpg"}></ImageModalRightColumnImg>
           </ImageModalButton>
          </ImageModalChildDiv>
         );
        })}
                    

                </ImageModalRightColumn>




            </ModalWrapper>

        )
    }
};