import React from 'react';
import { useConfigContext } from '../utils/useConfigContext';
import { supportedLang } from '../utils/languageConstants';

const SelectLang = () => {
    const {changeLang,langKey}=useConfigContext();
    console.log(langKey);


   

  return (
    <div className="relative inline-block">
      <select
        id="language"
        name="language"
        className="p-1 text-center appearance-none bg-black text-white text-sm px-2 py-1 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
        defaultValue="en"
        title="Change Language"
         onChange={(e)=> changeLang(e.target.value)
        
        }
      >
            {supportedLang.map((L)=><option value={L.code} key={L.code}>{L.name}</option>

            )}
        
      
      </select>
    </div>
  );
};

export default SelectLang;
