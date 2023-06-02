import pet1 from '../images/pet1.jpg';
import pet2 from '../images/pet2.jpg';
import pet3 from '../images/pet3.jpg';
import pet4 from '../images/pet4.jpg';


function Gallery() {
  return (
    <section id="gallery">
        <div>
            <figure>
                <img src={pet1} className="gallery-img"></img>
            </figure>
        </div>

        <div>
            <figure>
                <img src={pet2} className="gallery-img"></img>
            </figure>
        </div>

        <div>
            <figure>
                <img src={pet3} className="gallery-img"></img>
            </figure>
        </div>

        <div>
            <figure>
                <img src={pet4} className="gallery-img"></img>
            </figure>
        </div>
    </section>
  )
}

export default Gallery