import React, { useState } from 'react';
import searchIcon from '../assets/searchIcon.svg'
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {

    let navigate = useNavigate();
    let [ search, setSearch ] = useState( '' );
    const handleSearch = ( e ) => {
         e.preventDefault();
         if( search ) {
            navigate( `/${ search }` );
         }
    };

  return (
         
         <div className=' p-2' >

              <p className=' font-bold mb-4 text-center ' > သိလိုသောမေးခွန်းအား ရှာဖွေပါ။ </p>

              <form onSubmit={ handleSearch } className='flex justify-center'>

                   <input type="text" value={ search } onChange={ (e) => setSearch( e.target.value ) } className=' w-[50%] p-2 ps-4 text-sm font-semibold bg-gray-100 border-2 border-main rounded rounded-tr-none rounded-br-none outline-none ' />
                   <button type='submit' className=' group flex items-center gap-1 p-2 bg-main text-white rounded rounded-tl-none rounded-bl-none transition-all ' > 

                          <img src={ searchIcon } alt="" className=' w-4 h-4 group-hover:hidden' />
                          <p className=' text-sm font-semibold hidden group-hover:inline-block ' > Search </p>

                   </button>

              </form>

         </div>
  )
}
