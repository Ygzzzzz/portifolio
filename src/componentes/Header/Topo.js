import './header.css';

export default function Topo() {
    return(
        <header className="top">

            <p className='titulo-principal'>
                Portifólio
            </p>
 
            <nav className='menu-links-top'>
                <a href="w" className='links-top'>inicio</a>
                <a href="w" className='links-top'>html e css</a>
                <a href="w" className='links-top'>React</a>
            </nav>
            <nav className='menu-links-top'>
                <a href="w" className='links-top'>teste</a>
                <a href="w" className='links-top'>linkdin</a>
            </nav>
            
        </header>    
    )
}