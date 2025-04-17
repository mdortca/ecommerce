import Image1 from '../../assets/teampage/elbise.png';
import Image2 from '../../assets/teampage/kaban.png';
import Image3 from '../../assets/teampage/siyakgomlek.png';
import Image4 from '../../assets/teampage/lightkotceket.png';
import Image5 from '../../assets/teampage/darkkotceket.png';


function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sol Taraf */}
        <div className="flex-1 h-[600px]">
          <img
            src={Image1}
            alt="Fashion Model in Red"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sağ Taraf */}
        <div className="flex flex-row md:flex-col gap-4 md:w-[424px]">
          <div className="flex-1 h-[290px] relative">
            <img
              src={Image2}
              alt="Fashion Model in White"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold transform rotate-180" 
                  style={{ writingMode: 'vertical-rl' }}>
                COAT
              </h3>
            </div>
          </div>

          <div className="flex-1 h-[290px]">
            <img
              src={Image3}
              alt="Fashion Model in Black"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1 h-[290px]">
          <img
            src={Image4}
            alt="Fashion Model in Light Denim"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 h-[290px]">
          <img
            src={Image5}
            alt="Fashion Model in Dark Denim"
            className="w-full h-full object-cover"
          />
        </div>


      </div>
    </div>
  );
}

export default Hero;