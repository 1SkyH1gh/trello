import * as React from 'react'
import {FunctionComponent} from "react";
import {Verifield} from "./Verifield";
import styles from './MinitaskStyles.module.scss'
import {useState} from "react";
export interface MinitaskProps {
    task: string,


}
export const Minitask:FunctionComponent<MinitaskProps>=(props)=>{
    const [verifield,setVerifield]=useState()
    return(
        <div className={styles.minitask}>
            <Verifield />
            <span className={styles.task}>{props.task}</span>
        </div>
    )
}