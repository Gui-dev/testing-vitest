import './App.css'
import { Counter } from './components/counter'
import { Greeting } from './components/greeting'
import { UserProfile } from './components/user-profile'

function App() {
  return (
    <>
      <Greeting name="Bruce Wayne" />
      <Counter />
      <UserProfile userId={4} />
    </>
  )
}

export default App
