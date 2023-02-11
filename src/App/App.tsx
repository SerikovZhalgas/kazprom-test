import React, {useState} from 'react';
import styles from './App.module.scss';
import {AppBar, Button, IconButton, Paper, Toolbar} from "@mui/material";
import {Task} from "../Pages/Task/Task";
import {useAppSelector} from "../Common/hooks/useAppSelector";
import {AddNewTask} from "../Components/Modal/AddNewTask/AddNewTask";
import {DeleteTask} from "../Components/Modal/DeleteTask/DeleteTask";
import logo from '../Common/img/logo.jpg'

export const App = () => {
    const tasks = useAppSelector(state => state.app.tasks)

    const [isAddTaskModal, setIsAddTaskModal] = useState(false);
    const [isDeleteTaskModal, setIsDeleteTaskModal] = useState(false);
    const [error, setError] = useState('');

    const onClickAddTaskModal = () => {
        setIsAddTaskModal(!isAddTaskModal)
    }
    const onClickDeleteTaskModal = () => {
        setError('')
        const checked = tasks.filter(t => t.taskCheck)
        if (!checked.length) return setError('Для удаления требуется выбрать элемент списка!')
        setIsDeleteTaskModal(!isDeleteTaskModal)
    }

    return (
        <div className={styles.appContainer}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={logo} alt="Logo"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {
                tasks.length ? <div>
                        <Paper style={{padding: '15px'}}>
                            {tasks.map(t => <Task key={t.taskId} taskId={t.taskId} text={t.text} taskCheck={t.taskCheck}/>)}
                        </Paper>
                    </div>
                    : ''
            }
            <div className={styles.buttonContainer}>
                <Button variant="contained">Тест GraphQL</Button>
                <Button variant="contained" onClick={onClickAddTaskModal}>Добавить</Button>
                {tasks.length ? <Button variant="contained" onClick={onClickDeleteTaskModal}>Удалить</Button> : ''}
            </div>
            {error && <div className={styles.error}>{error}</div>}
            {isAddTaskModal && (
                <AddNewTask isAddTaskModal={isAddTaskModal} setIsAddTaskModal={onClickAddTaskModal}/>
            )}
            {isDeleteTaskModal && (
                <DeleteTask isDeleteTaskModal={isDeleteTaskModal} setIsDeleteTaskModal={onClickDeleteTaskModal}/>
            )}
        </div>
    );
}