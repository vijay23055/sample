import React, { useState, useEffect, useRef } from 'react';


const App = () => {
  const [count, setCount] = useState(5); // Default count is 5
  const [language, setLanguage] = useState('eng'); // Default language is English
  const [facts, setFacts] = useState([]); // State to store fetched facts
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [fade, setFade] = useState(false); // State to manage fade effect
  const intervalRef = useRef(null); // Reference to store interval ID

  const handleCountChange = (event) => {
    // Update the count state based on user input
    setCount(Number(event.target.value)); // Ensure to convert input value to number
  };

  const handleLanguageChange = (event) => {
    // Update the language state based on user input
    setLanguage(event.target.value);
  };

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://meowfacts.herokuapp.com/?lang=${language}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Initial response", data);
      setFacts([data.data]); // Update facts state with fetched data (putting in an array to maintain consistency)
      setError(null); // Clear any previous errors
      setFade(true); // Trigger fade effect
      setTimeout(() => setFade(false), 500); // Remove fade effect after 500ms
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=${count}&lang=${language}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("response", data);
      setFacts(data.data); // Update facts state with fetched data
      setError(null); // Clear any previous errors
      setFade(true); // Trigger fade effect
      setTimeout(() => setFade(false), 500); // Remove fade effect after 500ms
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    fetchData(); // Call fetchData when the form is submitted

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up a new interval to fetch data every 5 seconds
    intervalRef.current = setInterval(fetchData, 5000);
  };

  useEffect(() => {
    fetchInitialData(); // Fetch initial data on initial load

    // Set up an interval to fetch initial data every 5 seconds
    intervalRef.current = setInterval(fetchInitialData, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [language]); // Add language to dependency array to fetch data when language changes

  return (
    <div>
      <h2>Fetch Meow Facts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="countInput">Enter number of facts:</label>
        <input
          type="number"
          id="countInput"
          name="countInput"
          value={count}
          onChange={handleCountChange}
          min="1"
          max="10" // Example: Limiting the max count to 10
          required
        />
        <label htmlFor="languageSelect">Select Language:</label>
        <select id="languageSelect" value={language} onChange={handleLanguageChange}>
          <option value="eng">English</option>
          <option value="ger">German</option>
          <option value="ben">Bengali</option>
          <option value="esp">Spanish</option>
          <option value="ukr">Ukrainian</option>
        </select>
        <button type="submit">Fetch Facts</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={`container ${fade ? 'fade-out' : 'fade-in'}`}>
        {facts.map((fact, index) => (
          <div key={index} className="card">
            <p>{fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
