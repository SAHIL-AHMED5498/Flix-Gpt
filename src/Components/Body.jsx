
import { useConfigContext } from '../utils/useConfigContext'
import { lang } from '../utils/languageConstants';


const Body = () => {
  const {langKey}=useConfigContext();
  return (
    <div className='relative top-14 min-h-screen bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 p-8'>
      <div className='max-w-4xl mx-auto animate-[fadeInUp_0.6s_ease-out]'>
        <h1 className='text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4'>
          {lang[langKey].searchbar}
        </h1>
        <h1 className='text-lg text-gray-300 mb-8'>
          {lang[langKey].searchPlaceholder}
        </h1>
        
        <button className='px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-lg active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50'>
          Fetch
        </button>
      </div>
    </div>
  )
}

export default Body
