import { useNavigate } from 'react-router-dom';
import about from '../img/about.svg';

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='main-cont'>
            <div>
            <p className='about-title'>Наше приложение помогает организовать задачи, следить 
             за прогрессом и достигать целей каждый день — легко,
              удобно и без лишнего хаоса.</p>

              <button className='btn-about' onClick={() => navigate(-1)}>перейти к задачам</button>
            </div>
              <img src={about} alt="" />
              </div>
              <div className='main-cont-two'>
                <div>
                <h1 className='title-about'>Наши ценности</h1>
                <p  className='about-about'>Коротко и ясно о том, что делает наше приложение удобным, полезным и <br />
                незаменимым для вашего ежедневного планирования.</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <h1>01.</h1>
                        <h2> Просто и эффективно</h2>
                        <p>Наше приложение объединяет удобство
                        и мощный функционал: создавайте 
                        задачи, отмечайте выполненные и 
                        управляйте своим временем.</p>
                    </div>
               

                <div className='card'>
                        <h1>02.</h1>
                        <h2>Умный трекинг</h2>
                        <p>Система отслеживания помогаетвидеть 
                        прогресс, контролироватьпривычки и
                        структурировать день в одном месте.</p>
                    </div>
              

                
                    <div className='card'>
                        <h1>03.</h1>
                        <h2>Современный дизайн</h2>
                        <p>Интерфейс, который идеально смотрится 
                         и работает на любом устройстве — 
                         понятно, аккуратно и приятно для глаз.</p>
                    </div>
              

              
                    <div className='card'>
                        <h1>04.</h1>
                        <h2>Персональные настройки</h2>
                        <p>Гибкие категории, напоминания и 
                        приоритеты — настройте приложение
                         так, как удобно именно вам.</p>
                    </div>
                </div>

              </div>
        </div>
    );
}

export default AboutPage;