import React, { useEffect, useState } from 'react'
import { useConfigContext } from '../utils/useConfigContext'
import { lang } from '../utils/languageConstants';
import toast from 'react-hot-toast';
import useAiContextProvider from '../utils/useAiContext';

const Body = () => {
  const {langKey}=useConfigContext();
 


 
 
 


  return (
    <div className='relative top-14'>
      <h1>{lang[langKey].searchbar}</h1>
      <h1>{lang[langKey].searchPlaceholder}</h1>
      
      <button className='p-2  m-2 bg-red-300'>fetch</button>
    </div>
  )
}

export default Body
