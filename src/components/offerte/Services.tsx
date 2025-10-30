import React from 'react';

interface ServicesProps {
  services: string[];
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Services: React.FC<ServicesProps> = ({ services, onCheckboxChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">De uit te voeren werkzaamheden</h2>
      <div className="space-y-3">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="woning_opmeten"
            onChange={onCheckboxChange}
            checked={services.includes('woning_opmeten')}
            className="mt-1 mr-2"
          />
          <span>Woning laten opmeten door huismanwandafwerking</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="mechanisch_schuren"
            onChange={onCheckboxChange}
            checked={services.includes('mechanisch_schuren')}
            className="mt-1 mr-2"
          />
          <span>Wanden machinaal schuren, aanbrengen van renovlies, affilmen en schroblasse 1 / Muurverf naar eigen aanbrengen</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="renovlies_behang"
            onChange={onCheckboxChange}
            checked={services.includes('renovlies_behang')}
            className="mt-1 mr-2"
          />
          <span>Wanden voorzien van Renovlies behang</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="schrobklasse_muurverf"
            onChange={onCheckboxChange}
            checked={services.includes('schrobklasse_muurverf')}
            className="mt-1 mr-2"
          />
          <span>Wanden voorzien van schrobklasse 1 muurverf</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="machinaal_schuren"
            onChange={onCheckboxChange}
            checked={services.includes('machinaal_schuren')}
            className="mt-1 mr-2"
          />
          <span>Wanden/plafond machinaal schuren</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="structuur_egaliseren"
            onChange={onCheckboxChange}
            checked={services.includes('structuur_egaliseren')}
            className="mt-1 mr-2"
          />
          <span>Structuur muur egaliseren</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="zolderplaten_spuiten"
            onChange={onCheckboxChange}
            checked={services.includes('zolderplaten_spuiten')}
            className="mt-1 mr-2"
          />
          <span>Complete afwerking zolderplaten airless spuiten tot 100m2</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="stucen_behangklaar"
            onChange={onCheckboxChange}
            checked={services.includes('stucen_behangklaar')}
            className="mt-1 mr-2"
          />
          <span>Wanden stucen behangklaar</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="behanger_inhuren"
            onChange={onCheckboxChange}
            checked={services.includes('behanger_inhuren')}
            className="mt-1 mr-2"
          />
          <span>Behanger inhuren € 45 - 60 (excl. btw) per uur voor het plaatsen van eigen behang</span>
        </label>
      </div>
    </div>
  );
};

export default Services;