import HooliLogo from '../../assets/shoppage/brandicons/Vector1.png'
import LyftLogo from '../../assets/shoppage/brandicons/Vector2.png'
import LeafLogo from '../../assets/shoppage/brandicons/Vector3.png'
import StripeLogo from '../../assets/shoppage/brandicons/Vector4.png'
import AWSLogo from '../../assets/shoppage/brandicons/Vector5.png'
import RedditLogo from '../../assets/shoppage/brandicons/Vector6.png'

function Clients() {
  const clients = [
    { name: 'Hooli', logo: HooliLogo },
    { name: 'Lyft', logo: LyftLogo },
    { name: 'Leaf', logo: LeafLogo },
    { name: 'Stripe', logo: StripeLogo },
    { name: 'AWS', logo: AWSLogo },
    { name: 'Reddit', logo: RedditLogo },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        {/* Header - Both Mobile and Desktop */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42] mb-4">
            Big Companies Are Here
          </h2>
          <p className="font-montserrat text-[14px] leading-[20px] text-[#737373] max-w-[470px] mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-center flex-wrap gap-x-[30px] gap-y-[50px]">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="h-[50px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-[60px]">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;