import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../helpers/NavigationBar';

function ContactPage() {
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
      <h1>Fruits List</h1>
      {array.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}

export default ContactPage;