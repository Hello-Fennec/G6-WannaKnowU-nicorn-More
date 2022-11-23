import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import Page8 from './components/page8';
import Members from './components/Members';

function App() {
  return (
    <div className='UnicornApp'>
        <NavBar />
        <Home />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Members />
    </div>
  );
}

export default App;
