import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Search( { datas, search } ) {
    
    let [ result, setResult ] = useState( [] );
  
    useEffect( () => {
        const filterResult = datas.questions.filter( (q) => {
            return q.questionName.toLowerCase().includes( search.toLowerCase() );
       } )
       setResult( filterResult );
    }, [ datas ] )

  return (
         
         <div className= ' p-8 pb-40 bg-bg'>

              <div className=" p-8 px-16 max-w-6xl mx-auto rounded-md bg-white"> 
              
                  { result.length === 0 ? (

                     <div className=" py-16">

                         <p className= ' py-2 text-main text-base font-semibold' > သင်ရှာဖွေလိုသော <span className=' text-text text-lg ' > " { search } " </span> အကြောင်းအရာ မရှိပါ။ </p>

                         <div className=" w-[30%] mx-auto mt-20 rounded bg-main p-2">

                             <Link to='/'>
                                  <p className=' text-center text-white text-sm font-semibold' > နောက်သို့ </p>
                             </Link>

                         </div>

                     </div>

                  ) : ( 

                     <div className=" py-16 ">
                     
                     { result.map( res => (

                          <ul className="flex gap-2 py-3 list-disc" key={ res.questionNo } >

                              <Link to={ `/numberbox/${ res.questionNo }` }>
                                   <li className=' text-text text-base font-semibold hover:text-main'> { res.questionName } </li>
                              </Link>

                          </ul>

                     ) ) }

                     <div className=" w-[30%] mx-auto mt-20 rounded bg-main p-2">

                         <Link to='/'>
                               <p className=' text-center text-white text-sm font-semibold' > နောက်သို့ </p>
                         </Link>

                     </div>

                     </div>

                  ) }

              </div>

         </div>
  )
}