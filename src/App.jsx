import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [h_points, setH_Points] = useState(0)
  const [points, setPoints] = useState(0)
  const [clicked, setClicked] = useState([])
  let current_order = []


  useEffect(()=>{
    fetch('https://api.giphy.com/v1/gifs/search?api_key=q5vznX8z9Ng0FYBj5mliooagqNu7BkPI&q=dog&limit=10')
    .then((res)=>res.json())
    .then((res)=>{setData(res.data)})
  }, [])

  randomize_data()
  function randomize_data(){
    if(data.length == 0) return
    console.log(data);
    
    let new_data = []
    let used_index = []
    data.map((d)=>{
      let random_index = Math.floor(Math.random()*data.length)
      while(used_index.includes(random_index)){
        random_index = Math.floor(Math.random()*data.length)
      }
      new_data[random_index] = d
      used_index.push(random_index)
    })
    current_order = new_data
  }
  function add_to_clicked(card) {
    if(clicked.includes(card.id)) {
      setPoints(0)
      setClicked([])
    }
    else{
      setClicked((prev)=>[...prev, card.id])
      setPoints(points + 1)
      if (points + 1 > h_points) setH_Points(points+1)
    }    
  }
  return (
    <>
      <div className="header">
        <h1 className='highest_points'>Highest Points : {h_points}</h1>
        <h1 className='points'>Points : {points}</h1>
      </div>
      <div className="cards">
        {current_order.map((card_data, key)=>{
          return <Card data={card_data} key={key} is_clicked = {add_to_clicked}/>
        })}
      </div>
    </>
  )
}

export default App
