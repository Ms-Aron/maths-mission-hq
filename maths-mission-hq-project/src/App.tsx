
import { useState } from "react"

const questions = [
{q:"Which graph feature should you check first?",options:["Colour","Title and scale","Page number","Font"],a:"Title and scale"},
{q:"Simplify 4x + 3x",options:["7","7x","12x","x7"],a:"7x"},
{q:"Average speed formula is:",options:["speed = time ÷ distance","speed = distance ÷ time","speed = distance × time","speed = distance + time"],a:"speed = distance ÷ time"}
]

export default function App(){
const[index,setIndex]=useState(0)
const[selected,setSelected]=useState(null)
const[score,setScore]=useState(0)
const q=questions[index]

function next(){
if(selected===q.a) setScore(score+1)
setIndex((index+1)%questions.length)
setSelected(null)
}

return(
<div className="app">
<h1>Maths Mission HQ ✨</h1>
<p>Year 11 Maths Standard revision</p>

<div className="card">
<h2>{q.q}</h2>

{q.options.map(o=>(
<button key={o} className={selected===o?"option selected":"option"} onClick={()=>setSelected(o)}>
{o}
</button>
))}

<button className="next" onClick={next}>Next</button>
</div>

<p className="score">Score: {score}</p>
</div>
)
}
