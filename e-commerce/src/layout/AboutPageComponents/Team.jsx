import { Facebook, Instagram, Twitter } from "lucide-react";
import TeamMember1 from '../../assets/aboutpage/team-1-user-1.jpg'; // Görsellerin yolunu projenize göre güncelleyin
import TeamMember2 from '../../assets/aboutpage/team-1-user-2.jpg';
import TeamMember3 from '../../assets/aboutpage/team-1-user-3.jpg';

function Team() {
  const teamMembers = [
    {
      image: TeamMember1,
      username: "Username",
      profession: "Profession",
    },
    {
      image: TeamMember2,
      username: "Username",
      profession: "Profession",
    },
    {
      image: TeamMember3,
      username: "Username",
      profession: "Profession",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42] mb-4">
          Meet Our Team
        </h2>
        <p className="font-montserrat text-[14px] leading-[20px] text-[#737373] max-w-[470px] mx-auto">
          Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center max-w-[328px]">
            {/* Image Container */}
            <div className="w-full h-[375px] mb-4">
              <img
                src={member.image}
                alt={member.username}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Info */}
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2">
              {member.username}
            </h5>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-4">
              {member.profession}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;