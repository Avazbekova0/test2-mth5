import * as yup from 'yup';

export const api = yup.object({
    title: yup.string()
    .required('*Укажите название')
    .min(10, 'Введите больше 10 символов')
    .max(225,'Максимальное значение 225 символов'),
    description: yup.string()
    .required('*Укажите описание')
    .min(10, 'Введите больше 10 символов')
    .max(225,'Максимальное значение 225 символов'),
    priority: yup.string()
    .required('*Укажите приоритет')
})