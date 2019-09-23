import * as React from 'react'
import {FunctionComponent, useState} from "react";
import styles from './TaskStyles.module.scss'
import {Verifield} from "./Verifield";
import {Minitask} from "./Minitask";
export interface TaskProps {

}

export const Task:FunctionComponent<TaskProps>=()=>{

    return(
        <div className={styles.task}>

            <div className={styles.Data}>TaskName</div>
            <div className={styles.createDate}>
                18.02.1999
            </div>
            <div className={styles.deadline}>23.05.2019</div>
            <div className={styles.minitask}>
              <Minitask task={"go walk"} />
                <Minitask task={"go walk"} />
                <Minitask task={"go walk"} />

            </div>

        </div>
    )
}