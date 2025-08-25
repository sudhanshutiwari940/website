import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    alert('Welcome to the Home Page!');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome Home!</h1>
      <p style={paragraphStyle}>
        This is a simple home page component created with React and styled using inline styles.
      </p>
      <button style={buttonStyle} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Home;
