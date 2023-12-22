import { CookiesProvider } from 'react-cookie';
import './App.css';
import Router from './routes';


function App() {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>

  );
}

export default App;
