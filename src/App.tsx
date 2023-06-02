import { useEffect, useState } from 'react'
import './App.css'
import { breakify } from './functions/breakify'
import BreakingLogo from './component/BreakingLogo'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [first, setFirst] = useState(['', '', ''])
  const [last, setLast] = useState(['', '', ''])


  useEffect(() => {
    setFirst(breakify(firstName))
  }, [firstName])

  useEffect(() => {
    setLast(breakify(lastName))
  }, [lastName])
  

  return (
    <>
    <div className='container'>
      <BreakingLogo result = {first} />
      <BreakingLogo result = {last} />
      <div className='row'>
      <div>
      <label>First Name</label>
      <input 
      type="text"
      value={firstName}
      onChange={e => setFirstName(e.target.value)} />
      </div>
      <div>
      <label>Last Name</label>
      <input 
      type="text"
      value={lastName}
      onChange={e => setLastName(e.target.value)} />
      </div>
      </div>
      <button>Breakify</button>
    </div>
    </>
  )
}

export default App
