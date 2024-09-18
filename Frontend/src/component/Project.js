import { Container, Row, Tab ,Col, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import av from "../assets/images/av.png";
import cb from "../assets/images/crazy_bus.png";
import vt from "../assets/images/vital_track.png";
import ids from "../assets/images/ids.png";
import dl from "../assets/images/dl.png";
import rl from '../assets/images/real_estate.png'
import blog from '../assets/images/blog.png'
import file from '../assets/images/file-sh.png'
import studbud from '../assets/images/studbud.png'
import tabman from '../assets/images/tab-man.png'
import sc from '../assets/images/sc.png'
export const Project = () => {
    const projects1 = [
        {
            title:"JB Estates",
            description: "JB Estates revolutionizes real estate with its comprehensive platform, streamlining property browsing, effortless listing creation, and facilitating direct owner communication through provided contact details. This user-centric approach ensures transparency and efficiency in transactions, setting a new standard for convenience and accessibility in the dynamic property market.",
            imgUrl: rl
        },
        {
            title:"SocialHub",
            description: "SocialHub, an innovative full-stack project, revolutionizes social media engagement by offering a user-centric platform for seamless post creation, sharing, and diverse reactions, all within a secure and intuitive environment that prioritizes authentic connections in the digital realm.",
            imgUrl: blog
        },
        {
            title:"FileFlow",
            description: "FileFlow, a cutting-edge full-stack project, transforms file sharing by enabling users to effortlessly upload files, convert them into secure downloadable links, and share with unparalleled ease, simplifying the process of distributing large files.",
            imgUrl: file
        }
    ];
    const projects2 = [
        {
            title:"StudyBuddy",
            description: "StudyBuddy, a Chrome extension, optimizes focus by blocking distracting sites during study sessions. The intuitive study mode is easily toggled on, preventing interruptions. For urgent needs, a snooze button with a timer offers flexibility without compromising productivity, ensuring an efficient and distraction-free learning experience.",
            imgUrl: studbud
        },
        {
            title:"Tab Manager",
            description: "Introducing Tab Manager, a Chrome extension designed for seamless tab organization. This efficient tool simplifies tab management, allowing users to effortlessly arrange, group, and navigate through open tabs. With a streamlined interface, Tab Manager enhances productivity, ensuring a clutter-free browsing experience. Simplify your Chrome experience with Tab Manager, the go-to solution for efficient tab organization.",
            imgUrl: tabman
        }
    ];
    const projects3 = [
        // {
        //     title:"Student Academic Dropout and Sucess",
        //     description: "This data science project explores student academic outcomes through exploratory data analysis. We dived into a comprehensive dataset to uncover patterns, identify key factors influencing success and dropout, and develop insights to guide interventions and support student achievement.",
        //     imgUrl: ids
        // },
        {
            title:"Travelling Salesman Problem",
            description: "Solved the Travelling Salesman problem for 15 cities using Genetic Algorithm. Used Elitism Principle and Roulette-Wheel Principle for selection procedure. Also used one point crossover where the crossover points were randomly selected",
            imgUrl: sc
        }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>"Explore my diverse portfolio of projects, each a testament to my passion for problem-solving and creativity. From web development to software engineering, discover the impact of my work."</p>
                    <p className="link-dir">Github Link in Navbar and Footer</p>
                    <Tab.Container id="projetcs-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Web Developement</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Chrome Extensions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Other</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects1.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <Row>
                                {
                                projects2.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                                {
                                projects3.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}