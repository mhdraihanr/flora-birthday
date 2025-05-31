import AudioPlayer from "./Audio";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="src/assets/netflix-logo.png"
          alt="Netflix"
          className="logo-img"
        />
        <nav className="nav">
          <ul>
            <li>
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                New & Popular
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                My List
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <i className="icon search-icon"></i>
        <AudioPlayer />
        <i className="icon bell-icon"></i>
        <div className="profile">
          <img
            src="src/assets/netflix-profile.png"
            alt="Profile"
            className="profile__avatar"
          />
          <span className="arrow-down"></span>
        </div>
      </div>
    </header>
  );
}
