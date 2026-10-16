import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function TaskCard({ tasks, getTasks }) {
    const navigate = useNavigate();

    const deleteTasks = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
        .then(() => {
            toast.info('Задача удалена!');
            getTasks();
        })
        .catch(() => {
            toast.error('Не удалось удалить задачу!');
        });
    };

    return (
        <div className='taskcard-cont'>
            {tasks?.map((task, index) => (
                <div className='list-cont' key={task.id}>

                    <div className={`priority    
                        ${task.priority?.toLowerCase()}`}
                        >{task.priority}</div>

                    <h4 className='title-cont'>
                        №{index + 1}  {task.title}
                    </h4>

                    <p>{task.description.split(' ').length > 15
                        ? task.description.split(' ')
                        .slice(0, 15).join(' ') + '...'
                        : task.description}</p>

                    <div className="taskcard-buttons">
                    <button className='taskcard-btn' onClick={() =>
                             deleteTasks(task.id)}>
                        Удалить</button>

                    <button className='taskcard-btn' onClick={() =>
                            navigate(`/tasks/${task.id}`)}>
                        Подробнее</button>
                    </div>
                </div>
            ))}
        </div>
    );
}