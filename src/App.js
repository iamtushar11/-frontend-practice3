import './App.css';
import Adon from './Components/Adon';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Adon />
      <Footer />
    </div>
  );
}

export default App;
