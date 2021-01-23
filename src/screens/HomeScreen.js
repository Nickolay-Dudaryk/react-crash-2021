import Header from '../components/Header';

const HomeScreen = ({ tasks }) => {
  return (
    <>
      <Header title="Today's tasks" />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task check">
            <input id={task.id} type="checkbox" />
            <h3>{task.text}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomeScreen
