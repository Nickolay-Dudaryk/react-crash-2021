import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaCalendarAlt } from 'react-icons/fa';
import { GiWateringCan } from 'react-icons/gi';
import { BiCalendarExclamation } from 'react-icons/bi';


const Navigation = () => {
  return (
    <nav className='navigation__container'>
      <Link to="/"><FaHome className='navigation__icon' /></Link>
      <Link to="/goal-garden"><GiWateringCan className='navigation__icon' /></Link>
      <Link to="/overview"><FaCalendarAlt className='navigation__icon' /></Link>
      <Link to="/missed-goals"><BiCalendarExclamation className='navigation__icon' /></Link>
    </nav>
  )
}

export default Navigation
