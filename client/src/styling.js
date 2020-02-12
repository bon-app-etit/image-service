import styled from 'styled-components'
export const SliderContainer = styled.div`
 overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0rem 1rem 1rem -1.5rem;
	padding: 3px;
 scroll-behavior: smooth;
`;


export const ParentDiv = styled.div`
width: 100%;
	overflow: hidden;
	margin: auto;
	padding: 1rem;
`

export const ChildDiv = styled.div`
padding: 5px 5px;
	background: #b10202;
	text-align: center;
	width: 100%;
	margin-right: 2px;
	border-radius: 1px;
	&.child {
	padding: 1px 2px 2px 1px;
	background: #b10202;
	text-align: center;
	width: 100%;
	margin-right: 2px;
	border-radius: 1px;
}
`;
export const ImageModalChildDiv = styled.div`
 	height: 130px;
    width: 145px;
    border: solid 1px green;
    min-width: 145px;
`

export const ImageWrapperContainer = styled.div`
&.slider-wrapper {
	display: flex;
	align-items: center;
	width: 100%;
}
`;


export const ButtonDiv = styled.div`
	position: absolute;
	box-shadow: 0 0 6.1px 0.9px grey;
	padding: 5px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	background: transparent;
	text-align: center;
	color: white;
	border-radius: 50%;


&.prev {
	left: 1rem;
	
}
&.next {
	right: 1rem;
}
&.disable {
	opacity: 0.5;
 pointer-events: none;
}
`;


export const ImageButton = styled.button`
background: transparent;
border: transparent;
`

export const SliderWrapperDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	`

export const ImageWrapper = styled.img`
height: 20rem;
width: 32rem;
`

export const ModalWrapper = styled.div`
    background: white;
	display: flex;
	flex-direction: row;
	height: 730px;
	width: 1300px;
    border: 1px solid #d0cccc;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
	transition: all .8s;
	

`

export const ModalCloseButton = styled.div`
position: sticky;
right: 0;
top: 0;
padding: 5px;
cursor: pointer;
width: 20px;
height: 20px;
background: transparent;
text-align: center;
color: white;
border-radius: 50%;
`

export const ModalWrapperDiv = styled.div`
margin: -61px 0px 0px 0px;
`

export const ImageModalMainImg = styled.div`
	width: 940px;
    height: 730px;
    border: solid 1px red;
`

export const ImageModalRightColumn = styled.div`
	overflow-y: scroll;
	scroll-behavior: smooth;
	width: 360px;
    height: 730px;
    border: solid 1px blue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ImageModalWrapper = styled.img`
	
    height: 730px;
    width: 940px;
`

export const ImageModalRightColumnImg = styled.img`
 	height: 130px;
    width: 145px;
    border: solid 1px green;
    min-width: 145px;

`

export const ImageModalButton = styled.button`
	background: gray;
    position: absolute;
    margin-left: 1297px;
	z-index: 1000;
	width: 20px;
	height: 20px;

`


