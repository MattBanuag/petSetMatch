import logo from '../images/pet-house-outlined.png';

function Header() {
  return (
    <header>
        <nav>
            <article className="logo-group">
                <h1 className="title">PetSetMatch.</h1>
                <figure>
                    <img src={logo} className="logo"></img>
                </figure>
            </article>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Find Your Pal</a></li>
                <li><a href="#">About</a></li>
                <li className="indigo">|</li>
                <li><a href="#"  className="account-group">My Account <i class="fa-solid fa-paw indigo"></i></a></li>
                <li><a href="#" className="account-group">Sponsor <i class="fa-solid fa-heart-circle-check indigo"></i></a></li>  
            </ul>
        </nav>
    </header>
  )
}

export default Header;