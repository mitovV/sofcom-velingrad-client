import { useState, useEffect } from 'react'
import * as mainCategoriesService from './services/mainCategoriesService'
import './App.css'

function App() {
  const [mainCategories, setCategories] = useState([])
  useEffect(()=> {
    mainCategoriesService.getAll()
      .then(setCategories)
  }, [])
  return (
    mainCategories.map(x => <h3 key={x._id}>{x.name}</h3>)
  )
}

export default App
