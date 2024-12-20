import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../style'
import { navLinks } from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive]=useState("");
  return (
  <nav className= {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className="w-full justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className='flex items-center gap-2' onClick={()=>{setActive("")
        window.scrollTo(0,0);
      }}>
        <img src="https://t3.ftcdn.net/jpg/06/91/25/66/240_F_691256613_uBk4GQtjh8ODDd1VWDqxroW3nllTzQwF.jpg" alt="logo" className='w-10 h-10 object-contain'/>
        <p>Shivam <span>Shukla</span></p>
      </Link>
    </div>
  </nav>
  )
}

export default Navbar