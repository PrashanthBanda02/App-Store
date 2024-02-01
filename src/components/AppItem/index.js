import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl} = eachApp
  return (
    <li key={appId} className="app">
      <img className="app-icon" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
