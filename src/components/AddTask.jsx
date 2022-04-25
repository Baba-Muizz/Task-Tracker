import React from 'react'
import { useState } from "react"
import AddTaskCSS from '../App.module.css';

function AddTask({onAdd}) {

    const [text, setText] = useState(' ')
    const [day, setDay] = useState(' ')
    const [reminder, setReminder] = useState('false ')

    const onSubmit =(e)=>{
     e.preventDefault()

     if (!text) {
        alert ('Please add a task')
        return

     }
     onAdd ({text,day,reminder})
     setText('')
     setDay('')
     setReminder(false)

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
    <div className="form-control">
        <label htmlFor="Task"   className={AddTaskCSS.blue} >Task</label>
        <input type="text" 
        value={text} 
        onChange ={(e)=> setText(e.target.value)}
        placeholder="Add Task"/>
    </div>
    <div className="form-control">

        <label 
        htmlFor="Day and Time"
        className={AddTaskCSS.blue}>Day and Time
        </label>

        <input type="text" 
         value={day} 
         onChange ={(e)=> setDay(e.target.value)}
         placeholder="Add Day and Time"/>
    </div>
    <div className="form-control form-control-check">
        <label htmlFor="Set Reminder" >Set Reminder</label>
        <input 
        type="checkbox"
        value={reminder} 
        checked={reminder }
        onChange ={(e)=> setReminder(e.currentTarget.checked)}  />
    </div>

    <input type="submit" className="btn btn-block" value="Save Task" name="" id="submit" />
  </form>
  )
}

export default AddTask
