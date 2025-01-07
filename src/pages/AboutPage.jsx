import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../containers/NavigationBar';
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
          <div class="box">
          </div>
          <div class="box">
          </div>
          <div class="box">
          </div>
          <div class="box">
          </div>
        </div>
      </body>
    </>
  );
}

export default AboutPage;