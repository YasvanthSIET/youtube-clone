import React from "react";
import hambarger from './assets/hambarger.png';
import logo from './assets/Youtube logo.png';
// import search from './assets/search.png';
import {FaSearch} from 'react-icons/fa';
import mic from './assets/mic.png';
import create from './assets/create.png';
import more from './assets/more.png';
import bell from './assets/bell.png';
import { FaUserAlt } from "react-icons/fa";

import home from './assets/home.png';
import explore from './assets/explore.png';
import shorts from './assets/shorts.png';
import subscription from './assets/subscription.png';
import library from './assets/library.png';
import history from './assets/history.png';
import yourVideos from './assets/your_video.png';
import watchLater from './assets/watch_later.png';
import liked from './assets/liked.png';
import downArrow from './assets/down_arrow.png';

const TopNav = () =>{
    return(
        <header className="container-fluid header">
            <div>
            <span type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><img src={hambarger} alt="hambarger" className="me-3" />
                    </span>
                <img src={logo} alt="logo" className="me-2" />
            </div>
            <div class="search center">
                <form action="">
                    <input type="text" placeholder="Search" />
                    <button><FaSearch/></button>
                </form>
                <img src={mic} alt="mic" className="ms-2"/>
            </div>
            <div className="rightNav">
                <FaSearch id="search-icon"/>
                <img src={create} alt="create" className="ms-1"/>
                <img src={more} alt="more" className="ms-4" />
                <img src={bell} alt="bell" className="ms-4" />
                <FaUserAlt className="ms-4 text-white" />
            </div>

            <div class="offcanvas offcanvas-start bg-secondary" id="demo" >
                <div class="offcanvas-head">
                    <img src={hambarger} alt="hambarger" className="me-3 close" data-bs-dismiss="offcanvas"/>
                    <img src={logo} alt="logo"/>
                </div>
                <div class="offcanvas-body pt-4">
                <ul className="nav d-flex flex-column gap-4">
                <li className="nav-item"><img src={home} alt="home" /><span>Home</span></li>
                <li className="nav-item"><img src={explore} alt="explore" /><span>Explore</span></li>
                <li className="nav-item"><img src={shorts} alt="shorts" /><span>Shorts</span></li>
                <li className="nav-item"><img src={subscription} alt="subscription" /><span>Subscription</span></li>
                <hr />
                <li className="nav-item"><img src={library} alt="library" /><span>Library</span></li>
                <li className="nav-item"><img src={history} alt="history" /><span>History</span></li>
                <li className="nav-item"><img src={yourVideos} alt="yourVideos" /><span>Your videos</span></li>
                <li className="nav-item"><img src={watchLater} alt="watchLater" /><span>Watch later</span></li>
                <li className="nav-item"><img src={liked} alt="liked" /><span>Liked videos</span></li>
                <li className="nav-item"><img src={downArrow} alt="downArrow" /><span>Show more</span></li>
                
            </ul>
                </div>
            </div>
        </header>
    )
}

export default TopNav;