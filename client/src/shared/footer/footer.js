import classes from './footer.module.css'

const getCurrentYear = () => {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer>
            <div className={classes.firstFooterPart}>
                <div className={classes.wrapperText}>
                    <h1>Be the first to know about <b>crypto news every day</b></h1>
                    <p className={classes.text}>Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                    <button className={classes.buttonSubscribe} >Subscribe now</button>
                </div>
                <img className={classes.imgNewsletter} alt="BTC" src='https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=92cd1e5'></img>
            </div>
            <div className={classes.secondFooterPart}>
                <div className={classes.wrapperImgCoinmarket}>
                    <img className={classes.imgCoinmarket} alt="Logo CoinMarketCap" src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=92cd1e5'></img>
                </div>
                <div className={classes.wrapperAllUl}>
                    <div>
                        <span>Products</span>
                        <ul>
                            <li>Blockchain Explorer</li>
                            <li>Crypto API</li>
                            <li>Crypto Indices</li>
                            <li>Jobs Board</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <span>Company</span>
                        <ul>
                            <li>About us</li>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                            <li>Community Rules</li>
                            <li>Disclaimer</li>
                            <li>Methodology</li>
                            <li>Careers
                                <button className={classes.buttonHiring}>We're hiring!</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Support</span>
                        <ul>
                            <li>Request Form</li>
                            <li>Contact Support</li>
                            <li>FAQ</li>
                            <li>Glossary</li>
                        </ul>
                    </div>
                    <div>
                        <span>Socials</span>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Interactive Chat</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.thirdFooterPart}>
                <div className={classes.wrapperCopyright}> 
                    <p><small>&copy; {getCurrentYear()} CoinMarketCap. All rights reserved</small></p>
                </div>
                <div className={classes.wrapperMobileShop}>
                    <img  alt="app-store"  src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_black_1.svg?_=92cd1e5"></img>
                    <img className={classes.imgGoogle} alt="google-play" src="https://s2.coinmarketcap.com/static/cloud/img/google_play_badge_1.png?_=92cd1e5"></img>
                    <img  className={classes.imgQrCode} alt="qr-code" src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=92cd1e5"></img>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
