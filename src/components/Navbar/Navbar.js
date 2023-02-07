import React from "react";
import logo from "../../assets/THEATER_logo.svg";
import NightlightRoundTwoToneIcon from "@mui/icons-material/NightlightRoundTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar-container">
			<div className="navbar">
				<div className="nav-logo">
					<img className="nav-logo-image" src={logo} alt="LOGO" />
				</div>
				<div className="nav-menu">
					<Link to="/" className="navbar-nav navbar-nav-link">
						<nav className="navbar-nav">HOME</nav>
					</Link>
					<Link to="/movies" className="navbar-nav navbar-nav-link">
						<nav className="navbar-nav">MOVIES</nav>
					</Link>

					<Link to="/tv-shows" className="navbar-nav navbar-nav-link">
						<nav className="navbar-nav">TV SHOWS</nav>
					</Link>

					<Link
						to="/categories"
						className="navbar-nav navbar-nav-link"
					>
						<nav className="navbar-nav">CATEGORIES</nav>
					</Link>
				</div>

				<div className="navbar-mode">
					<NightlightRoundTwoToneIcon className="nav-logo-mode" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
