import './App.css';
import { Provider } from 'react-redux';
import ResponsiveAppBar from './components/AppBar'
import BasicGrid from './screens/Home'


function App() {
  return (
    <Provider>
      <div className="App">
        <ResponsiveAppBar />
        <BasicGrid />
        
      </div>
    </Provider>
  
  );
}

export default App;
