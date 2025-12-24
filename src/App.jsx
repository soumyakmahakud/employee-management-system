
import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmplayeeDashboard from './components/Dashboard/EmplayeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)


  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin'}))
    } else if (userData) {
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'employee', data:employee}))
      }
    } else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmplayeeDashboard data = {loggedInUserData} changeUser={setUser}/> : null)}
    </>
  )
}

export default App
