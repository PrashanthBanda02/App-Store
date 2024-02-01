import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const handleClickEvent = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab">
      <button
        onClick={handleClickEvent}
        className={`tab-btn  ${isActive ? 'active-tab-btn' : ''}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
