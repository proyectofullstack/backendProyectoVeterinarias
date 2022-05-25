import React, { useState, useEffect } from "react";
import GenerarId from "../GenerarId";
import './Farmacias.css'

const Farmacias = () => {

  const [farmacia, setFarmacia] = useState([])


  useEffect(() => {
    
    listFarmacias()
  }, [])

  const farmaciasApi = [
    {
      "idFamacia": 1,
      "name": "pronto alivio",
      "addres": "Calle 31 A #78-117",
      "state": true,
      "online": true
    },
    {
      "idFamacia": 2,
      "name": "droguerias comercial colombia",
      "addres": "Calle 25  #78-117",
      "state": true,
      "online": true
    },
    {
      "idFamacia": 3,
      "name": "Droguería el Porvenir",
      "addres": "Calle 10 A #70-11",
      "state": true,
      "online": true
    },
    {
      "idFamacia": 4,
      "name": "Droguería Alemana",
      "addres": "Calle 20 A #60-100",
      "state": true,
      "online": true
    }
  ]
  
    const listFarmacias = async () => {

        // const url = 'http://www.farmacia.somee.com/api/Farmacia'
         
        // const res = await fetch( url);
        // const data = await res.json();

          
        const apiFarmacia = farmaciasApi.map ( far => {

          return {
            id:far.idFamacia,
            name:far.name,
            addres:far.addres,
            oneline:far.online,
            state: far.state
            
          }
        
        })

         
       setFarmacia(apiFarmacia)
      }
        
    
  return (
          // <li className="items-farmacia" key={item.id}>{item.nombre}</li>
          <>
          <h3>veterinarias</h3>
          <hr></hr>
       <table >
           <thead>
               <tr >
                   <th>Nombre farmacia</th>
                   <th>addres</th>
                    
               </tr>
           </thead>
           <tbody>
   
               {
                   farmacia.map( items => (
                       <tr key={items.id}>
                           <td >{items.name}</td>
                           <td >{items.addres}</td>
                            
                       </tr>
                   ))   
               }
               
           </tbody>
       </table>
   </>
    
  );
};

export default Farmacias;
