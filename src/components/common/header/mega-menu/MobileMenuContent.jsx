import React from "react";

const MobileMenuContent = () => {
   // const handleSubmit = (event) => {
   //    console.log("search: ", event.target.value);
   //    event.preventDefault();
   // };

   return (
      <div>
         {/* <form onClick={handleSubmit} className="search-form">
        <input type="text" placeholder="Search here.." />
        <button>
          <i className="bi bi-search"></i>
        </button>
        </form> */}
         {/* End Search Form */}
         <hr className="border " />
         <div className=" address-block">
            <h4 className="title">Adresa</h4>
            <p>
               Hany melickovej 212 <br />
               Bratisalava - Karlova Ves
            </p>
            <p>
               Objednavky na: <br />
               <a href="tel:0908 256 654">0908 256 654</a>
            </p>
         </div>
         {/* End .address-block */}
         <hr className="border " />
      </div>
   );
};

export default MobileMenuContent;
