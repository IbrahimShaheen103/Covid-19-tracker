import React from 'react';

import { Cards, Countries, Charts } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/logo-covid.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
      }
    
      async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    
      render() {
        const { data, country } = this.state;
    
        return (
          <div className={styles.container}>
             <img className={styles.image} src={image} alt="COVID-19" /> 
            <Cards data={data} />
            <Countries handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country} /> 
          </div>
        );
      }
    }
    
    export default App;