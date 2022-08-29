import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  function getMode(mode) {
    if(mode === 'light')
      return props.lightTheme;
    else if(mode === 'dark')
      return props.darkTheme;
    else if(mode === 'blue')
      return props.blueTheme;
    else if(mode === 'yellow')
      return props.yellowTheme;
    else if(mode === 'green')
      return props.greenTheme;
  }

  return (
    <nav className={`navbar navbar-expand-lg`} style={getMode(props.mode)}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:getMode(props.mode).color}}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{color:getMode(props.mode).color}}>{props.nav1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/" style={{color:getMode(props.mode).color}}>{props.nav2}</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch`}>
            {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label> */}
            <span className="mx-2" style={{color:getMode(props.mode).color}}>Select Theme</span>
            <button className="btn btn-secondary mx-1" onClick={props.changeToLightTheme}>L</button>
            <button className="btn btn-dark mx-1" onClick={props.changeToDarkTheme}>D</button>
            <button className="btn btn-primary mx-1" onClick={props.changeToBlueTheme}>B</button>
            <button className="btn btn-warning mx-1" onClick={props.changeToYellowTheme}>Y</button>
            <button className="btn btn-success mx-1" onClick={props.changeToGreenTheme}>G</button>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    nav1: PropTypes.string.isRequired,
    nav2: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title",
    nav1: "nav1",
    nav2: "nav2"
}