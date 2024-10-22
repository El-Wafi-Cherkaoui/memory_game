import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [clicked, setClicked] = useState([])
  let current_order = []


  useEffect(()=>{
    fetch('https://api.giphy.com/v1/stickers/trending?api_key=q5vznX8z9Ng0FYBj5mliooagqNu7BkPI&limit=2')
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
    if(clicked.includes(card.id)) alert('lost!')
      else{
        setClicked((prev)=>[...prev, card.id])
      }    
  }
  return (
    <>
    
      {current_order.map((card_data, key)=>{
        return <Card data={card_data} key={key} is_clicked = {add_to_clicked}/>
      })}
    </>
  )
}

export default App
