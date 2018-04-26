/**
 * Created by dongjie on 20/4/18.
 */


import React from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <footer>

            <div className="desktop-footer tac align-center-div">
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <div>
                            <p className="footer-header-text tac">
                                Partners
                            </p>
                        </div>
                        <div className="corporate-friends tac">
                            <div className="align-center-div corporate-friend friend-meet-one">
                                <img src="https://meet.one/pc/images/logo-light.png"/>
                                <p>MEET.ONE</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">

                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div>
                            <p className="footer-header-text tac">
                                Contact With Us
                            </p>
                        </div>
                        <div className="footer-icons tac">
                            <span>
                                <a className="social-media-link telegram-link" href="https://medium.com/@eosiosg">
                                    <i className="fab fa-medium"></i>
                                </a>
                            </span>
                                <span>
                                <a className="social-media-link telegram-link" href="https://www.facebook.com/eosiosg-168790343770758/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </span>
                                <span>
                                <a className="social-media-link telegram-link" href="https://twitter.com/eosinsg">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </span>
                                <span>
                                <a className="social-media-link telegram-link" href="https://t.me/eosiosg">
                                    <i className="fab fa-telegram"></i>
                                </a>
                            </span>
                                <span>
                                <a className="social-media-link github-link" href="https://github.com/eosiosg/testnet">
                                    <i className="fab fa-github"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mobile-footer">
                <div>
                    <p className="footer-dark-para">
                        Contact With Us
                    </p>
                </div>
                <div className="row">
                    <div className="footer-icons">
                        <span>
                            <a className="social-media-link telegram-link" href="https://medium.com/@eosiosg">
                                <i className="fab fa-medium"></i>
                            </a>
                        </span>
                            <span>
                            <a className="social-media-link telegram-link" href="https://www.facebook.com/eosiosg-168790343770758/">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </span>
                            <span>
                            <a className="social-media-link telegram-link" href="https://twitter.com/eosinsg">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </span>
                            <span>
                            <a className="social-media-link telegram-link" href="https://t.me/eosiosg">
                                <i className="fab fa-telegram"></i>
                            </a>
                        </span>
                            <span>
                            <a className="social-media-link github-link" href="https://github.com/eosiosg/testnet">
                                <i className="fab fa-github"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <br/>

                <div>
                    <p className="no-margin-bottom-p footer-dark-para">
                        Partners
                    </p>
                </div>
                <div className="row">
                    <div className="corporate-friends tac">
                        <div className="align-center-div corporate-friend friend-meet-one">
                            <img src="https://meet.one/pc/images/logo-light.png"/>
                            <p>MEET.ONE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-text">
                <span className="copy-right">
                    Copyright © 2018 Eosio.SG | All rights reserved
                </span>
            </div>
        </footer>
    }
}