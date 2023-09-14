import './App.css';
import { Provider } from 'react-redux';
import ResponsiveAppBar from './components/AppBar'
import BasicGrid from './screens/Home'
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResponsiveAppBar />
        <BasicGrid />
        
      </div>
    </Provider>
  
  );
}

export default App;
