import ContactComponent from "../layout/ContactPageComponents/ContactComponent"
import ContactCta from "../layout/ContactPageComponents/ContactCta"
import InnerHeader from "../layout/ContactPageComponents/InnerHeader"


function ContactPage(){
    return(
        <>
            <InnerHeader/>
            <ContactComponent/>
            <ContactCta/>
        </>
    )
}


export default ContactPage