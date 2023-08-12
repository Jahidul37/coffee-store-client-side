
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffes = useLoaderData()
  const [coffes, setCoffees] = useState(loadedCoffes)

  return (
    <>

      <div className='m-20'>
        <h1>{loadedCoffes.length}</h1>
        <div className=' grid grid-cols-2 gap-4'>
          {
            coffes.map(coffee => <CoffeeCard key={coffee._id}
              coffee={coffee}
              coffees={coffes}
              SetCoffees={setCoffees}
            >

            </CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
