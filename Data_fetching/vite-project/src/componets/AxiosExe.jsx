import React, { useEffect, useState } from 'react'
import axios from 'axios';


function AxiosExe() {


    const [records, setRecords]=useState([]);

    const [isError, setError]=useState('')

    useEffect(()=>{
        axios.get('https://hn.algolia.com/api/v1/search?query=react')
        .then((res)=> setRecords(res.data.hits))
        .catch((error)=>{
            setError(error.message);
        })

    },[])
  return (



    <>AxiosExe

    {isError !== "" &&  <h3>{isError}</h3>}


    <div>
        {records.map((post) => {
            const {objectID,author, title, url}=post;

            return(
                <div className='card' key={objectID}>

                    <h3>{author}</h3>
                    <h5>{title}</h5>
                    <a>{url}</a>

                    </div>

            );
        })}
    </div>


   
    </>
  )
}

export default AxiosExe