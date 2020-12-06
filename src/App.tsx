import React from 'react';
import {Container} from 'react-bootstrap';

import { AuthProvider } from './Context/AuthContext';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: '400px'}}>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
