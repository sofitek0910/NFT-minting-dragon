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
    <section className="pb-500 main-back">
        <nav className="navbar container-fluid p-4 wow fadeInDown">
            <a href="">
                <div className="navbar_logo float-left main-grey">
                    <img className="logo-jocker" src="./assets/images/design_logo6.png"/> Dragon
                </div>
            </a>
            <div className="justify"><i className="fa fa-align-justify d-none"></i></div>
            <div className="float-right navbar_right">
                <button className="navbar_button btn mr-5 d-inline-block">CONNECT WALLET</button>
            </div>
        </nav>
        <div className="ad-text-block text-center">
            <div className="ad-text1">10,000 Unique Dragons</div>
            <div className="ad-text2">The Launch Date are Coming Soon!</div>
        </div>
        <div className="col-12 text-center wow zoomInUp mint-button-block">
            <button className="mint_button btn mt-5">MINTING</button>
        </div>
    </section>

    <section className="about-section">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title line-height-15">WELCOME TO OUR NFTS</span>
        </div>
        <div className="row mx-0 px-0 py-5">
            <div className="col-md-7 d-flex align-items-center">
                <div className="pl-md-3">
                    <div className="py-xl-5 py-md-3 py-2  wow fadeInUp ">
                        <span className="font_bgdefault line-height-15 headline-font">ABOUT THE</span> &nbsp;&nbsp;&nbsp;<span className="font_bgundefault line-height-15">LUCKY DRAGON</span>
                    </div>
                    <div className="pt-md-3  wow fadeInUp">
                        <span className="font_general line-height-18">
                            The LuckyDragon is a collection of 10,000 generative Mekas with hundreds of elements inspired by Lucky Dragon taam.<br/>
                            Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-5 mt-md-0 mt-5 pr-5 mr-0 wow rubberBand">
                <div>
                    <img className="img-thumbnail" src="./assets/images/dragon.jpg" className="w-100"/>
                </div>
            </div>
        </div>
    </section>

    <section className="slide-container my-5">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title line-height-15">LUCKY DRAGON</span>
        </div>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="./assets/images/dragon.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="./assets/images/dragon1.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="./assets/images/dragon2.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="./assets/images/dragon.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="./assets/images/dragon1.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src="./assets/images/dragon2.png" alt=""/>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>

    <div className="col-12 text-center d-flex justify-content-center">
        <span className="section_title gtfcduyjdc wow fadeInUp">THE ROADMAP</span>
    </div>
    <section className="roadmap pb-5">
        <div className="roadmap_title_back"></div>
        <div className="top_one container-fluid mt-5 roadmap-padding">
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-4">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">Launch Roadmap</span>
                            </div>
                            <div className="top_data">
                                Quality comes first. The goal is to make our first drop as cool 
                                as possible so we can have freedom to develop the universe. 
                                We're still working on a number of rarity criteria, as well as a lot of new Lore concepts. 
                                The drop release date will be announced as soon as the project's quality and technical aspects are fully progressed. 
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img className="w-75 pc" src="./assets/images/main/Community1.png"/>
                    <img className="w-50 sp mt-3" src="./assets/images/main/Community1.png"/>
                </div> */}
            </div>
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-4">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"></span><span className="top_title">Physical Part</span>
                            </div>
                            <div className="top_data">
                                Mekas have a huge potential as physical creations. 
                                We are passionate about 3D printing and want to bring our concept to life with high-quality materials. 
                                After several talks with famous art toys makers, we are currently working on some concepts but wait, 
                                let’s keep a little mystery for the moment! We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics. 
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img className="w-75 pc" src="./assets/images/main/Charity1.png"/>
                    <img className="w-50 sp mt-3" src="./assets/images/main/Charity1.png"/>
                </div> */}
            </div>
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-3">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">LUCKYDRAGON ARTISTS</span>
                            </div>
                            <div className="top_data">
                                We know a lot of artists in the NFT community and beyond! We'd like to develop a series 
                                in which each dragon is made in collaboration with artists we like and under their artistic direction. 
                                We would create a small collection of 1/1 unique dragons by artists, with all proceeds going to them! 
                                This collection is incredibly important to us, and we are excited to see what we can accomplish together!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-4">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">LUCKYDRAGON TAKEOVER</span>
                            </div>
                            <div className="top_data">
                                A multi-city AD takeover will commence highlighting Yellow Giants of some of the most active YGS community members. 
                                Creatives from the Yellow Giant community will also be commissioned for this campaign, 
                                bringing value to Yellow Giant holders, derivatives artists, and the greater YGS community.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img className="w-75 pc" src="./assets/images/main/Diamond1.png"/>
                    <img className="w-75 sp mt-3" src="./assets/images/main/Diamond1.png"/>
                </div> */}
            </div>
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-4">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"></span><span className="top_title">Future of Dragons</span>
                            </div>
                            <div className="top_data">
                                When all of these stages are completed, we’ll take care of maintaining the Meka Universe. 
                                We both come from the design industry, and we are truly passionate about Art, Short films, 
                                Physical and Digital Exploration, and we would like to explore even more, with the desire to 
                                always make events more impressive and ambitious.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/main/Future1.png" className="w-75 pc"/>
                    <img src="./assets/images/main/Future1.png" className="w-50 sp mt-3"/>
                </div> */}
            </div>
        </div>
    </section>

    <section className="container-fluid meet-section add-padding mb-5">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title gtfcduyjdc wow fadeInUp">MEET THE TEAM</span>
        </div>
        <div className="mt-5">
            <div className="row white_font_color">
                <div className="col-md-3 mt-4">
                    <img className="w-100 wow slideInLeft" src="./assets/images/prt_dep_alessandro.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 className="rubik-font">
                        CEO David
                    </h2>
                    <p className="rubik-font">
                        The visionary and also the mediator of the LuckyDragon. A cryptocurrencies enthusiast since 2015. He entered the IT world as a designer and a visionary of lottery and gambling games.
                    </p>
                </div>
            </div>
            <div className="row white_font_color">
                <div className="col-md-3 mt-4">
                    <img className="w-100 wow slideInLeft" src="./assets/images/prt_dev_pavel2.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <h2 className="rubik-font">
                        Robert
                    </h2>
                    <p className="rubik-font">
                        One the first persons involved in full development of LuckyDragon. His focus is mostly on lottery and card games, but dont be scared, he is not a gambler, but only developer.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="section-qa">
        <div className="title">
            <h2 className="text-center text-white wow fadeInUp">FAQS</h2>
        </div>
        <div className="content container-fluid mt-md-5 mt-4 footer-padding">
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">What is LuckyDragon?</h1>
                </button>
                <div className="panel">
                    <p>LuckyDragon is about the building the community on base ground of real product which are merch, app and NFT.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">How much is the mint?</h1>
                </button>
                <div className="panel">
                    <p>Presale mint price will be 0.08ETH and public mint price will be 0.2ETH. </p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">When is the launch?</h1>
                </button>
                <div className="panel">
                    <p>Our official mint date is January 1st 2022 at 2:00PM EST.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">Is there a whitelist?</h1>
                </button>
                <div className="panel">
                    <p>Yes, we are going to make whitelist.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">Can you add more FAQ from community?</h1>
                </button>
                <div className="panel">
                    <p>Sure, in case of any unanswered question please contact sunshine09101@gmail.com.</p>
                </div>
            </div>
            <h4 class="font-calibri text-white mt-2 text-center mt-5">© All Rights Reserved 2021</h4>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <a href="">
                    <img className="social_footer_image" src="./assets/images/twitter_white_icon.png" alt=""/>
                </a>
                <a href="">
                    <img className="social_footer_image" src="./assets/images/discord_white_icon.png" alt=""/>
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
