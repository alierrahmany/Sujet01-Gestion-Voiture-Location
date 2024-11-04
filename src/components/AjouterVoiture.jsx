import React, { useState } from 'react';

function AjouterVoiture({ ajouterVoiture, fuelTypes }) {
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleVoiture = {
      id: `v${Date.now()}`,
      Marque: marque,
      TypeCarburant: typeCarburant,
      PrixLocation: parseFloat(prixLocation),
      image: imageUrl,
    };

    ajouterVoiture(nouvelleVoiture);
    // Reset form fields
    setMarque('');
    setTypeCarburant('');
    setPrixLocation('');
    setImageUrl('');
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <h2 className="h4 mb-4 text-center">Ajouter une Voiture</h2>
        
        <div className="mb-3">
          <input
            type="text"
            placeholder="Marque"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
            required
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <select
            value={typeCarburant}
            onChange={(e) => setTypeCarburant(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Sélectionner le type de carburant</option>
            {fuelTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-3">
          <input
            type="number"
            placeholder="Prix Location"
            value={prixLocation}
            onChange={(e) => setPrixLocation(e.target.value)}
            required
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <input
            type="text"
            placeholder="URL de l'image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Ajouter Voiture
        </button>
      </form>
    </div>
  );
}
export default AjouterVoiture;
