import Button from './Button';

function Banner() {
  return (
    <section id="banner">
        <article>
            <h2>Welcome to PetSetMatch!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
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