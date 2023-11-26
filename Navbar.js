import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
  
  <span className="navbar-brand mb-40 h1" style={{ fontWeight: 'bold', marginRight: '800px', marginLeft: '50px'}}>Magnabox Private limited</span>
  
    <span className="navbar-text">
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064072239100&tbnid=WEFjQ1vJ0wKyyM&vet=12ahUKEwi3zK2yy9yCAxU0YmwGHQf-CPcQMygPegQIARBt..i&imgrefurl=https%3A%2F%2Fm.facebook.com%2F3SigmaCRM%2F&docid=P_gMk6G0kF4DgM&w=278&h=278&q=3sigma%20logo&ved=2ahUKEwi3zK2yy9yCAxU0YmwGHQf-CPcQMygPegQIARBt" alt="logo"
      style= {{marginRight: '5px'}}></img>
      <span class="navbar-brand mb-40 h3" style={{ color: 'black' }}>3sigma</span>
    </span>
    </nav>
    
    <nav className="navbar navbar-light  justify-content-between" style={{ backgroundColor: '#e3f2fd' }}>
    <a href="#/" className="navbar-brand mb-40 h2"  style={{marginLeft: '50px'}}>Add new lead form</a>
  <form className="form-inline">
    
    <button className="btn btn-outline-success my-2 my-sm-0" style={{color: 'red', marginRight: '100px', borderColor:'black', padding: '7px'}} type="submit">Cancel</button>
  </form>
</nav>

    </div>
  );
}

export default Navbar;
