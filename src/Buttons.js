import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className={"contorller"}>
                <span className={"prev"} data-value="-1" onClick={this.props.handleClick}>{"<"}</span>
                <span className={"next"} data-value="+1" onClick={this.props.handleClick}>{">"}</span>
            </div>
        )
    }
}

export default Buttons