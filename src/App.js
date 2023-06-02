import './style/index.css';
import pet1 from './images/pet1.jpg';
import pet2 from './images/pet2.jpg';
import pet3 from './images/pet3.jpg';
import pet4 from './images/pet4.jpg';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const imageURLs = [pet1, pet2, pet3, pet4];

  return (
    <main className="container">
      <Header/>
      <Banner
        title="Welcome to PetSetMatch!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum."
      />
      <Gallery
        imageURLs={imageURLs}
      />
      <Footer/>
    </main>
  );
}

export default App;
