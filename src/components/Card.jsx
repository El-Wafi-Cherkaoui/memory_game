import { useState } from "react"

export default function Card({data, is_clicked}){
    const [clicked, setClicked] = useState(false)
    // if(clicked) return 
    return(
        <div onClick={()=>{setClicked(true); is_clicked(data)}}>
            <h1>ss</h1>
            <img src={data.images.original.url}/>
        </div>
    )
}