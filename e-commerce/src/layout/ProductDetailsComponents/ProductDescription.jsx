import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import DescriptionImage from '../../assets/deskcarousel1.jpg'// Görsel yolunu güncelleyin

function ProductDescription() {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sol Taraf - Görsel */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img 
                src={DescriptionImage} 
                alt="Product Description" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Metin İçeriği */}
            <div className="sm:flex w-full md:w-1/2 space-y-6">
                <div className="w-1/2">  {/*Burası Önemli. Ben yaptım   */ }
              <h3 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                the quick fox jumps over
              </h3>
              <p className="font-montserrat text-[14px] leading-[20px] text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
                consequent sent nostrum met.
              </p>
              <p className="font-montserrat text-[14px] leading-[20px] text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
                consequent sent nostrum met. Met minim Mollie non desert Alamo est sit 
                cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                Excitation venial consequent sent nostrum met.
              </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                  the quick fox jumps over
                </h4>
                <ul className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ChevronRight size={20} className="text-gray-500" />
                      <span className="font-montserrat text-[14px] leading-[24px] text-[#737373]">
                        the quick fox jumps over the lazy dog
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                  the quick fox jumps over
                </h4>
                <ul className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ChevronRight size={20} className="text-gray-500" />
                      <span className="font-montserrat text-[14px] leading-[24px] text-[#737373]">
                        the quick fox jumps over the lazy dog
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'additional':
        return <div>Additional Information Content</div>; // Placeholder
      case 'reviews':
        return <div>Reviews Content</div>; // Placeholder
      default:
        return null;
    }
  };

  const getTabClass = (tabName) => (
    `font-montserrat text-[14px] leading-[24px] py-4 px-2 cursor-pointer border-b-2 
     ${activeTab === tabName 
       ? 'text-[#252B42] font-bold border-[#252B42]' 
       : 'text-[#737373] border-transparent hover:text-[#252B42]'}`
  );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Tabs */}
      <div className="flex justify-center gap-8 border-b border-gray-200 mb-12">
        <button onClick={() => setActiveTab('description')} className={getTabClass('description')}>
          Description
        </button>
        <button onClick={() => setActiveTab('additional')} className={getTabClass('additional')}>
          Additional Information
        </button>
        <button onClick={() => setActiveTab('reviews')} className={getTabClass('reviews')}>
          Reviews (0)
        </button>
      </div>

      {/* Content Area */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default ProductDescription;