import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { urlPeople } from './endpoints';

function App() {

    useEffect(() => {
        axios.get(urlPeople)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data);
            })
    }, [])
    return (
        <div>
            <h1>This is my first React App</h1>
            <p>Communicating with ASP.Net Core.</p>
        </div>
    );
}

export default App;
