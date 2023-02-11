import BasicModal from '../BasicModal/BasicModal';
import styles from './AddNewTask.module.scss';
import {ChangeEvent, useState} from 'react';
import {Button} from '@mui/material';
import {useAppDispatch} from "../../../Common/hooks/useAppDispatch";
import {addTaskAC} from "../../../App/App-reducer";

type AddNewTaskType = {
    isAddTaskModal: boolean
    setIsAddTaskModal: () => void
}

export const AddNewTask = ({isAddTaskModal, setIsAddTaskModal}: AddNewTaskType) => {
    const dispatch = useAppDispatch();

    const [text, setText] = useState('');

    const addTaskHandler = () => {
        dispatch(addTaskAC(text));
        setIsAddTaskModal();
    };

    const textChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    return (
        <BasicModal isOpen={isAddTaskModal} setIsOpen={setIsAddTaskModal}>
            <div className={styles.text}>Add new task</div>
            <input
                onChange={textChange}
                value={text}
                className={styles.input}
            />
            <div className={styles.button}>
                <Button
                    variant={"contained"}
                    onClick={addTaskHandler}
                >
                    ОК
                </Button>
                <Button
                    variant={"contained"}
                    onClick={setIsAddTaskModal}
                >
                    Отмена
                </Button>
            </div>
        </BasicModal>
    );
};
