import { useState, useMemo, useReducer } from 'react'
import './App.css'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [selfDescription, setSelfDescription] = useState('');

  const specs = ['Your specialization', 'Full Stack', 'Frontend', 'Backend'];

  const isUsernameValid = useMemo(() => {
    const validChars = [...username].every(char => // lo spread di una stringa equivale ad uno split() della stessa
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return validChars && username.trim().length >= 6;

  }, [username])

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return (selfDescription.trim().length >= 100 && selfDescription.trim().length <= 1000)
  })

  const submit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !yearsOfExperience.trim() ||
      yearsOfExperience <= 0 ||
      !selfDescription.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert('Error: all fields must be compiled')
    } else {

      console.log(`
      Submitted with the credentials:
      - Full Name: ${fullName}
      - Username: ${username}
      - Password: ${password}
      - Years of experience: ${yearsOfExperience}
      - Specialization: ${specialization}   
      - Description: ${selfDescription} 
  `)
    }
  }

  return (
    <>
      <h2 className='title'>Sign-up</h2>
      <form onSubmit={submit}>
        <section>
          <label >
            <p>Full Name</p>
            <input
              type="text"
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Insert your name here...'
            />
          </label>
          <label>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Insert your usename here...'
            />
            {username.trim() && (
              <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
                {isUsernameValid ? 'Valid username' : 'Invalid username: at least 6 characters and no symbols'}
              </p>
            )}
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Insert your password here...'
            />
            {password.trim() && (
              <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
                {isPasswordValid ? 'Valid password' : 'Invalid password: at leats 8 characters: 1 number, 1 letter and 1 symbol'}
              </p>
            )}
          </label>
        </section>
        <section>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
              <p>Years of experience</p>
              <input
                type="number"
                name='Years of experience'
                onChange={(e) => setYearsOfExperience(e.target.value)}
              />
            </label>
          </div>
          <select
            name='specializations'
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            {specs.map((s, i) => (
              <option key={i} value={s} onSelect={() => setSpecialization(e.target.value, i)}>{s}</option>
            ))}
          </select>
        </section>
        <section>
          <textarea
            value={selfDescription}
            placeholder='Insert a description of yourself'
            onChange={(e) => setSelfDescription(e.target.value)}
          />
          {selfDescription.trim() && (
            <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
              {isDescriptionValid ? 'Valid description' : 'Invalid description: at least 100 characters, no more than 1000 characters'}
            </p>
          )}
        </section>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button type='submit'>Sing up</button>
        </div>
      </form>
    </>
  )
}

export default App
