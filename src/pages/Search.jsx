import React from 'react';
import SearchDetail from '../components/SearchDetail'
import { useParams } from 'react-router-dom';

export default function Search( { datas } ) {

    const { search } = useParams()

  return (
         
         <div>

              <SearchDetail datas={datas} search={search} />

         </div>
  )
}

