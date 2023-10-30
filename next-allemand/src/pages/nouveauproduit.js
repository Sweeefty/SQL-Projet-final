import Template from "@/layout/template";
import { useEffect, useState } from "react";

function NosProduits() {
	const [voitures, setVoitures] = useState([])

	const fetchCars = async (url) => {
		const data = await fetch('/api/cars/new')
		const json = await data.json()
		setVoitures(json)
	}


	return (
		<Template>
			<div className='w-[100%] h-[100%] full-page bg-gray-200 backdrop-blur-lg'>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Modele</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="RSQ7" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marque</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Audi" className="input input-bordered" name="marque" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Annee</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="2023" className="input input-bordered" name="annee" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Sportif" className="input input-bordered" />
                        </label>
                    </div>
                </form>
			</div>
		</Template>
	);
}

export default NosProduits;
