import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import OverviewScreen from './screens/OverviewScreen'
import MissedGoalsScreen from './screens/MissedGoalsScreen'
import GoalGardenScreen from './screens/GoalGardenScreen'
import MyRewardsScreen from './screens/MyRewardsScreen'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Fetch Quote
  const fetchQuote = async () => {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();

    const randomIdx = Math.floor(Math.random() * 100);
    
    setQuote(data[randomIdx].text);
  }


  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Navigation />
        <Route path='/' exact>
          <HomeScreen tasks={tasks} />
        </Route>
        <Route path='/goal-garden'>
          <GoalGardenScreen 
            setShowAddTask={setShowAddTask}
            showAddTask={showAddTask}
            addTask={addTask}
            tasks={tasks}
            deleteTask={deleteTask}
            toggleReminder={toggleReminder}
          />
        </Route>
        <Route path='/overview' component={OverviewScreen} />
        <Route path='/missed-goals' component={MissedGoalsScreen} />
        <Route path='/my-rewards' component={MyRewardsScreen} />
        <Footer quote={quote} addQuote={fetchQuote} />
      </div>
    </Router>
  )
}

export default App
