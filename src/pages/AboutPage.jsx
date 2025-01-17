import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../containers/NavigationBar';
import MovieAddictLogo from '../images/logos/Movie-Addict-Logo2.png';

import '../App.css';


function AboutPage() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BE_URL}/api`);
      setArray(response.data.fruits);
      console.log(response.data.fruits);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <NavigationBar />
      <body>
        <div class="main-grid">
          <div class="sub-grid">
            <h3>Project: </h3>
            <p>This project is about ...</p>
            <img src={MovieAddictLogo} alt="Movie-Addict-Logo2" />
          </div>
          <div class="sub-grid">
            <h3>Project: </h3>
            <p>This project is about ...</p>
            <img src={MovieAddictLogo} alt="Movie-Addict-Logo2" />
          </div>
          <div class="sub-grid">
            <h3>Project: </h3>
            <p>This project is about ...</p>
            <img src={MovieAddictLogo} alt="Movie-Addict-Logo2" />
          </div>
          <div class="sub-grid">
            <h3>Project: </h3>
            <p>This project is about ...</p>
            <img src={MovieAddictLogo} alt="Movie-Addict-Logo2" />
          </div>
        </div>
      </body>
    </>
  );
}

export default AboutPage;