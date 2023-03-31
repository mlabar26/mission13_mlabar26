/* function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/FilmCollection">Film Collection</Link>
        </li>
      </ul>
    </nav>
  )
} */

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-primary" href="/">
              <b>Home</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/Podcasts">
              <b>Podcasts</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/FilmCollection">
              <b>Film Collection</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
