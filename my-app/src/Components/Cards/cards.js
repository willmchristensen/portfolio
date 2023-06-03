import './cards.css'
import { useState } from 'react';

const Cards = () => {
    const [sideBar, showSideBar] = useState(true);
    const handleClick = () => {
        showSideBar(!sideBar)
    }
    const dynamicSideBar = sideBar ? 'sidebar' : 'hidden-button';
    const button = sideBar ? 'hidden-button' : 'not-hidden-button';
    return (
        <div className="cards-container">

            {/* <div className={dynamicSideBar}> */}
                {/* <div className="sidebar-item">
                    <span>item</span>
                </div> */}
            {/* </div> */}
            <div        className="button-container">
                    <button
                        className="imadome"
                        onClick={handleClick}
                    >
                        <i class="fas fa-yin-yang"></i>
                    </button>
            </div>
            <div className="card">
                    <div className="img">
                        <span>image here</span>
                    </div>
                    <div className="card-content">
                        <h1>card</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
            </div>
            <div className="card negative">
                <div className="card-face-section">

                </div>
                <div className="card-face-section">

                </div>
                <div className="card-face-section">

                </div>
                <div className="card-face-section">

                </div>
            </div>
            {/* <div className="button-container">
                <button
                    className={button}
                    onClick={handleClick}
                >
                    <i class="fas fa-yin-yang"></i>
                </button>
            </div> */}
        </div>
    )
}

export default Cards;
