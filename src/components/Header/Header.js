const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">Home</a>
                    <a className="nav-link" href="/about">About Us</a>
                    <a className="nav-link" href="/contact">Contact Us</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;