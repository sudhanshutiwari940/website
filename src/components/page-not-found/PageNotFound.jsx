import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Oops! Page not found.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  link: {
    marginTop: '1rem',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#007BFF',
  },
};

export default PageNotFound;
