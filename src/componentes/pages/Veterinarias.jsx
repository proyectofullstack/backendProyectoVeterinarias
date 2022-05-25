 import React, { useState, useEffect } from 'react'
 
 const veterinarias = () => {

    const [sedeVeterinaria, setSedeVeterinaria] = useState([])


    useEffect(() => {
        listarVeterinarias()
    }, [])


    const veterinariasApi = [
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423506,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Terravet Centro Veterinario",
          "direccion": "Calle 30 A #79-117",
          "barrio": "Belen la Palma ",
          "web": "https://www.laspaginasamarillasencolombia.com/terravet-centro-veterinario/?TERRAVET%20CENTRO%20VETERINARIO",
          "telefono": "604 322 3760 - 311 427 2278"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423507,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Veterinaria Mundo Canino Medellin",
          "direccion": "Dg59 A N³ 23 A-39",
          "barrio": "Nuevo Bello",
          "web": "https://www.laspaginasamarillasdecolombia.com/mi_web.php?recordID=6006?Veterinaria%20mundo%20canino%20medellin",
          "telefono": "604 462 2809 - 317 686 4105"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423508,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Caninos Y Felinos Poblado S.A.S",
          "direccion": "Carrera 43 B 12 - 157",
          "barrio": "Poblado Manila",
          "web": "https://www.caninosyfelinospoblado.com/",
          "telefono": "604 266 4620 - 301 622 4933"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423509,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Punto Vet Clinica Veterinaria",
          "direccion": "Calle 49B # 68-18",
          "barrio": "Sector Estadio",
          "web": "https://www.puntovet.com.co/",
          "telefono": "604 322 3781 - 311 291 9194"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423510,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Caninos Y Felinos Hospital Veterinario",
          "direccion": "Carrera 78 # 47 - 50",
          "barrio": "El Velódromo",
          "web": "https://www.caninosyfelinos.com.co/",
          "telefono": "604 448 8293 - 312 277 9528"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423511,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Veterinario en su Hogar\t",
          "direccion": "Carrera 78 #64 42 Interior 1",
          "barrio": "Medellín-Antioquia",
          "web": "https://www.veterinarioensuhogar.com/",
          "telefono": "604 322 1182 -  302 346 5955"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423512,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "CatDog Hospital Veterinario",
          "direccion": "Calle 50 # 81 A 47",
          "barrio": "Calasanz",
          "web": "https://www.catdog.com.co/",
          "telefono": "604 349 6820 - 300 603 0931"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423513,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Cimevet Clinica Veterinaria",
          "direccion": "Calle 47D # 77b-07",
          "barrio": "Sector Estadio",
          "web": "http://www.cimevet.com/",
          "telefono": "604 591 3884"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423514,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Clinica Veterinaria Sana Vet",
          "direccion": "Carrera 76 #32D-22",
          "barrio": "Los Almendros",
          "web": "http://www.sanavet.co/",
          "telefono": "604 444 8607 - 311 639 5731"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423515,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Clínica Veterinaria San Lucas",
          "direccion": "Carrera 16 No.12 Sur - 111",
          "barrio": "Loma de Los Balsos",
          "web": "https://www.veterinariasanlucas.com/",
          "telefono": "604 322 12 85 - 310 825 1848"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423516,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Veterinario a Domicilio Premiumvet",
          "direccion": "Calle 35 #87a 13",
          "barrio": "Laureles Almería",
          "web": "https://premiumvet.com.co/",
          "telefono": "604 589 8813 - 300 405 00 65"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423517,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Centro Veterinario E.V.A",
          "direccion": "Calle 37d ## 81 a 73",
          "barrio": "Laureles",
          "web": "https://centro-veterinario-eva.negocio.site/",
          "telefono": "310 431 9656"
        },
        {
          "id": {
            "timestamp": 1652916398,
            "machine": 11939485,
            "pid": 24189,
            "increment": 7423518,
            "creationTime": "2022-05-18T23:26:38Z"
          },
          "nombre": "Vital Clínica Veterinaria de Especialistas",
          "direccion": "Carrera 43a #10 sur - 45",
          "barrio": "Medellín-Antioquia\t",
          "web": "http://www.vital.vet/",
          "telefono": "604 444 12 99"
        }
      ]


    const listarVeterinarias = async () => {
        // const url = 'http://www.veterinaria.somee.com/api/VeterinariaControlller'
        // const res = await fetch( url );
        // const data = await res.json();

         
        const apiVeterinaria = veterinariasApi.map( vete => {
            return {
                id:vete.increment,
                nombre:vete.nombre,
                direccion:vete.direccion,
                barrio:vete.barrio,
                telefono:vete.telefono,
                email:vete.web
            }
        })
        setSedeVeterinaria(apiVeterinaria)
    }

   return (
       
       <>
       <h3>veterinarias</h3>
       <hr></hr>
    <table >
        <thead>
            <tr >
                <th>Nombre veterinaria</th>
                <th>Barrio</th>
                <th>Dirección</th>
                <th>Telefono</th>
                <th>Web</th>
            </tr>
        </thead>
        <tbody>

            {
                sedeVeterinaria.map( items => (
                    <tr key={items.nombre}>
                        <td>{items.nombre}</td>
                        <td>{items.barrio}</td>
                        <td>{items.direccion}</td>
                        <td>{items.telefono}</td>
                        <td>{items.email}</td>
                    </tr>
                ))   
            }
            
        </tbody>
    </table>
</>
   )
 }
 
 export default veterinarias