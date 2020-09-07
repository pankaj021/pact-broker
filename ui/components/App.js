import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Loader from './loader/Loader';
import Error from './error/Error';
import DataTable from './main/DataTable';
import Header from './main/Header';
import Modal from './modal/Modal';

import './App.css';

const DEFAULT_LOADER = {
    isLoading: true,
    loadingMsg: "Wait a second..."
}
const DEFAULT_ERROR = {
    isError: false,
    errMsg: "Something went wrong..."
};

export default function App() {
    const [loader, setLoader] = useState(DEFAULT_LOADER);
    const [error, setError] = useState(DEFAULT_ERROR);
    const [apidata, setApiData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/data');
                setApiData(response.data);
            } catch (error) {
                console.log(">>>>>>", error);
                setError({
                    ...DEFAULT_ERROR,
                    isError: true
                })
            }
            setLoader({
                isLoading: false
            });
        }
        fetchData();
    }, []);

    if (loader.isLoading) return <Loader loadingMsg={ loader.loadingMsg } />
    if (error.isError) return <Error errMsg={ error.errMsg } />
    return (
        <Fragment>
          <Header />
          <DataTable data={ apidata } />
        </Fragment>
    )
}