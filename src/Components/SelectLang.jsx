import React from 'react';
import { useConfigContext } from '../utils/useConfigContext';
import { supportedLang } from '../utils/languageConstants';

const SelectLang = () => {
    const {changeLang,langKey}=useConfigContext();

  return (
    <div className="relative inline-block">
      <select
        id="language"
        name="language"
        className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
        defaultValue="en"
        title="Change Language"
        onChange={(e)=> changeLang(e.target.value)}
      >
        {supportedLang.map((L) => (
          <option value={L.code} key={L.code} className="bg-gray-900 text-white">
            {L.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLang;
