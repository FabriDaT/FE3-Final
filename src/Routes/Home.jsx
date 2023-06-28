import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

 const [users, setUsers] = useState([])

 useEffect(()=> {
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json() 
    setUsers(data)
  } 
   fetchData()
  
 }, [])
 
  console.log(users)
  return (
    <main className="" >
      <h1>Home - Dentistas</h1>
      <div className='card-grid'>
        
        {/* Aqui deberias renderizar las cards */}
          {
            users.map( (user) => (
              <Card  name={user.name} username={user.username}  key={user.id}> </Card>
            )
                
             )
          }
      </div>
    </main>
  )
}

export default Home