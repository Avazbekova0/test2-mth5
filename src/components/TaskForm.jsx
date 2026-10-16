import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export default function TaskForm({ getTasks }) {
    const { handleSubmit, register, reset, 
        formState: {errors} } = useForm
        ({resolver: yupResolver(api)});
    

    const postTasks = (data) => {
        axios.post('http://localhost:5000/tasks', {
        ...data,
        status: false
        })
            .then(() => {
                getTasks();
                toast.success('Task created successfully!');
                reset();
            })
            .catch((e) => {
                console.log(e);
                toast.error('Error, something went wrong!');
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(postTasks)}>
                <h1 className="title">Задачи</h1>
                <h1 className="title">Форма добавления</h1>
                <div className='taskform-cont'>
                <div>
                <input
                    className="input-cont"
                    type="text"
                    placeholder="Название"
                    {...register('title')}/>
                    {errors?.title && (<p className='error-cont'>{errors?.title?.message}</p>)}
                </div>

                <div>
                <input
                    className="input-cont "
                    type="text"
                    placeholder="Описание"
                    {...register('description')}/>
                    {errors?.description && (<p className='error-cont'>{errors?.description?.message}</p>)}
                </div>

                <div>
                <div className='input-radio'>
                <label>Приоритет</label>

                <label className='normal'>
                    <input
                        type="radio"
                        value="Normal"
                        {...register('priority')}
                    />
                    Normal
                </label>

                <label className='middle'>
                    <input
                        type="radio"
                        value="Middle"
                        {...register('priority')}
                    />
                    Middle
                </label>

                <label className='high'>
                    <input 
                        type="radio"
                        value="High"
                        {...register('priority')}
                    />
                    High
                </label>
                </div>
                {errors?.priority && (<p className='error-cont'>{errors?.priority?.message}</p>)}
                </div>

                </div>
                <button className="btn-cont" type="submit">
                    Создать задачу
                </button>
            </form>
        </div>
    );
}