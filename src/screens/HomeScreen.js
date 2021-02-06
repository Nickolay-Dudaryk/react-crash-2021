import Header from '../components/Header';
import PlantGoal from '../components/PlantGoal';
import Trends from '../components/Trends';

const HomeScreen = ({ tasks }) => {
  return (
    <div>
      <div className="todays-tasks-wrapper">
        <Header title="Today's tasks" />
        <ul>
          {tasks.length > 0 ?
            (tasks.map((task) => (
              <li key={task.id} className="task check">
                <input id={task.id} type="checkbox" />
                <h3>{task.text}</h3>
              </li>
            ))) : (
              <div className="nothing-for-today-wrapper">
                <p className="nothing-for-today-text">Nothing For Today</p>
              </div>
            )}
        </ul>
      </div>
      <PlantGoal />
      <Trends />
    </div>
  )
}

export default HomeScreen
