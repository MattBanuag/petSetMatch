function Gallery(props) {
  return (
    <section id="gallery">
        {props.imageURLs.map(image => (
            <div>
                <figure>
                    <img src={image} className="gallery-img" alt="Pet with colourful backgrounds"></img>
                </figure>
            </div>
        ))}
    </section>
  )
}

export default Gallery