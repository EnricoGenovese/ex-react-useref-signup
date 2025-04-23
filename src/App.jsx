import { useState } from 'react'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [selfDescription, setSelfDescription] = useState('');

  const specs = ['Your specialization', 'Full Stack', 'Frontend', 'Backend'];

  const submit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !yearsOfExperience.trim() ||
      yearsOfExperience <= 0 ||
      !selfDescription.trim()
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
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Insert your password here...'
            />
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
            defaultValue={specs[0]}
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
            onChange={((e) => setSelfDescription(e.target.value))}
            maxLength='255'
          />
        </section>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button type='submit'>Sing up</button>
        </div>
      </form>
    </>
  )
}

export default App
