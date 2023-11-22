import React from "react";
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
import ellipse1 from './assets/ellipse1.png'
import ellipse2 from './assets/ellipse2.png';
import ellipse3 from './assets/ellipse3.png';
import ellipse4 from './assets/ellipse4.png';
import ellipse5 from './assets/ellipse5.png';
import ellipse6 from './assets/ellipse6.png';
import ellipse7 from './assets/ellipse7.png';
import ellipse8 from './assets/ellipse8.png';
import ellipse9 from './assets/ellipse9.png';
import ellipse10 from './assets/ellipse10.png';
import ellipse11 from './assets/ellipse11.png';
import ellipse13 from './assets/ellipse13.png';
import ellipse14 from './assets/ellipse14.png';


import thumbnail1 from './assets/Thumbnail-1.png';
import thumbnail2 from './assets/Thumbnail-2.png';
import thumbnail3 from './assets/Thumbnail-3.png';
import thumbnail4 from './assets/Thumbnail-4.png';
import thumbnail5 from './assets/Thumbnail-5.png';
import thumbnail6 from './assets/Thumbnail-6.png';
import thumbnail7 from './assets/Thumbnail-7.png';
import thumbnail8 from './assets/Thumbnail-8.png';
import thumbnail9 from './assets/Thumbnail-9.png';
import thumbnail10 from './assets/Thumbnail-10.png';
import thumbnail11 from './assets/Thumbnail-11.png';
import thumbnail12 from './assets/Thumbnail-12.png';

const Body = () => {
    return(
        <main>
            <div className="side-nav">
                <ul className="nav my-2">
                    <li className="nav-link active"><img src={home} alt="home" /><span>Home</span></li>
                    <li className="nav-link"><img src={explore} alt="explore" /><span>Explore</span></li>
                    <li className="nav-link"><img src={shorts} alt="shorts" /><span>Shorts</span></li>
                    <li className="nav-link"><img src={subscription} alt="subscription" /><span>Subscription</span></li>
                    <hr />
                    <li className="nav-link"><img src={library} alt="library" /><span>Library</span></li>
                    <li className="nav-link"><img src={history} alt="history" /><span>History</span></li>
                    <li className="nav-link"><img src={yourVideos} alt="yourVideos" /><span>Your Videos</span></li>
                    <li className="nav-link"><img src={watchLater} alt="watchLater" /><span>Watch Later</span></li>
                    <li className="nav-link"><img src={liked} alt="liked" /><span>Liked videos</span></li>
                    <li className="nav-link"><img src={downArrow} alt="downArrow" /><span>Show more</span></li>
                    <div className="sub">
                        <hr />
                        <small className="text-uppercase text-white ps-2 mb-2">subcriptions</small>
                        <li className="nav-link"><img src={ellipse7} alt="ellipse7" /><span>Nadir On The Go</span></li>
                        <li className="nav-link"><img src={ellipse1} alt="ellipse1" /><span>Coke Studio Bangla</span></li>
                        <li className="nav-link"><img src={ellipse2} alt="ellipse2" /><span>MKBHD</span></li>
                        <li className="nav-link"><img src={ellipse3} alt="ellipse3" /><span>Figma</span></li>
                        <li className="nav-link"><img src={ellipse4} alt="ellipse4" /><span>ATC Android ToTo</span></li>
                        <li className="nav-link"><img src={ellipse5} alt="ellipse5" /><span>Alux.com</span></li>
                    </div>
                </ul>
            </div>
            <div className="content">
                <div class="videos">
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail4} alt="thumbnail4" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse11} alt="ellipse11" />
                            </div>
                            <div class="title">
                                <h3>
                                    UX Design-What is it?(from AJ & smart) 
                                </h3>
                                <a href="#">AJ&smart</a>
                                <span> 15M Views • 3 Years Ago </span>
                            </div>
                        </div>
                    </div>           
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail6} alt="thumbnail6" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse7} alt="ellipse7" />
                            </div>
                            <div class="title">
                                <h3>
                                    Travel anywhere | 48-visa free
                                </h3>
                                <a href="#">Nadir On The Go</a>
                                <span> 1.7M Views • 3 Months Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail7} alt="thumbnail7" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse13} alt="ellipse13" />
                            </div>
                            <div class="title">
                                <h3>
                                    14 Advanced Tips to Design Faster in Figma
                                </h3>
                                <a href="#">Mizko</a>
                                <span> 53K Views • 1 year Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail8} alt="thumbnail8" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse8} alt="ellipse8" />
                            </div>
                            <div class="title">
                                <h3>
                                    Bulbuli | Coke Studio Bangla | Season 1 | Rituraj x Nandhita
                                </h3>
                                <a href="#">Coke Studio Bangla</a>
                                <span> 1.5M Views • 2 days Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail9} alt="thumbnail9" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse9} alt="ellipse9" />
                            </div>
                            <div class="title">
                                <h3>
                                    INFINIX Note 12 pro | AMOLED | Helio G88 Processor
                                </h3>
                                <a href="#">ATC Android ToTo company</a>
                                <span> 45 Views • 3 days Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail10} alt="thumbnail10" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse10} alt="ellipse10" />
                            </div>
                            <div class="title">
                                <h3>
                                    My First UX Design case study | My first Job
                                </h3>
                                <a href="#">aptarshi Prakash</a>
                                <span> 4.8K Views • 1 year Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail11} alt="thumbnail11" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse14} alt="ellipse14" />
                            </div>
                            <div class="title">
                                <h3>
                                    My MIX
                                </h3>
                                <a href="#">Lopamudhra Mithra, Anupam Roy and more</a>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail5} alt="thumbnail5" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse14} alt="ellipse14" />
                            </div>
                            <div class="title">
                                <h3>
                                    Mix - Mombati | Mohan Serif | Dhakaiya Dose | Mahib Ashan ft Anifa
                                </h3>
                                <a href="#">Mohan Serif, Odd Signature, Shayan Chowdry Amob and more</a>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail1} alt="thumbnail1" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse5} alt="ellipse5" />
                            </div>
                            <div class="title">
                                <h3>
                                    Top Tech Skills You'll Need to Thrive in the Future Workforce
                                </h3>
                                <a href="#">Tiff in Tech</a>
                                <span> 2M Views • 4 Months Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail2} alt="thumbnail2" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse2} alt="ellipse2" />
                            </div>
                            <div class="title">
                                <h3>
                                    Day in a life at Google
                                </h3>
                                <a href="#">Rishab Kumar</a>
                                <span> 1M Views • 3 years Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail3} alt="thumbnail3" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse3} alt="" />
                            </div>
                            <div class="title">
                                <h3>
                                    What is Microsoft - Explained
                                </h3>
                                <a href="#">Kevin Startvert</a>
                                <span> 897K Views • 9 Months Ago </span>
                            </div>
                        </div>
                    </div>
                    <div class="video">
                        <div class="thumbnail">
                            <img src={thumbnail12} alt="thumbnail12" />
                        </div>
                        <div class="details">
                            <div class="author">
                                <img src={ellipse6} alt="ellipse6" />
                            </div>
                            <div class="title">
                                <h3>
                                    Incredible Gobi Desert Tour, Mongolia | DJI Mavic Pro
                                </h3>
                                <a href="#">Drink Tea & Travel</a>
                                <span> 94K Views • 6 years Ago </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body;