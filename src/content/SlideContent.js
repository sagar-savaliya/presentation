import Header from "../components/Header";
import List from "../components/List";
import ProjectSlide from "../components/ProjectSlide";
import ListSlides from "../components/ListSlides";
import LastSlide from "../components/LastSlide"
import chrome from '../images/chrome-ext-ss.png';
import cloreRepo from '../images/Screen Shot 2018-07-04 at 11.46.29 PM.png'
import todoimg from '../images/screen_shot_2018-07-04_at_11.11.26_pm.png'


const slides = [
    {
        slideContent: [
            {
                title: "Summer Internship 2018",
                header: "Created By:",
                content: ["Sagar Savaliya", "Maulik Patel"],
                SlideComponent: Header
            }
        ],
        SlideComponent: ListSlides
    },
    {
        slideContent: [
            {
                title: "HTML and CSS",
                content: [
                    "Semantic HTML",
                    "CSS basics like flex-box, specificity, transitions, transform",
                    "z-index, BEM"
                ],
                SlideComponent: List
            },
            {
                title: "javascript",
                content: ["Basics of JavaScript",
                    "Functional Programming",
                    "Promises, Prototype, EventLoop"
                ],
                SlideComponent: List
            }, {
                title: "React",
                content: [
                    "Basics of react like Components, State, Props, JSX, Lifecycle, List and Keys, ",
                    "Reconciliation, HOC, Context, Portals, Controlled and Uncontrolled component,Forwarding refs"
                ],
                SlideComponent: List
            },
            {
                title: "Redux",
                content: [
                    "Actions, Reducers, Store, Data Flow, Middleware,Async Actions"
                ],
                SlideComponent: List
            },
            {
                title: "Sprinklr Frontend Kickoff",
                content: [
                    "We completed 8 week course of frontend kickoff"
                ],
                SlideComponent: List
            },
            {
                title: "We learned basics about....",
                content: [
                    "React-360",
                    "Service worker,Webworker",
                    "Progressive web app",
                    "Google chrome Extension",
                    "Electron",
                    "Node",
                    "Express"
                ],
                SlideComponent: List
            }
        ],
        SlideComponent: ListSlides
    },
    {
        title: "Sample Projects",
        slideContent: [
            {
                title: 'Javascript 30',
                desc: 'Created 30 mini projects given in javascript30.com',
                link: [
                    {
                        text: 'code-Maulik',
                        url: 'https://github.com/maulik1729/JAVASCRIPT30'
                    },
                    {
                        text: 'code-Sagar',
                        url: 'https://github.com/sagar-savaliya/Vanila-JS-Coding-Challange-Solutions'
                    }
                ],
                lang: "VanillaJS",
                time: "7 days",
                learned: [
                    "Every project is related to some concept like event bubbling,event delegation,functional programming.",
                    "So we read about every concept and implemented it"
                ],
                img: ""

            }
        ],
        SlideComponent: ProjectSlide
    },
    {
        title: "Sample Projects",
        slideContent: [
            {
                title: 'TODO',
                desc: 'TODO application in which we can toggle UI layer between vanillaJS and React. Created a database layer which saved the todos in localstorage and JSDB',
                link: [
                    {
                        text: 'Code',
                        url: 'https://github.com/maulik1729/ToDo_UsingReact'
                    }, {
                        text: 'https://github.com/sagar-savaliya/todos-redux',
                        url: 'https://github.com/sagar-savaliya/todos-redux'
                    },
                    {
                        text: 'https://github.com/maulik1729/todo_usingredux',
                        url: 'https://github.com/maulik1729/todo_usingredux'
                    }
                ],
                lang: 'JS, Ract, React-spring, JSDB, AJAX',
                time: "We were updating todo as we learn new concepts in this two month",
                learned: [
                    "MVC",
                    "Database factory",
                    "How to work with database.",
                    "Promise",
                    "REST API",
                    "Animation using React Spring"
                ],
                img: todoimg
            }
        ],
        SlideComponent: ProjectSlide
    },
    {
        title: "Other Small Apps",
        slideContent: [
            {
                title: 'Chrome Extension',
                desc: 'Created Extension for changing playBackRate of video form 0.1 to 16',
                link: [
                    {
                        text: 'Code',
                        url: 'https://github.com/sagar-savaliya/chrome-extensions'
                    }
                ],
                lang: "Javascript",
                time: "1 day",
                learned: [
                    "Chrome Extension API"
                ],
                img: chrome

            }
        ],
        SlideComponent: ProjectSlide
    },
    {
        title: "Other Small Apps",
        slideContent: [
            {
                title: 'Clone repo App',
                desc: 'Created desktop app fro cloning repo',
                link: [
                    {
                        text: 'Code',
                        url: 'https://github.com/sagar-savaliya/clone-repo-app'
                    }
                ],
                lang: 'Javascript, Electron, Node',
                time: "1 day",
                learned: [
                    "How to convert any webpage in desktop app"
                ],
                img: cloreRepo
            },
        ],
        SlideComponent: ProjectSlide
    },
    {
        title: "SPR-PAID-COMPONENTS MIGRATION",
        slideContent: [
            {
                title: 'Description',
                desc: 'Moved spr-paid-components into sprinklr-app-client',
                link: [
                    {
                        text: 'For brief information',
                        url: 'https://docs.google.com/presentation/d/1x49ZnERgrYxHsKD8jeAowlsxxh92IkFow_ZYaneA_Qg/edit#slide=id.p'
                    }, {
                        text: 'Final Solution',
                        url: "https://paper.dropbox.com/doc/How-to-work-with-new-changes-zZvrZLzr4jlZepHPNxgd9"
                    }
                ],
                lang: "",
                time: "1 month",
                learned: [
                    "Git, Shell Script, Gitlab pipeline Configuration, Local and remote hooks, Webpack, Lerna, Yarn Workspace",
                    "How modules of sprinklr-app-client are managed and used in sprinklr.app.",
                ],
                img: ""

            }
        ],
        SlideComponent: ProjectSlide
    },{
        SlideComponent: LastSlide
    }
]

export default slides;