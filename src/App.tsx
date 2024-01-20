import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './components/Site.module.css'
import { NavLink } from 'react-router-dom';
import { S } from './components/pages/__styles';
import { useWindowSize } from './components/helpers/useWindowSize';


function App() {
    const navigate = useNavigate()

    const comBackHandler = () => {
        navigate(-1)
    }

    const mainPageHandler = () => {
        navigate('/page/0')
    }

    // Хук для бургера
    // const [burger, setBurger] = useState(false)

    const windowSize = useWindowSize()
    console.log(windowSize)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {/* {burger */}
                {windowSize < 1000
                    ? <div></div>
                    : <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>ProtectedPage</NavLink></S.NavWrapper>
                        <div><a href="/page1">aHrefPage1</a></div>
                    </div>
                }

                <div className={styles.content}>
                    <button onClick={comBackHandler}>Назад</button>
                    <button onClick={mainPageHandler}>Главная</button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}


export default App;
