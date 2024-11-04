import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const initialCars = [
  {
    id: "v1",
    Marque: "Dacia_Logan",
    TypeCarburant: "Diesel",
    PrixLocation: 200,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Dacia_Logan_III_%28cropped%29.jpg",
  },
  {
    id: "v2",
    Marque: "Dacia_Sandero",
    TypeCarburant: "Essence",
    PrixLocation: 250,
    image: "https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-bji/sandero-bji-ph1/edito-2560-x-1440/dacia-sandero-bji-ph1-001.jpg.ximg.xsmall.jpg/34b9770af8.jpg",
  },
  {
    id: "v3",
    Marque: "Peugeot208",
    TypeCarburant: "Essence",
    PrixLocation: 400,
    image: "https://ev-database.org/img/auto/Peugeot_e-208_2024/Peugeot_e-208_2024-01@2x.jpg",
  },
];

const getUniqueFuelTypes = (cars) => {
  return cars
    .map(car => car.TypeCarburant)
    .filter((type, index, self) => self.indexOf(type) === index);
};

const fuelTypes = getUniqueFuelTypes(initialCars);

function ListeVoitures() {
  const [voitures, setVoitures] = useState(initialCars);

  const supprimerVoiture = (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      setVoitures(voitures.filter((voiture) => voiture.id !== id));
    }
  };

  const ajouterVoiture = (nouvelleVoiture) => {
    setVoitures([...voitures, nouvelleVoiture]);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">       
          <AjouterVoiture ajouterVoiture={ajouterVoiture} fuelTypes={fuelTypes} />
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover text-center">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Marque</th>
                  <th>Type Carburant</th>
                  <th>Prix Location</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {voitures.map((voiture) => (
                  <Voiture key={voiture.id} {...voiture} onDelete={() => supprimerVoiture(voiture.id)} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeVoitures;
