import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import swal  from 'sweetalert';
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [walletAddress, setWallet] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    FINNEY_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const showToast = (type) => {
        console.log("dadfasasdfa")
        swal('Info message',"", "success");
  };

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    console.log("smartcontract--->", blockchain.smartContract)
    // setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    swal(`Minting your ${CONFIG.NFT_NAME}...`, "", "info");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .publicSaleMint()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        swal('Sorry, something went wrong please try again later.',"", "error");
        // setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        swal(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`,"", "success");
        // setFeedback(
        //   `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        // );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
    console.log("account===>", blockchain.account)
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div>
    <section className="pb-500 main-back">
        <nav className="navbar container-fluid p-4 wow fadeInDown navbar-block">
            <div className="logo-block">
                <a href="">
                    <div className="navbar_logo main-grey">
                        <img className="logo-dragon" src="./assets/images/dragon_logo.png"/> LuckyDragon
                    </div>
                </a>
            </div>
            <div className="navbar_right">
                {blockchain.account == null && blockchain.account == undefined ? 
                  <button className="navbar_button btn mr-1 d-inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }
                    }
                  >
                    CONNECT
                  </button>:
                  <span className="connected-wallet">
                    {String(blockchain.account).substring(0, 4) +
                      "..." +
                      String(blockchain.account).substring(38)
                    }
                  </span>
                }
            </div>
        </nav>
        {/* <button onClick={showToast}>show toast!!!!!!!!!!!</button> */}
        <div className="ad-text-block text-center">
            <div className="ad-text1 section_title">10,000 Unique Dragons</div>
            <div className="ad-text2">The Launch Date is Coming Soon!</div>
        </div>
        <div className="col-12 text-center wow zoomInUp mint-button-block">
            <button 
              className="mint_button btn mt-5"
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                claimNFTs();
                getData();
              }}
            >
              {claimingNft ? "MINTING..." : "MINT"}
            </button>
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
                            The LuckyDragon is a collection of 10,000 generative dragons with 100 of trait elements inspired by LuckyDragon team.<br/>
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
            <span className="section_title line-height-15">LUCKYDRAGON</span>
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
                                All giveaway winners will be given their prizes with proof to the community. <br/>
                                Community votes to tell us what you want as a community out of us. <br/>
                                Percentage of secondary sales will be all going into floor sweeps and giveaways. <br/>
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
                                Weekly giveaways. <br/>
                                Begin Mobile game development. <br/>
                                Community votes for new holder benefits. <br/>
                                Community game nights. <br/>
                                Floor sweeps. <br/>
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
                                Weekly giveaways. <br/>
                                Community votes for new holder benefits. <br/>
                                LuckydragonsNFT mobile game released <br/>
                                Community game nights <br/>
                                Floor sweeps. <br/>
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
                                Weekly giveaways <br/>
                                Merch drop. <br/>
                                More community votes for holder benefits  <br/>
                                Community game nights <br/>
                                Floor sweeps.
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
                        LuckyJay
                    </div>
                    <div className="rubik-font member_desc">
                        This project was created by me to create a utility based NFT project in hopes to create a community that is unmatched. 
                        As the founder of this project I can guarantee I will be putting all of my time and energy into making this the biggest project possible by listening to you guys our community.
                    </div>
                </div>
            </div>

            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member2.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        FunnyDragon  
                    </div>
                    <div className="rubik-font member_desc">
                        A proficient full stack developer interested in contributing expertise in web and blockchain development.
                        Capable of excelling as part of a team or individually in a fast-paced environment. 
                        Deeply knowledgeable in distributed ledger, smart contract, blockchain architecture patterns, and different blockchain standards and ecosystems.
                    </div>
                </div>
            </div>

            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member3.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        JoyDragon
                    </div>
                    <div className="rubik-font member_desc">
                        Chandler is an amazing NFT artist and graphic designer  who is crazy in love of NFT art.
                        He always think to get an idea for unique NFT art.
                        He is going to build his exciting portfolio as an expert of NFT art. 
                    </div>
                </div>
            </div>

            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member4.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        FancyDragon    
                    </div>
                    <div className="rubik-font member_desc">
                        Expressive and gorgeous Web and Mobile designer.
                        Focused on creating and delivering high-quality designs that balance strategy and creativity, designs that are effective and easy to use.
                    </div>
                </div>
            </div>

            <div className="row white_font_color team_block">
                <div className="col-md-3 mt-4 text-center">
                    <img className="wow slideInLeft img-thumbnail member-picture" src="./assets/images/member5.png" alt=""/>
                </div>
                <div className="col-md-9 mt-4 wow slideInRight pr-0">
                    <div className="rubik-font member_name">
                        Scarlet
                    </div>
                    <div className="rubik-font member_desc">
                        Discord Server creator with all standards, tools and bots needed for your server. 
                        Apart from that advisor for community growth on discord as well as on other platforms as well.
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
                    <p>Sure, in case of any unanswered question you can alway dm Luckyjay on discord.</p>
                </div>
            </div>
            <h4 className="font-calibri text-white mt-2 text-center mt-5">© All Rights Reserved 2021</h4>
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
  );
}

export default App;
