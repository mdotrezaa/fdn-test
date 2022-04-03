import logo from "../assets/images/FD-Logo-Pink.png";
function Nav(props) {
  return (
    <nav>
      <div className="top-bar">
        <div id="item1" className="menu-icon">
          <i className="bx bx-menu menu-icon"></i>
        </div>
        <div id="item2">
          <img className="logo" src={logo} />
        </div>
        <div id="item3" className="form-search">
          <i class="bx bx-search icon"></i>
          <input className="input-field" type="search" placeholder="Search" />
        </div>
        <div id="item4">
          <button className="btn-login">Login/Register</button>
        </div>
      </div>
      <div className="bottom-bar">
        <ul>
          <li>Skincare</li>
          <li>Make Up</li>
          <li>Body</li>
          <li>Hair</li>
          <li>Fragrance</li>
          <li>Nails</li>
          <li>Tools</li>
          <li>Brands</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
