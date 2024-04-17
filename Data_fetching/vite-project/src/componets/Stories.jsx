import React, { useEffect, useState } from 'react'

function Stories() {

    // const [record, setRecords]=useState([]);

    // let isLoading=true;

    let API='https://hn.algolia.com/api/v1/search?query=react';

    const DataFetching= async (url)=>{
        try {
            const response=await fetch(url)
            const data=await response.json();

            console.log(data.hits);

            setRecords(data);
            
        } catch (error) {
            console.log(error);
            
        }
        
    }


    useEffect(()=>{
        DataFetching(API);
    },[]);


    // if(isLoading){
    //     return(
    //         <>
    //         <h2>Loading...</h2>
    //         </>
    //     )
    // }

  return (
    <>
    <h2>My Tech News Post!</h2>
   

    
    </>
  )
}

export default Stories