import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';

function App() {
  return (
    <main className="container">
      <Header/>
      <Banner/>
      <Gallery/>
    </main>
  );
}

export default App;
