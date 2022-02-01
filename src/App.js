import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context-stores/AuthContext';
import ClaimFormContext from './context-stores/CliamContext';
import RoutesComponent from './RoutesComponent';

function App() {

  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <ClaimFormContext>
            <RoutesComponent />
          </ClaimFormContext>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
