import Team from "../layout/AboutPageComponents/Team"
import Cta from "../layout/TeamPageComponents/Cta"
import Hero from "../layout/TeamPageComponents/Hero"
import InnerHeader from "../layout/TeamPageComponents/InnerHeader"


function TeamPage(){
    return(
        <>
            <InnerHeader/>
            <Hero/>
            <Team/>
            <Cta/>
        </>
    )
}


export default TeamPage