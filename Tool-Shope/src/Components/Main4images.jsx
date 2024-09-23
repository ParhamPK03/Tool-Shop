import Swal from 'sweetalert2';

const handleClick = () => {
  Swal.fire({
    title: 'توجه!',
    text: 'این بخش فعلا موجود نمی‌باشد.',
    icon: 'info',
    confirmButtonText: 'باشه'
  });
};
const Main4images = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto gap-16 mt-24">
      <div className="flex flex-col items-center justify-between bg-gray-200 p-1 rounded-2xl" onClick={() => {
    const target = document.getElementById("josh");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
        <img src="/img/4images/p1 (1).png" className="w-[270px] h-[270px] cursor-pointer hover:opacity-80" alt="" />
        <span className="font-bold">خرید انواع دستگاه جوش</span>
      </div>
      <div className="flex flex-col items-center justify-between bg-gray-200 p-1 rounded-2xl" onClick={() => {
    const target = document.getElementById("barghi");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}>
        <img src="/img/4images/p2.png"  className="w-[270px] h-[270px] cursor-pointer hover:opacity-80" alt="" />
        
        <span className="font-bold">اره زنجیری بنزینی</span>
      </div>
      <div className="flex flex-col items-center justify-between bg-gray-200 p-1 rounded-2xl" onClick={handleClick}>
        <img src="/img/4images/p1.png" className="w-[270px] h-[270px] cursor-pointer hover:opacity-80" alt="" />
        <span className="font-bold">خرید پمپ آب بنزینی</span>
      </div>
      <div className="flex flex-col items-center justify-between bg-gray-200 p-1 rounded-2xl" onClick={handleClick}>
        <img src="/img/4images/p4.png" className="w-[270px] h-[270px] cursor-pointer hover:opacity-80" alt="" />
        <span className="font-bold">موتور برق بنزینی</span>
      </div>
    </div>
  )
}

export default Main4images
