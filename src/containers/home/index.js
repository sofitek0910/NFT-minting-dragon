import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div>
    <nav class="navbar container-fluid p-4 wow fadeInDown">
        <a href="">
            <div class="navbar_logo float-left main-grey">
                <img class="logo-jocker" src="./assets/images/dragon_logo5.png"/> Dragon
            </div>
        </a>
        <div className="justify"><i class="fa fa-align-justify d-none"></i></div>
        <div class="float-right navbar_right">
            <button class="navbar_button btn mr-5 d-inline-block">CONNECT WALLET</button>
        </div>
    </nav>
    <section class="py-3">
        <div class="row mx-0 px-0">
            <div class="col-md-7 d-flex align-items-center">
                <div class="pl-md-3">
                    <div class="pb-md-3 wow fadeInUp">
                        <span class="font_default">The First community Coin With Real Projects</span>
                    </div>
                    <div class="py-xl-5 py-md-3 py-2  wow fadeInUp ">
                        <span class="font_bgdefault line-height-15">ABOUT THE</span> &nbsp;&nbsp;&nbsp;<span class="font_bgundefault line-height-15">JOCKERCOIN</span>
                    </div>
                    <div class="pt-md-3  wow fadeInUp">
                        <span class="font_general line-height-18">
                            Joker is a coin created by a development team of 16 people who are behind the creation of an e-game peer-to-peer card game called JokerBank. Joker is based on a community of people, but unlike regular fun coins, the Joker has a clear purpose and vision.
                        </span>
                    </div>
                    <div class="col-12 text-center wow zoomInUp">
                        <button class="mint_button btn mt-5">MINT</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="slide-container my-5">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="./assets/media/character1.jpeg" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="./assets/media/character2.jpeg" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="./assets/media/character3.jpeg" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="./assets/media/character4.jpeg" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="./assets/media/character5.jpeg" alt=""/>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
    <div class="col-12 text-center d-flex justify-content-center">
        <span class="roadmap_title wow fadeInUp">The ROADMAP</span>
    </div>
    <section class="roadmap pb-5">
        <div class="roadmap_title_back"></div>
        <div class="top_one container-fluid mt-5 roadmap-padding">
            <div class="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div class="col-md-8">
                    <div class="row rounded roadmap_round py-4">
                        <div class="col-md-1 col-2 d-inline dot_data p-0">
                            <span class="dot"></span>
                        </div>
                        <div class="col-md-11 col-10 d-inline mt-4">
                            <div class="">
                                <span class="top_title_num roadmap_font"> </span><span class="top_title">Q1</span>
                            </div>
                            <div class="top_data">
                              <div>1. The first implementation of the Joker IRL – functional colaborations with first providers in the central Europe.</div>
                              <div> 2. Offline marketing in Europe, online marketing in the whole world </div>
                              <div> 3. Announcement of the visions and functions of the app </div>
                              <div>4. TBA collaboration 3 </div>
                              <div>5. The full version of the second game (TBA)</div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img class="w-75 pc" src="./assets/images/main/Community1.png"/>
                    <img class="w-50 sp mt-3" src="./assets/images/main/Community1.png"/>
                </div>
            </div>
            <div class="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div class="col-md-7">
                    <div class="row rounded roadmap_round py-4">
                        <div class="col-md-1 col-2 d-inline dot_data p-0">
                            <span class="dot"></span>
                        </div>
                        <div class="col-md-11 col-10 d-inline mt-4">
                            <div class="">
                                <span class="top_title_num roadmap_font"></span><span class="top_title">Q2</span>
                            </div>
                            <div class="top_data">
                                <div>1. Closed - Beta app version </div>
                                <div>2. Introducing of the JokerCam (implementation of JokerCoin, anonymity, creators support, ...)</div>
                                <div>3. Implementation of the coin into the leisure time - adults life ( events, massages, …)</div>
                                <div>4. The third game announcement (TBA)</div>
                                <div>5. Extension from the Central Europe to the whole of Europe (ambassadors, collaborations with companies - setting up a team in all the countries, telegram of the group)</div>
                                <div> 6. Fork of the Joker Coin on another coin – all the holders get a new coin</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex align-items-center justify-content-center">
                    <img class="w-75 pc" src="./assets/images/main/Charity1.png"/>
                    <img class="w-50 sp mt-3" src="./assets/images/main/Charity1.png"/>
                </div>
            </div>
            <div class="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div class="col-md-8">
                    <div class="row rounded roadmap_round py-4">
                        <div class="col-md-1 col-2 d-inline dot_data p-0">
                            <span class="dot"></span>
                        </div>
                        <div class="col-md-11 col-10 d-inline mt-4">
                            <div class="">
                                <span class="top_title_num roadmap_font"> </span><span class="top_title">Q3</span>
                            </div>
                            <div class="top_data">
                              <div>1. Beta version of JokerCam</div>
                              <div>2. Launch of focus on the connection to the IRL monetary system</div>
                              <div>3. The annual anniversary of JokerCoin - spectacular giveaway</div>
                              <div>4. Beta version of the third game (TBA)</div>
                              <div>5. The annual recapitulation and the start of a global campaign with results so far</div>
                              <div>6. Open - beta app</div>
                              <div>7. Partner implementation from the whole Europe</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img class="w-75 pc" src="./assets/images/main/Diamond1.png"/>
                    <img class="w-75 sp mt-3" src="./assets/images/main/Diamond1.png"/>
                </div>
            </div>
            <div class="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div class="col-md-8">
                    <div class="row rounded roadmap_round py-4">
                        <div class="col-md-1 col-2 d-inline dot_data p-0">
                            <span class="dot"></span>
                        </div>
                        <div class="col-md-11 col-10 d-inline mt-4">
                            <div class="">
                                <span class="top_title_num roadmap_font"></span><span class="top_title">Q4</span>
                            </div>
                            <div class="top_data">
                                <div>1. The full version of JokerCam </div>
                                <div>2. The full version of Joker App </div>
                                <div>3. Announcement of the fourth game (TBA) </div>
                                <div>4. Pornstar influencer marketing </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/main/Future1.png" class="w-75 pc"/>
                    <img src="./assets/images/main/Future1.png" class="w-50 sp mt-3"/>
                </div>
            </div>
        </div>
    </section>
    <section class="common mt-5 container-fluid p-0 position-relative">
        <div class="common_title justify-content-center wow zoomInUp">
            Coming soon
        </div>
        <div class="wow zoomInUp d-flex justify-content-center common_subtitle" >
            <div class="mt-2 d-flex align-items-center justify-content-center">
                THE ANTIWHALE SYSTEM TO PROTECT OUR HOLDERS!
                <img src="./assets/media/jocker_coin2.jpg" class="ml-4 em-image"/>
            </div>
        </div>
        <div class="common_back mt-5 pt-md-5">
            <div class=" mx-0 mt-5 pt-md-5 align-items-end d-flex">
                <div class="p-0 bot-one">
                    <img src="./assets/media/road1.png" class="w-100 wow fadeInRight" data-wow-delay="1.6s"/>
                </div>
                <div class="p-0 bot-two">
                    <img src="./assets/media/road2.jpg" class="w-100 wow fadeInRight" data-wow-delay="0.5s"/>
                </div>
                <div class="px-2 bot-three">
                    <img src="./assets/media/road3.jpg" class="w-100 wow fadeInLeft" data-wow-delay="0.3s"/>
                </div>
                <div class="bot-four">
                    <img src="./assets/media/road4.jpg" class="w-100 wow fadeInRight" data-wow-delay="0.3s"/>                    
                </div>
                <div class="px-1 bot-five">
                    <img src="./assets/media/road5.jpg" class="w-100 wow fadeInLeft" data-wow-delay="1.4s"/>
                </div>
                <div class="p-0 bot-six">
                    <img src="./assets/media/road6.png" class="w-100 wow fadeInLeft" data-wow-delay="1s"/>
                </div>
            </div>
        </div>
        <img class="common_bg_image" src="./assets/images/add_images/background.png" alt=""/>
    </section>


    <section class="container-fluid meet-section add-padding mt-5 mb-5 pt-5">
        <div class="common_title col-12 justify-content-center wow fadeInUp">
            The Team
        </div>
        <div class="mt-5">
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dep_alessandro.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        CEO Alessandro
                    </h2>
                    <p class="rubik-font">
                        The visionary and also the mediator of the Joker’s will. A cryptocurrencies enthusiast since 2015. He entered the IT world as a designer and a visionary of lottery and gambling games.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dep_tom.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Tom
                    </h2>
                    <p class="rubik-font">
                        Young baron of crypto. He takes care of designing functions and features in our contract and later will help with designing the dapps and implementing them to our platforms. Also core member of marketing team and social networks freak.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dep_robert.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Robert
                    </h2>
                    <p class="rubik-font">
                        One the first persons involved in development of JokerBank. His focus is mostly on lottery and card games, but dont be scared, he is not a gambler, but only developer.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dev_pavel.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Pavel
                    </h2>
                    <p class="rubik-font">
                        guru and maniac in the binary world, programmer
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dev_ales.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Ales
                    </h2>
                    <p class="rubik-font">
                        genius of game models and combinations, programmer
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dev_jan.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Jan
                    </h2>
                    <p class="rubik-font">
                        input/output superhero, communication, servers, multiplayer, programmer
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mt-4">
                    <img class="w-100 wow slideInLeft" src="./assets/media/prt_dev_johny.png" alt=""/>
                </div>
                <div class="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 class="rubik-font">
                        Johny
                    </h2>
                    <p class="rubik-font">
                        data specialist and conceptual engineer, database and API, star of nervous system
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-qa">
        <div class="title">
            <h2 class="text-center text-white wow fadeInUp">Frequently asked questions</h2>
        </div>
        <div class="content container-fluid mt-md-5 mt-4 footer-padding">
            <div class="mt-3 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Is the team doxed?</h1>
                </button>
                <div class="panel">
                    <p>Yes, at the moment we have made the “soft doxx”, but we are looking to make full doxx in the future. 
                        Actually there are revealed the main persons of the team, since we have still 16+ members of team.</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">What is Joker? What is Joker and JokerCoin about??</h1>
                </button>
                <div class="panel">
                    <p>Joker is about the building the community on base ground of real product which are games, merch, app and NFT. JokerCoin is cryptocurrency 
                        based on BNB smart chain with special features to support our community and products</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">How do I get the JokerCoins?</h1>
                </button>
                <div class="panel">
                    <p>You can get JokerCoin on pancakeswap and other DEXes which will be listed soon!</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Are there any fees?</h1>
                </button>
                <div class="panel">
                    <p>Jokercoin applies 12% fees which are fully described in the fifth page “LOTTERY”</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">What is JokerCoin lottery system?</h1>
                </button>
                <div class="panel">
                    <p>Unique algorithm system that rewards Jokercoin buyers. For more information please check the fifth page LOTTERY or WHITEPAPER.</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Will be JokerCoin listed on any centralized exchanges? (CEX)</h1>
                </button>
                <div class="panel">
                    <p>Jokers plan is to be seen everywhere! As soon as there will be an opportunity, he will take it.</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Is there a stacking feature?</h1>
                </button>
                <div class="panel">
                    <p>Yes, JokerCoin coin applies 5% sell fee which is redistributed among all holders. The more you own, the more you get.</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">What about the other games?</h1>
                </button>
                <div class="panel">
                    <p>The JokerBank game is already in beta-verse and 95% working. Right now we are starting to focus on the second game, 
                        which is going to be announced very soon and hopefully during this year you guys will be able to play the beta verse. 
                        Of course we have many more ideas, but we are not here to make easy trash game with no idea like the 
                        others do. We are here to develop new and professional projects with huge potential. Stay tuned!</p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Where are you heading? What is your goal?
                    </h1>
                </button>
                <div class="panel">
                    <p>Our goal is specified in our White Paper. Simply, it is about building the community
                        based on the Jokers lifestyle, which includes card games, nightlife, sex, guns and many more entertaining things!
                    </p>
                </div>
            </div>
            <div class="mt-4 accordion-container footer_round">
                <button class="accordion py-2">
                    <h1 class="footer-font">Can you add more FAQ from community?</h1>
                </button>
                <div class="panel">
                    <p>Sure, in case of any unanswered question please contact hello@jokercoin.live.</p>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-5">
                <a href="">
                    <img class="social_footer_image" src="./assets/images/twitter_white_icon.png" alt=""/>
                </a>
                <a href="">
                    <img class="social_footer_image" src="./assets/images/discord_white_icon.png" alt=""/>
                </a>
            </div>
        </div>
    </section>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
