import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    return(
        <header className="top">
            <p>
                Portifólio
            </p>

            <nav>
                <a href="#">inicio</a>
                <a href="#">html e css</a>
                <a href="#">React</a>
            </nav>

            <nav>
                <a href="#">github</a>
                <a href="#">linkdin</a>
            </nav>
        </header>    
    )
}