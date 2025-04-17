import CarouselAbout from "../layout/AboutPageComponents/CarouselAbout"
import Clients from "../layout/AboutPageComponents/Clients"
import Content from "../layout/AboutPageComponents/Content"
import Stats from "../layout/AboutPageComponents/Stats"
import Team from "../layout/AboutPageComponents/Team"
import Testimonials from "../layout/AboutPageComponents/Testimonials"
import Video from "../layout/AboutPageComponents/Video"


function AboutPage(){
    return(
        <>
            <CarouselAbout/>
            <Content/>
            <Stats/>
            <Video/>
            <Team/>
            <Clients/>
            <Testimonials/>
        </>
    )
}


export default AboutPage