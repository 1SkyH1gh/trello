import React, {useState} from 'react';
import {CreateTask} from "./CreateTask";
import {Task} from "./Task";
import {Header} from "./Header";
import {createStore} from 'redux'
import styles from './AppStyles.module.scss'
import {taskValueReducer} from "./Redux";

export let store=createStore(taskValueReducer)

const App: React.FC = () => {

    const [value,setValue]=useState('')
    localStorage.setItem("posts",value)
const store=localStorage.getItem('posts');
const arrStore=[store]
    const [click,setClick]=useState()
console.log(arrStore)
  return (
    <div className={styles.app}>
        <Header/>
      <CreateTask title={"Create your first task!"}
                  value={click?"":value}
                  handleChange={(e)=>setValue(e.target.value)}
                  handleClick={()=>setClick(true)}/>
        {
            click?arrStore.map(data=>
            <Task task={data}/>
            ):""
        }

    </div>
  );
}

export default App;
