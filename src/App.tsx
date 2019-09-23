import React from 'react';
import {CreateTask} from "./CreateTask";
import {Task} from "./Task";
import {Header} from "./Header";
import styles from './AppStyles.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <Header/>
      <CreateTask title={"Create your first task!"}/>
      <Task/>
    </div>
  );
}

export default App;
