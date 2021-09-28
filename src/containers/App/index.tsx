import React from 'react';
import SEO from '@/components/SEO';
import Router from '@/components/Router';
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  console.log(process.env.NODE_ENV);
  return (
    <div>
      <SEO></SEO>
      <Router></Router>
    </div>
  );
}

export default App;
