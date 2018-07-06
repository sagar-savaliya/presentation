import React, {Component, Fragment} from 'react';
import slides from './content/SlideContent';

import Buttons from './Buttons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 0
        }
        window.addEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.key == 'ArrowRight')
            this.changeSlide(1);
        else if (e.key == 'ArrowLeft')
            this.changeSlide(-1);
    }
    changeSlide = (change) => {
        if (this.state.currentSlide + change < 0 || this.state.currentSlide + change >= slides.length)
            return;
        this.setState({
            currentSlide: this.state.currentSlide + change
        })
    }
    handleClick = (e) => {
        let change = Number(e.target.dataset.value);
        this.changeSlide(change);
    }

    render() {
        const {SlideComponent, ...other} = slides[this.state.currentSlide];
        console.log(SlideComponent);
        return (
            <Fragment>
                <SlideComponent {...other}/>
                <Buttons handleClick={this.handleClick}/>
            </Fragment>
        );
    }
}

export default App;
