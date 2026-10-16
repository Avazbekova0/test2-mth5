
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/App.css';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState('all');

    const getTasks = () => {
        axios.get('http://localhost:5000/tasks')
            .then(({ data }) => setTask(data))
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getTasks();
    }, []);

    const filteredTasks = task.filter((item) => {
        if (filter === 'active') return item.status === false;
        if (filter === 'completed') return item.status === true;

        return true;
    });

    return (
        <>
            <TaskForm getTasks={getTasks} />

            <div className="container filter-cont">
                <h1 className="title">Список задач</h1>

                <select
                    id="status-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-select"
                >
                    <option value="all">Все</option>
                    <option value="active">Активные</option>
                    <option value="completed">Выполненные</option>
                </select>
            </div>

            <TaskCard
                tasks={filteredTasks}
                getTasks={getTasks}
            />

            <ToastContainer />
        </>
    );
};

export default HomePage;
