import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StorageContext } from '../../types'
import GlobalStorage from '../../GlobalStorage'
import countItemsInCart from '../../utilities/countItemsInCart'

function Header(): JSX.Element {
    const [storage] = useContext<StorageContext>(GlobalStorage)
    const [count, setCount] = useState<number>()

    useEffect(() => {
        const currentCount: number = countItemsInCart(storage.cart)
        setCount(currentCount)
    }, [storage.cart])

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
                            Cart ({count})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
