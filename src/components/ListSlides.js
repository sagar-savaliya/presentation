import React, {Component} from 'react';

class ListSlides extends Component {
    render() {
        return (
            <React.Fragment>
            {
                this.props.slideContent.map((slide) => {
                    const {SlideComponent, ...other} = slide;
                    return (<SlideComponent {...other} />);
                })
            }
            </React.Fragment>
        );
    }
}

export default ListSlides;
