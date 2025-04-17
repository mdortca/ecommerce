import { Play } from "lucide-react";
import Video1 from "../../assets/aboutpage/video.png";

function Video() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Video Container */}
      <div className="relative w-full">
        {/* Mobil için kare, desktop için geniş format */}
        <div className="relative aspect-square md:aspect-[16/9] rounded-lg overflow-hidden">
          {/* Video Thumbnail/Background Image */}
          <img
            src={Video1}// Görselin yolunu projenize göre güncelleyin
            alt="Mountain lake reflection"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-[91px] h-[91px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:bg-[#1a7ab3] transition-colors">
              <Play className="w-8 h-8 text-white" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;