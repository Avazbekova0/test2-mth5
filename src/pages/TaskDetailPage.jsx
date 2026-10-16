import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation} from 'react-router-dom';
import bin from '../img/bin.svg';
import edit from '../img/edit.svg';
import { toast } from 'react-toastify';

const TaskDetailPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, useData] = useState(null);
    console.log(id);
    const index = useLocation().state?.index;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);

        const updateTask = () => {
        axios.patch(`http://localhost:5000/tasks/${id}`, {
            title,
            description,
            status
        })
        .then((response) => {
            useData(response.data);
            setIsEditing(false);
            toast.success('Задача успешно обновлена!');
        })
        .catch(() => {
            toast.error('Не удалось обновить задачу!');
        });
    };


        useEffect(() => {
        axios.get(`http://localhost:5000/tasks/${id}`)
            .then((response) => {
                useData(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setStatus(response.data.status);
            })
            .catch((e) => console.log(e));
        }, [id]);

        const deleteDetail = () => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
        .then(() => {
            navigate('/');
        })
        .catch((e) => console.log(e));
    };


    if (!data) {
        return <div>Загрузка...</div>;
    }

    
    return (
        <div className="container detail_cont">
            <div className="card-detail">
                <button
                    className="btn-detail"  
                    onClick={() => navigate(-1)}>
                    ← Назад</button>

                {isEditing ? (
                    <div className="edit-form">
                        <input className='input-cont'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Название задачи"/>
                        

                        <input className='input-cont'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Описание задачи"/>
                        
                        
                        <input
                            type="checkbox"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                            />Выполнено

                        <div className="delete-detail">
                        <button onClick={updateTask} className="normal"
                        >Сохранить</button>

                        <button onClick={() => setIsEditing(false)} 
                        className="high">Отмена</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="task-detail-header">
                            <span className="title-detail">
                                №{String(index ?? 1)} {data.title}
                            </span>

                            <span className={`priority-detail ${data.priority?.toLowerCase()}`}>
                                {data.priority}
                            </span>
                        </div>

                        <p className="des-detail">{data.description}</p>

                        <p>Статус: {data.status ? 'Выполнено' : 'В процессе'}</p>

                        <div className="delete-detail">
                            <button
                                className="delete-detail"
                                onClick={deleteDetail}>
                                <img src={bin} alt="" />
                            </button>

                            <button
                                className="edit-detail"
                                onClick={() => setIsEditing(true)}>
                                <img src={edit} alt="" />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskDetailPage;
