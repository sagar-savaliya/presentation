import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <div className={"slide"}>
                <div className="list">
                    <h2 className={"header__title"}>
                        {this.props.title}
                    </h2>
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

export default List;
