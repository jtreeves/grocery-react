import { Link } from 'react-router-dom'

function Header(): JSX.Element {
    return (
        <header>
            <span>Groceryz</span>

            <nav>
                <ul>
                    <li>
                        <Link to='home'>
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='browse'>
                            Browse
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='cart'>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
