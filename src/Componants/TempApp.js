import react, { useEffect, useState } from 'react';
import "./css/style.css";

const TempApp =()=>{

    // const[city,setCity]=useState(null);
    const[city,setCity]=useState([]);
    const[search,setSearch]=useState('Nagpur');

    useEffect(()=>{

        const fetchApi = async() =>{
           
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f5969604c9740f5bafab4d21cda7dcb6`
           const response = await fetch(url); 
         
        //    console.log(response);
        const resJson = await response.json();
        // console.log(resJson);
        //  console.log(resJson.name);
         setCity(resJson.main);
      

        };
        
        
        
        fetchApi();

    },[search])

    return(
        <>
         <div className='box'>
           <div className="inputData">
           <input
               type="search"
               className="inputField"
               value={search}
               onChange={
                   (event)=>{
                    
          setSearch(event.target.value)
        //   console.log(event.target.value)
                  
                        }

               }
           />

           </div>

        {!city ?
        (
           <p className="errMsg">No Data Found</p>
        )
        
        : 
        (
            <div>
            <div className='info'>
            <h2 className='location'>
            <i className="fas fa-street-view"> </i> {search}</h2>
         </div>
         <h1 className='temp'>
         Temp {city.temp}°Cel
        
          </h1>
          <h4 className="temp_max">Min: {city.temp_min}°Cel | Max:{city.temp_max}°Cel</h4>
         

          </div>
            
        )}

       </div>
        </>
    )

}

export default TempApp;