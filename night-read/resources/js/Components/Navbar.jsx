import NightReadLogo from "../../../storage/app/public/images/logo/night-read-logo.png";
import SearchIcon from "../../../storage/app/public/images/icons/magnifier.png";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-content">
                    <img
                        src={NightReadLogo}
                        alt="Night Read Logo"
                        className="navbar-logo"
                    />

                    <div className="navbar-middle">
                        <div className="search-container">
                            <input
                                type="image"
                                src={SearchIcon}
                                alt="Search Icon"
                                className="search-icon"
                            />
                            <input type="text" className="search-input" />
                            <button className="filter-btn">Filter</button>
                        </div>
                        <button className="login-btn">Log In</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
