import * as React from 'react'
import {FunctionComponent, useState} from "react";
import styles from './MinitaskStyles.module.scss'
export interface VerifieldProps{

}
export const verifieldConst="✓";
export const Verifield:FunctionComponent<VerifieldProps>=(props)=>{
const [verifield,setVerifield]=useState()
    return(
        <div className={styles.verifield} onClick={()=>setVerifield(true)}>
            {
                verifield?verifieldConst:""
            }
        </div>
    )
}