// Importo las dependencias necesarias
import React, { useState } from "react";
import axios from 'axios';
import { MDBCol, MDBIcon } from "mdbreact";

// Importo los estilos
import './SearchBar.scss';


// Componente de busqueda de empleados
const SearchBar = () => {

    // Hook de busqueda
    const [search, setSearch] = useState({ email: '' })

    // Evento donde recojo la informacion del input de Busqueda para eliminar empleados de la DB
    const handleSearch = e => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    //  FUNCION SEARCH
    // Función que realiza un GET para buscar un empleado concreto y que le pasamos el valor almacenado del Hook SEARCH
    const getData = () => {

        axios.post('http://localhost:8000/api/user/search_one', search)

            .then(response => {
                localStorage.setItem('search_res', JSON.stringify(response.data))
            })
            .catch(error => console.log(error))
    }

    const showData = () => {
        
    }


    
    return (
        <MDBCol className="search-bar" md="6">
            <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" name="email" placeholder="Introduce el email..." aria-label="Search" onChange={handleSearch} />
            </form>
            <div className="button-container">
                <button className="search-button" type="submit" onClick={() => getData()}>Buscar</button>
            </div>
            <div className="search-response">
                
            </div>
        </MDBCol>
    );
}

export default SearchBar;