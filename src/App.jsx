import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logo from '../src/components/Logo';
import Home from '../src/pages/Home'
import NumberBox from './pages/NumberBox';
import Search from './pages/Search';
import Answer from './pages/Answer';

export default function App() {

    let [ datas, setData ] = useState( null );
    let [ error, setError ] = useState( null );
    let [ loading, setLoading ] = useState( false );
  
    const fetchData = async() => {
  
      try {
        setLoading( true );
        const response = await fetch( '../data/db.json' );
        if( !response.ok ) {
          throw new Error ( 'Network Error.....' );
        }
        const data = await response.json();
        setData( data );
        setLoading( false );
        setError( null );
      } catch ( err ) {
        setError( err.message );
        setLoading( false );
      }
  
    };
  
    useEffect( ( ) => {
  
      fetchData();
  
    }, [ ] );


  return (
         
         <>
         
         <BrowserRouter>

                <Logo />
         
                <Routes>

                        <Route path='/' element={ datas && <Home datas={ datas } loading={ loading } error={ error } /> } />
                        <Route path='/:search' element={ datas && <Search datas={ datas } /> } />
                        <Route path='/numberbox/:id' element={ datas && <NumberBox datas={ datas } /> } />
                        <Route path='/answer/:id1/:id2' element={ datas && <Answer datas={ datas } /> } />

                </Routes>

         </BrowserRouter>

         </>
  )
}
