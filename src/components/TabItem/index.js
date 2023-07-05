// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateApps, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateApps(tabId)
  }

  const className = isActive ? 'apply' : 'not-apply'

  return (
    <li className="tab-items">
      <button
        type="button"
        className={`tab-button ${className}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
