import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './CreateTaskStyles.module.scss'
export interface CreateTaskProps{
title:string
    value:string
    handleChange:(e:any)=>void
    handleClick:()=>void
}

export const CreateTask:FunctionComponent<CreateTaskProps>=(props)=>{
    return(
        <div className={styles.createTask}>
                <div className={styles.title}>{props.title}</div>
            <form className={styles.form}>
                <input className={styles.input} placeholder={"..."} value={props.value} onChange={props.handleChange}/>

            </form>
                <div className={styles.button} onClick={props.handleClick}>Create!</div>



        </div>
    )
}