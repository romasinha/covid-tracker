import React, {useState, useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api';
const CountryPicker = () =>{

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(()=>{
      const fetchAPI = async()=>{
          setFetchedCountries(await fetchCountries());

      }  

      fetchAPI()
    }, [setFetchedCountries]);



    return(
        <FormControl className = {styles.formControl}>
            <NativeSelect>
                <option value = "global">Global</option>
                {fetchedCountries.map((country, i) => <option key ={i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;