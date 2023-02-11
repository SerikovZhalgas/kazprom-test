import React, {ChangeEvent, memo, useCallback} from 'react';
import {Checkbox} from "@mui/material";
import styles from './Task.module.scss';
import {useAppDispatch} from "../../Common/hooks/useAppDispatch";
import {TaskType, updateTaskStatusAC} from "../../App/App-reducer";

export const Task = memo(({taskId, text, taskCheck}:TaskType) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = useCallback(() => {
        dispatch(updateTaskStatusAC(taskId))
    }, [taskId])

    return (
        <div className={styles.taskContainer}>
            <span>{text}</span>
            <Checkbox
                checked={taskCheck}
                color="primary"
                onChange={onChangeHandler}
            />
        </div>
    );
})