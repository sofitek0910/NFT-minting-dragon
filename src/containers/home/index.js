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
        <nav className="navbar container-fluid p-4 wow fadeInDown navbar-block">
            <div className="logo-block">
                <a href="">
                    <div className="navbar_logo main-grey">
                        <img className="logo-dragon" src="./assets/images/dragon_logo.png"/> Dragon
                    </div>
                </a>
            </div>
            <div className="navbar_right">
                <button className="navbar_button btn mr-1 d-inline-block">CONNECT</button>
            </div>
        </nav>
        <div className="ad-text-block text-center">
            <div className="ad-text1 section_title">10,000 Unique Dragons</div>
            <div className="ad-text2">The Launch Date is Coming Soon!</div>
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
            <div className="col-md-7 d-flex align-items-center text-center">
                <div className="pl-md-3">
                    <div className="py-xl-5 py-md-3 py-2  wow fadeInUp ">
                        <span className="font_bgdefault line-height-15 headline-font">ABOUT THE</span> &nbsp;&nbsp;&nbsp;<span className="font_bgundefault line-height-15">LUCKY DRAGON</span>
                    </div>
                    <div className="pt-md-3  wow fadeInUp">
                        <span className="font_general line-height-18">
                            The LuckyDragon is a collection of 10,000 generative dragons with hundreds of elements inspired by Lucky Dragon team.<br/>
                            Each artwork is original, with its own color palette and creation. The objective was to make each dragon unique in order to prioritize quality above quantity.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-5 mt-md-0 mt-5 mr-0 wow rubberBand">
                <div>
                    <img className="img-thumbnail" src="./assets/images/character.gif" className="w-100"/>
                </div>
            </div>
        </div>
    </section>

    <section className="slide-container">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title line-height-15">LUCKY DRAGON</span>
        </div>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon1.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon2.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon3.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon4.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon5.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon6.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon7.png" alt=""/>
                </div>
                <div className="swiper-slide">
                    <img className="slide_image img-thumbnail" src="./assets/images/dragon8.png" alt=""/>
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
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">SELL OUT</span>
                            </div>
                            <div className="top_data">
                                All giveaway winners will be given their prizes with proof to the community <b/>
                                Community votes to tell us what you want as a community out of us <b/>
                                Percentage of secondary sales will be all going into floor sweeps and giveaways <b/>
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
                                <span className="top_title_num roadmap_font"></span><span className="top_title">Q1</span>
                            </div>
                            <div className="top_data">
                                Weekly giveaways <b/>
                                Free mint of the luckybabydragons <b/>
                                Community votes for new holder benefits <b/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-5 mx-0 position-relative mx-0 wow fadeInDown">
                <div className="col-md-12">
                    <div className="row rounded roadmap_round py-3">
                        <div className="col-md-1 col-2 d-inline dot_data p-0">
                            <span className="dot"></span>
                        </div>
                        <div className="col-md-11 col-10 d-inline mt-4">
                            <div className="">
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">Q2</span>
                            </div>
                            <div className="top_data">
                                Begin Lucky dragon mobile game development <b/>
                                Merch drop <b/>
                                Floor sweeps <b/>
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
                                <span className="top_title_num roadmap_font"> </span><span className="top_title">Q3</span>
                            </div>
                            <div className="top_data">
                                Luckydragon mobile game drop <b/>
                                Creating our own crypto token to where holders will be able to gain yield<b/>
                                More community votes for holder benefits <b/>
                                Floor sweeps
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid meet-section add-padding mb-5">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title gtfcduyjdc wow fadeInUp">MEET THE TEAM</span>
        </div>
        <div className="mt-5">
            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member1.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        CEO David
                    </div>
                    <div className="rubik-font member_desc">
                        The visionary and also the mediator of the LuckyDragon. A cryptocurrencies enthusiast since 2015. He entered the IT world as a designer and a visionary of lottery and gambling games.
                    </div>
                </div>
            </div>

            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member2.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        Robert
                    </div>
                    <div className="rubik-font member_desc">
                        One the first persons involved in full development of LuckyDragon. His focus is mostly on lottery and card games, but dont be scared, he is not a gambler, but only developer.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section-qa">
        <div className="col-12 text-center d-flex justify-content-center">
            <span className="section_title gtfcduyjdc wow fadeInUp">FAQS</span>
        </div>
        <div className="content container-fluid mt-md-5 mt-4 footer-padding">
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">What is LuckyDragon?</h1>
                </button>
                <div className="panel">
                    <p>Luckydragon is a community driven NFT project made up of 10,000 AI generated NFTs with seven trait layers and 100 unique traits on the Ethereum blockchain.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">How much is the mint?</h1>
                </button>
                <div className="panel">
                    <p>The pre sale price for Luckydragons is going to be 0.08 Ethereum and if you miss out on the whitelist the remaining dragons will be sold for 0.25 Ethereum. </p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">When is the launch?</h1>
                </button>
                <div className="panel">
                    <p>Launch date currently is TBA and will be announced in our discord.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">Is there a whitelist?</h1>
                </button>
                <div className="panel">
                    <p>Yes, we are going to make whitelist. You can find more information about our white list in our discord.</p>
                </div>
            </div>
            <div className="mt-4 accordion-container footer_round">
                <button className="accordion py-2">
                    <h1 className="footer-font">Can you add more FAQ from community?</h1>
                </button>
                <div className="panel">
                    <p>Sure, in case of any unanswered question please contact sunshine09101@gmail.com. You can also alway dm Luckyjay on discord.</p>
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
