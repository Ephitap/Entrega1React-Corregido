import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App({Footer}) {
  return (
    <div className="App">
        
        
        <>
        <NavBar/>
        <ItemListContainer texto="The Black Library"/>
        </>
      
        <p>{Footer}</p>
    </div>
    
  );
  
}

export default App;
