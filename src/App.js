import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App relative-isolate-flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
    
      <Sidebar />
     
    </div>
  );
}

export default App;
