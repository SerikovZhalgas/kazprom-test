import BasicModal from '../BasicModal/BasicModal';
import styles from './DeleteTask.module.scss';
import {Button} from '@mui/material';
import {useAppDispatch} from "../../../Common/hooks/useAppDispatch";
import {deleteTaskAC} from "../../../App/App-reducer";

type AddNewTaskType = {
    isDeleteTaskModal: boolean
    setIsDeleteTaskModal: () => void
}

export const DeleteTask = ({isDeleteTaskModal, setIsDeleteTaskModal}: AddNewTaskType) => {
    const dispatch = useAppDispatch();

    const addTaskHandler = () => {
        dispatch(deleteTaskAC());
        setIsDeleteTaskModal()
    };

    return (
        <BasicModal isOpen={isDeleteTaskModal} setIsOpen={setIsDeleteTaskModal}>
            <div className={styles.text}>Удалить выбранные элементы списка?</div>
            <div className={styles.button}>
                <Button
                    variant={"contained"}
                    onClick={addTaskHandler}
                >
                    Да
                </Button>
                <Button
                    variant={"contained"}
                    onClick={setIsDeleteTaskModal}
                >
                    Нет
                </Button>
            </div>
        </BasicModal>
    );
};
