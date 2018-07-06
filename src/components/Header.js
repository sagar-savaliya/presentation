import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className={"slide"}>
                <div className="header">
                    <h2 className={"header__title"}>
                        {this.props.title}
                    </h2>
                    <h3 className={"header__heading"}>
                        {this.props.header}
                    </h3>
                    <div className={"header__content"}>
                        {this.props.content.map((list) => {
                            return <li className={"slide__list"}>{list}</li>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
