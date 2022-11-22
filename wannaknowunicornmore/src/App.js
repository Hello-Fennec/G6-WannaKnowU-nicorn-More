import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='UnicornApp'>
        <ResponsiveAppBar />
        <Home />
    </div>
  );
}

export default App;
