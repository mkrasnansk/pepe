import React from "react";
import AccordionOne from "../../service-provider/AccordionOne";

export const AccordeonCennik = (props) => {
   return (
      <div>
         <div className="accordion accordion-style-four" id={`accordionOne${props.dataId}`}>
           <AccordionOne data={props.dataId} />
         </div>
      </div>
   );
};
