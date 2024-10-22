import { useState } from "react"

export default function Card({data, is_clicked}){
    const [clicked, setClicked] = useState(false)
    return(
        <div className="card" onClick={()=>{setClicked(true); is_clicked(data)}}>
            <h1>{data.title}</h1>
            <img src={data.images.original.url}/>
        </div>
    )
}