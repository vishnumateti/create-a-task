const Tags = props => {
  const {tabDetails, onClickTagButton} = props
  const {displayText, optionId} = tabDetails

  const onClickTag = () => {
    onClickTagButton(optionId)
  }

  return (
    <li>
      <button type="button" onClick={onClickTag}>
        {displayText}
      </button>
    </li>
  )
}

export default Tags
