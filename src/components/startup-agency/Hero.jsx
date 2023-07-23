import React from "react";
import img1 from "../../assets/images/woman/66.jpg";
import img2 from "../../assets/images/woman/44.jpg";
import img3 from "../../assets/images/woman/88.jpg";

const Hero = () => {
	const heroContent = [
		{
			id: 1,
			img: img1,
			text: (
				<>
					Nase damy <span>srdce spolocnosti</span> si tu pridu na svoje.
				</>
			),
			orderClass: "order-xl-1",
			diffClass: "",
		},
		{
			id: 2,
			img: img2,
			text: (
				<>
					Pansky strih <span>vela moznosti</span> zaposobit.
				</>
			),
			orderClass: "order-xl-2",
			diffClass: "flex-sm-column-reverse ",
		},
		{
			id: 3,
			img: img3,
			text: (
				<>
					Pansky strih <span>vela moznosti</span> zaposobit.
				</>
			),
			orderClass: "order-xl-3",
			diffClass: "",
		},
	];

	return (
		<>
			<div className="row justify-content-between align-items-center d-none d-xl-flex mb-4">
				{/* End .col */}

				{heroContent.map((val) => (
					<div className={` col-xl-3 col-lg-5 col-sm-6  ${val.orderClass}`} key={val.id}>
						<div className={` d-flex flex-column ${val.diffClass}`}>
							<img src={val.img} alt="media" className="img-fluid  rounded rounded-5" />
							{/* <p className=" rounded m-1 text-secondary text-center">{val.text}</p> */}
						</div>
					</div>
					// {/* End .col */}
				))}
			</div>
			<div className="row justify-content-between align-items-start ">
				<div className="col-12 ms-auto me-auto order-xl-5 ">
					<h1 className="title cd-headline rotate-1 lg-mb-60 ">
						<div className="logo  d-flex justify-content-center">
							<img className="img-fluid" src={require("../../assets/images/logo/pepeW.svg").default} alt="brand" />
						</div>
					</h1>
				</div>
			</div>
		</>
	);
};

export default Hero;
