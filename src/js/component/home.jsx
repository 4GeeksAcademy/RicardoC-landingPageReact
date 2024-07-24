import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./cards.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	const data = [
		{ title: "Primera Carta",
			url: "https://media.tacdn.com/media/attractions-content--1x-1/12/3f/37/b6.jpg",
			texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis veniam dicta odit amet inventore."
		 },
		{ title: "Segunda Carta",
			url: "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Island-of-Hawaii-Accommodations.jpg?itok=6rQtOfzn",
			texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis veniam dicta odit amet inventore."
		 },
		{ title: "Tercera Carta",
			url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/498000/498943-hawaiis-big-island.jpg",
			texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis veniam dicta odit amet inventore."
		 },
		{ title: "Cuarta Carta",
			url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOelw-lVjxpl5_FPN0CsGublR32sBgAPuJQ&s",
			texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis veniam dicta odit amet inventore."
		 }
	]
	return (
		<div>
			<Navbar />
			<div className="row">
				<div class="col-lg-1">
				</div>
				<div className="container col-lg-8 d-flex justify-content-center">
					<Jumbotron />
				</div>
				<div class="col-lg-1">
				</div>
			</div>
			<div className="container">

				<div className="row mt-3 d-flex justify-content-center" style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
					{data.map((value, index, array) => {

						console.log(value.title)
						return(
						<div className="col-12 col-lg-2">
							<Card title={value.title} url={value.url} texto={value.texto}/>
						</div>);

					})}
					

				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
