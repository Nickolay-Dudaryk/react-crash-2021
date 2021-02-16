import plantGoal from '../assets/img/plantGoal.svg';
import GoalsSwiper from '../components/GoalsSwiper';
import { Link } from 'react-router-dom';

const PlantGoal = ({ tasks }) => {
  return (
    <div className="plant-goal-wrapper">
      {(tasks.length === 0 ? 
        (<Link to="/goal-garden">
          <div className="plant-goal">
            <img src={plantGoal} alt="plant a new goal" />
            <p className="plant-goal-text">Plant a Goal</p>
          </div>
        </Link>
      ) : (
        <GoalsSwiper tasks={tasks} />
      ))}
    </div>
  )
}

export default PlantGoal
