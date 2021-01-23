import React from 'react'

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

const GoalGardenScreen = ({ setShowAddTask, showAddTask, addTask, tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </>
  )
}

export default GoalGardenScreen
