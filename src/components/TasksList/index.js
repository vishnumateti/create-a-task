import './index.css'

const TasksList = props => {
  const {taskDetails, tags} = props
  const {inputTask, inputTab} = taskDetails
  const findItem = tags.find(item => item.optionId === inputTab)
  console.log(taskDetails)

  return (
    <li>
      <p>{inputTask}</p>
      <p>{findItem.displayText}</p>
    </li>
  )
}

export default TasksList
