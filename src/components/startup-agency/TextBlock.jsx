import React from "react";

const TextBlock = () => {
   return (
      <>
         <div className="col-lg-6 text-center">
            <div className="title-style-seven md-pb-10">
               <h2 className="title">
                  From practice
               </h2>
            </div>
            {/* <!-- /.title-style-seven --> */}
         </div>
         {/* End .col */}

         <div className="col-lg-6">
            <div className="text-wrapper">
               <p className="text-lg">
                  Nejaky text o tebe a tvojej kariere. We are the startup studio with a mission to partner with the best founders connecting them with ideas & placing them in unparalleled eco system of company builders and resources for
                  growth.
               </p>
               <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
               <h6 className="name">
                  Jozef Hausler. <span>OWNER / KADERNIK</span>
               </h6>
            </div>
            {/* <!-- /.text-wrapper --> */}
         </div>
      </>
   );
};

export default TextBlock;
