import React from 'react';

function APropos() {
  return (
    <div className="w-full h-screen bg-cover" style={{ backgroundImage: "url('./bmw.jpg')" }}>
      <div className="h-full p-20 flex items-center justify-center backdrop-blur-lg bg-gray-300 bg-opacity-20">
        <div className="p-10 bg-gray-300 bg-opacity-80 rounded-lg text-gray-800">
          <h1 className="text-4xl font-bold mb-4">À Propos de Bolide Allemand</h1>
          <p className="text-lg">
        	Bolide Allemand est une entreprise de location de voiture de luxe;
			Nous proposons des voitures de marque allemande comme BMW, Mercedes, Audi, Porsche, etc.
			Vous pouvez louer nos voitures pour une journée, un week-end ou plus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default APropos;
