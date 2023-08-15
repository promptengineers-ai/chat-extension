import './App.css';
import React from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

// Pages
import Home from './pages/Home';
import Chat from './pages/Chat';

// Contexts
import { AppProvider } from './contexts/AppContext'
import Layout from './layouts';

function App() {

  return (
    <Router>
      <ChakraProvider>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
            </Routes> 
          </Layout>
        </AppProvider> 
      </ChakraProvider>
    </Router>
  );
}

export default App;
