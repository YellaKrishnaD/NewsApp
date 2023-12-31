import React, { PureComponent } from 'react'
import { Link }from 'react-router-dom';

export default class App extends PureComponent {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonk</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item mx-3">
                  <Link className="nav-Link  active text-decoration-none text-light" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item  mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none  text-light" to="/business">Business</Link></li>
                <li className="nav-item mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none text-light" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none text-light" to="/general">General</Link></li>
                <li className="nav-item mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none text-light" to="/health">Health</Link></li>
                <li className="nav-item mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none  text-light" to="/sports">Sports</Link></li>
                <li className="nav-item mx-3"  data-mdb-attribute><Link className="nav-Link text-decoration-none text-light" to="/technology">Technology</Link></li>
                



              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}
