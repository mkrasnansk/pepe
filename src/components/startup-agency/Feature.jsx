import React from "react";
import img1 from "../../assets/images/someSvg/womanHair.svg";
import img2 from "../../assets/images/someSvg/barbers.svg";
import img3 from "../../assets/images/someSvg/beardedman.svg";
import img4 from "../../assets/images/someSvg/scissorsHair.svg";

const Feature = () => {
  const featureContent = [
    {
      id: 1,
      delayAnimTime: 0,
      img: img1,
      text: (
        <>
        Profesional <br /> style look.
        </>
      ),
    },
    {
      id: 2,
      delayAnimTime: 50,
      img: img2,
      text: (
        <>
          Barbers <br />
         be origin.
        </>
      ),
    },
    {
      id: 3,
      delayAnimTime: 100,
      img: img3,
      text: (
        <>
          Hair style <br />
          for men.
        </>
      ),
    },
    {
      id: 4,
      delayAnimTime: 150,
      img: img4,
      text: (
        <>
          Hair style <br />
          for women.
        </>
      ),
    },
  ];

  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-sm-6 "
          data-aos="fade-up"
          data-aos-delay={feature.delayAnimTime}
          key={feature.id}
        >
          <div className="card-style-nine mt-40">
            <div className=" d-flex align-items-center justify-content-center">
              <img className="img-fluid" src={feature.img} alt="illustration" />
            </div>
            <h3>{feature.text}</h3>
          </div>
          {/* <!-- /.card-style-nine --> */}
        </div>
      ))}
    </>
  );
};

export default Feature;
