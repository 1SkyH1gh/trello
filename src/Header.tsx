import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './HeaderStyles.module.scss'
export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={styles.header}>
            <p>News</p>
            <p>Account</p>
            <p>Sign out</p>
            <p>Support</p>
            <div>API</div>
        </div>
    )
}