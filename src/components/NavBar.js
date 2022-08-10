import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Navbar.module.css'

const Header = () => {
  const [expandNavBar, setExpandNavBar] = useState(false)

  const location = useLocation()
  // console.log(location)

  const showNavBar = () => {
    setExpandNavBar((prev => !prev))
    
  }

  useEffect(() => {
    setExpandNavBar(false)
  }, [location])

  const showToggle = `${expandNavBar ? classes.open : classes.close } `

  return (
    <div className={`${classes.nav} ${showToggle}`}>
      <div className={classes.toggleButton}>
        <button onClick={showNavBar}><FontAwesomeIcon icon='reorder' /></button>
      </div>
      <ul className={classes.list}>
        <div className={classes['list-items']}>
          <Link to='/' className={classes['list-item']}>
            Home
          </Link>
          <Link to='/projects' className={classes['list-item']}>
            Projects
          </Link>
          <Link to='/contact' className={classes['list-item']}>
            Contact
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Header
