import React from 'react';
import Header from './header/Header';
// import MineSwiper from './mineswiper/MineSwiper';
import Server from './server/server';
import More from './more/More';
import Tabbar from '../common/tabBar/index'
import index from './index.css'
import MineSwiper from './MineSwiper/MineSwiper';
import QuitButton from './quitbutton/QuitButton'

function Mine() {
    return (
        <div className="mine">
            <Header />
            <MineSwiper />
            <Server />
            <More />
            <Tabbar />
            <QuitButton />
        </div>

    )
}

export default Mine;