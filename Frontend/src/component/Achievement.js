import { Container, Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leetcode from "../assets/images/leetcode.png";
import coding from "../assets/images/coding.png";
import jeemain from "../assets/images/jeemain.png";
import jeeadv from "../assets/images/jeeadv.jpeg";
import cn from "../assets/images/coding-ninjas.jpg"
import flipkart from "../assets/images/flipkart.jpg";
import cbse from "../assets/images/cbse.png";
export const Achievement = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const data = [
        { image: leetcode, title: "Leetcode" ,description :"Achieved the Highest Contest Rating of 1575"},
        { image: coding, title: "Coding Platforms", description :"Solved 700+ questions across various coding platforms"},
        { image: jeemain, title: "Jee Mains" , description :"Obtained 96.7 percentile in JEE MAINS 2022"},
        { image: flipkart, title: "Flipkart Runway", description :"Chosen as one of 200 finalists from more than 36,000 participants in the online technical quiz." },
        { image: cbse , title : "Merit Certificate" , description : "Achieved Certificate of Merit by CBSE for being among the top 0.1% of successful candidates in Mathematics by securing Perfect 100."},
      ];
    return (
        <section className="achievement" id="achievement">
            <Container>
                <Row>
                    <Col>
                        <div className="achievement-bx">
                            <h2>Achievements</h2>
                            <p>"Discover my achievements, a culmination of dedication and excellence. From academic milestones to impactful Ratings, each accomplishment reflects my commitment to continuous growth and delivering exceptional results."</p>
                            <Carousel responsive={responsive} infinite={true} className="achievement-slider">
                                
                                {data.map((achievement, index) => (
                                    <div key={index} className="ach-img">
                                        <img src={achievement.image} alt={achievement.title} />
                                        <h5>{achievement.title}</h5>
                                        <div className= "ach-des">
                                            <span>{achievement.description}</span>
                                        </div>
                                    </div>
                                ))}
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )      
    
}