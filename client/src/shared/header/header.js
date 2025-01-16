/* eslint-disable react/jsx-no-comment-textnodes */
import classes from './header.module.css';

function Header() {
  return (
    <header>
      <div className={classes.wrapper}>
        FIRST ROW
      </div>
      <div className={classes.wrapper}>
        <div>
          <img className={classes.imgCoinmarket} alt="Logo CoinMarketCap" src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=92cd1e5'></img>
        </div>
        <nav className={classes.wrapper}>
          <div className={classes.dropdown}>
            <span>Cryptocurrencies</span>
            <div className={classes.arrowUp}></div>
            <div className={classes.dropdownContent}>
              <a className={classes.subItem} href='/'>
                <img className={classes.imgSubItem} alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg'></img>
                Ranking
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg'></img>
                Recently Added
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg'></img>
                Categories
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg'></img>
                Spotlight
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg'></img>
                Gainers & Losers
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg'></img>
                Global Charts
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg'></img>
                Historical Snapshots
              </a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <span>Exchanges</span>
            <div className={classes.arrowUp}></div>
            <div className={classes.dropdownContent}>
              <a className={classes.subItem} href='/'>
                <img className={classes.imgSubItem} alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg'></img>
                Spot
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg'></img>
                Derivatives
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg'></img>
                DEX
              </a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <span>NFT</span>
            <div className={classes.arrowUp}></div>
            <div className={classes.dropdownContent}>
              <a className={classes.subItem} href='/'>
                <img className={classes.imgSubItem} alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg'></img>
                Spot
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg'></img>
                Derivatives
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg'></img>
                DEX
              </a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <span><a>Exchanges</a></span>
          </div>
          <div className={classes.dropdown}>
            <span><a>Portfolio</a></span>
          </div>
          <div className={classes.dropdown}>
            <span><a>Watchlist</a></span>
          </div>
          <div className={classes.dropdown}>
            <span><a>Products</a></span>
          </div>
          <div className={classes.dropdown}>
            <span>Learn</span>
            <div className={classes.arrowUp}></div>
            <div className={classes.dropdownContent}>
              <a className={classes.subItem} href='/'>
                <img className={classes.imgSubItem} alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg'></img>
                Ranking
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg'></img>
                Recently Added
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg'></img>
                Categories
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg'></img>
                Spotlight
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg'></img>
                Gainers & Losers
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg'></img>
                Global Charts
              </a>
              <a className={classes.subItem} href='/'>
                <img alt="" src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg'></img>
                Historical Snapshots
              </a>
            </div>
          </div>
        </nav>
        <div className={classes.div1}>
          <div className={classes.div2}>
            <a href='/'>
              <img className={classes.diamond} alt="diamonds" src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"></img>
            </a>
            <div className={classes.diamondContent}>
              <div className={classes.diamondContentImage}>
                <img className={classes.imgUser} alt='user' src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"></img>
              </div>
              <div className={classes.diamondContentText}>
                <h5>CoinMarketCap Diamonds</h5>
                <p className='text-muted'>Earn CoinMarketCap rewards by completing various tasks on the CoinMarketCap website</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.div1}>
          <div className={classes.div3}>
            <i className="fas fa-lg fa-bell cursor"></i>
          </div>
        </div>
        <div className={classes.div1}>
          <div className={classes.div4}>
            <img className={classes.imgUser} alt='user' src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"></img>
          </div>
        </div>
        <div className={classes.wrapperSearch}>
          <input type='text' placeholder='Search'></input>
        </div>
      </div>
    </header>
  );
}
export default Header;
