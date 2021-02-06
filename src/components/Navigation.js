import { Link } from 'react-router-dom';
// Images
import { FaHome } from 'react-icons/fa';
import goalGarden from '../assets/img/goalGarden.svg';
import overview from '../assets/img/overview.svg';
import missedGoals from '../assets/img/missedGoals.svg';
import myRewards from '../assets/img/myRewards.svg';

const Navigation = () => {
  return (
    <nav className='navigation__container'>
      <Link to="/">
        <div className="navigation__link__wrapper">
          <FaHome className='navigation__icon' />
          <p className="navigation__link__text">Home</p>
        </div>
      </Link>
      <Link to="/goal-garden">
        <div className="navigation__link__wrapper">
          <img src={goalGarden} alt='link to goal-garden page' className="link__img" />
          <p className="navigation__link__text">Goal Garden</p>
        </div>
      </Link>
      <Link to="/overview">
        <div className="navigation__link__wrapper">
          <img src={overview} alt='link to overview page' className="link__img" />
          <p className="navigation__link__text">Overview</p>
        </div>
      </Link>
      <Link to="/missed-goals">
        <div className="navigation__link__wrapper">
          <img src={missedGoals} alt='link to missed goals page' className="link__img" />
          <p className="navigation__link__text">Missed Goals</p>
        </div>
      </Link>
      <Link to="/my-rewards">
        <div className="navigation__link__wrapper">
          <img src={myRewards} alt='link to my rewards page' className="link__img" />
          <p className="navigation__link__text">My Rewards</p>
        </div>
      </Link>
    </nav>
  )
}

export default Navigation
