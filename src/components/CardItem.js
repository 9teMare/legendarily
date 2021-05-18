import React from 'react'
import {Link} from 'react-router-dom'

function Carditem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__items__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img src='/images/MSI.jpg' alt='MSI'
                        className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>MSI</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Carditem;
