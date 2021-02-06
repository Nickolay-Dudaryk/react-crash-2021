import plantGoal from '../assets/img/plantGoal.svg';

const PlantGoal = () => {
  return (
    <div className="plant-goal-wrapper">
      <div className="plant-goal">
        <img src={plantGoal} alt="plant a new goal" />
        <p className="plant-goal-text">Plant a Goal</p>
      </div>
    </div>

  )
}

export default PlantGoal
