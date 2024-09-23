import { useState } from "react";
import { GiToolbox, GiGorilla } from "react-icons/gi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { WorkTools } from "../assets/Infoes";

const AmericansProducs = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه تجهیزات");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

 
  const filteredProducts = selectedCategory === "همه تجهیزات"
    ? WorkTools
    : WorkTools.filter(item => item.category === selectedCategory);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

 
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="sm:text-xl pr-3 flex items-center sm:pr-32 font-semibold">
        پرفروش ترین محصولات خارجی
        <span className="bg-[#ed242e] mr-1 text-white rounded-full px-4 py-1 flex items-center gap-x-2">
          Gorill <GiGorilla />
        </span>
      </h1>

      
      <div className="flex flex-wrap gap-5 px-3 justify-center mt-20">
        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "همه تجهیزات" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("همه تجهیزات"); setCurrentPage(1); }}
        >
          <GiToolbox className="w-[30px] h-[30px] text-[#ed242e]" id="josh" />
          <span className="text-gray-500 text-sm font-bold">همه تجهیزات</span>
        </div>

        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "اره برقی" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("اره برقی"); setCurrentPage(1); }}
        >
          <img src="/img/arreh/Untitled-1.pngarreh.png" className="w-[40px] h-[40px]" alt="اره برقی" />
          <span className="text-gray-500 text-sm font-bold">اره برقی</span>
        </div>

        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "موتور برق" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("موتور برق"); setCurrentPage(1); }}
        >
          <img src="/img/arreh/Untitled-1.png003.png" className="w-[33px] h-[33px]" alt="موتور برق" />
          <span className="text-gray-500 text-sm font-bold">موتور برق</span>
        </div>

        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "پیکور" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("پیکور"); setCurrentPage(1); }}
        >
          <img src="/img/arreh/Untitled-1.pngdrilled.png" className="w-[40px] h-[40px]" alt="پیکور" />
          <span className="text-gray-500 text-sm font-bold">پیکور</span>
        </div>

        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "دریل" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("دریل"); setCurrentPage(1); }}
        >
          <img src="/img/arreh/Untitled-1.pngdril.png" className="w-[40px] h-[40px]" alt="دریل" />
          <span className="text-gray-500 text-sm font-bold">دریل</span>
        </div>

        <div
          className={`flex gap-2 cursor-pointer ${selectedCategory === "دستگاه جوش" ? 'border-b-[3px] border-[#ed242e]' : ''}`}
          onClick={() => { setSelectedCategory("دستگاه جوش"); setCurrentPage(1); }}
        >
          <img src="/img/arreh/Untitled-1.png002.png" className="w-[35px] h-[35px]" alt="دستگاه جوش" />
          <span className="text-gray-500 text-sm font-bold">دستگاه جوش</span>
        </div>
      </div>

      
      <div className="mt-10 flex flex-wrap justify-center gap-5 lg:px-32">
        {currentProducts.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-md p-3 w-[300px] h-[360px]">
            <Link to={`/product/${item.id}`}>
              <div className="flex flex-col gap-y-2 items-center">
                <div className="relative">
                  <img src={item.img} className="w-[269px] h-[269px] cursor-pointer bg-gray-100" alt={item.name} />
                </div>
                <p className="text-sm font-semibold">{item.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#ed242e] font-semibold">{item.price} تومان</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      
      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center mt-5 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`bg-[#ed242e] text-white text-3xl px-2 py-2 rounded-full ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
          >
            <IoIosArrowRoundForward />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-[#ed242e] text-white text-3xl px-2 py-2 rounded-full ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
          >
            <IoIosArrowRoundBack />
          </button>
        </div>
      )}
    </div>
  );
};

export default AmericansProducs;
