import React from 'react';


class ProjectSlide extends React.Component {
    render() {
        return (
            <div className={"slide"}>
                <div className="list ">
                    <h1 className={"header__title"}>
                        {this.props.title}
                    </h1>
                    {
                        this.props.slideContent.map((slide) => {
                            return (
                                <div className={"header__content"}>
                                    <hr/>
                                    <h2 className={"subtitle"}>{slide.title}</h2>
                                    <li>{slide.desc}</li>

                                    {slide.lang ? (<h3>{'Langauge/Framework Used'}</h3>) : null}
                                    {slide.lang ? (<li>{slide.lang}</li>) : null}

                                    <h3>Time</h3>
                                    <li>{slide.time}</li>
                                    <h3>What we learnt?</h3>
                                    {slide.learned.map((learn) => {
                                        return <li>{learn}</li>
                                    })}
                                    {slide.img != "" ? <img src={slide.img} className={"image"}/> : null}
                                    <h3>Links:</h3>
                                    {slide.link.map((link) => {
                                        return <li><a href={link.url} className={"link"}>{link.text}</a></li>
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectSlide;
