import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageSlider from '../ImageSlider';
import DisplayImage from '../DisplayImage';
import SliderParent from '../DisplayImage';

describe('Image Carasoul', ()=> {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true')
    ReactDOM.unmountComponentAtNode(div);
})

it('should display images in a conntainer horizontally', () => {
    const wrapper = mount(<ImageSlider />);
    const images = wrapper.find('.slider-wrapper');
    expect(images.length).toBe(1);

})

it('should render images', () => {
    const wrapper = mount(<SliderParent />);
    const images = wrapper.find('img');
    expect(images.length).toBe(48);
})
});