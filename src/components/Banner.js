import Button from './Button';

function Banner(props) {
  return (
    <section id="banner">
        <article>
            <h2>{props.title}</h2>
            <p>
                {props.text}
            </p>
        </article>

        <div>
            <Button isPrimary={false}/>
            <Button isPrimary={true}/>
        </div>
    </section>
  )
}

export default Banner;