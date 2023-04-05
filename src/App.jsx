
import './App.css'
import WhoAmI from './components/whoAmI/WhoAmI'

function App() {

  return (
    <div className='App'>
      <WhoAmI name='John' surname='Wall' link='link.com' />
      <WhoAmI name="Bob" surname="Swan" link="link.com" />
    </div>
  )
}

export default App
