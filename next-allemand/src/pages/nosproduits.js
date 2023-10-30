import Template from "@/layout/template";
import { useEffect, useState } from "react";

function NosProduits() {
	const [voitures, setVoitures] = useState([])

	const fetchCars = async (url) => {
		const data = await fetch('/api/cars')
		const json = await data.json()
		setVoitures(json)
	}

	useEffect(() => {
		fetchCars()
	}, [])

	return (
		<Template>
			<div className='w-[100%] h-[100%] full-page bg-gray-200 backdrop-blur-lg'>
				<div className="grid grid-cols-3 grid-rows-4 gap-10 p-5">
					{voitures.map((voiture) => <div className="rounded-lg shadow-xl card w-96 bg-base-100">
						<figure>
							<img className='rounded-lg' src="./bmw.jpg" alt="Shoes" />
						</figure>
						<div className="card-body bg!">
							<h2 className="card-title">{Cars.Brand}</h2>
							<p>{voiture.desc}</p>
							<div className="items-center justify-center ">
								<button className=" m-5 p-2 bg-[#B3B3B3] rounded-lg btn btn-primary"> Louer </button>
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</Template>
	);
}

export default NosProduits;
