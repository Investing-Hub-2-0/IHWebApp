import { useEffect, useState } from 'react';
import classes from './crypto-table.module.css'
import { getCryptoList } from '../../../services/crypto-list/cripto-list'
import { Crypto, CryptoList } from '../../../models/crypto-list.model';
import { numberToFixed } from '../../../utils/numberToFixed';

function CryptoTable() {
    const [cryptoList, setCryptoList] = useState([]);
    const [starCheked, setStarChecked] = useState(false);

    useEffect(() => {
        callAPI();
        console.log('fire')
    }, []);

    const setStar = event => {
        event.currentTarget.classList.add(classes.starChecked);
    }


    const callAPI = () => {
        const list = getCryptoList().then(response => {
            const cryptoList = response.data.cryptoList
            setCryptoList(cryptoList);
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <div className={classes.rectLine}></div>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th >Price</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Market Cap</th>
                        <th>Volume(24h)</th>
                        <th>Circulating Supply</th>
                        <th>Last 7 days</th>
                        <th></th>
                    </tr>
                    <div className={classes.rectLine}></div>

                </thead>
                <tbody>
                    {
                        cryptoList.map(crypto => (
                            <tr>
                                <td onClick={setStar} className={`fa fa-star cursor`} ></td>
                                <td>{crypto.cmc_rank}</td>
                                <td className={classes.fw600}>
                                    <img className={classes.imgCrypto} alt={crypto.name} src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'></img>
                                    {cryptoList.name}
                                    <span className='text-muted' >
                                        BTC
                                    </span>
                                </td>
                                <td className={classes.fw600}>${numberToFixed(crypto.quote.USD.price)}</td>
                                <td>{numberToFixed(crypto.quote.USD.percent_change_24h, 2)}</td>
                                <td>{numberToFixed(crypto.quote.USD.percent_change_7d, 2)}</td>
                                <td>{numberToFixed(crypto.quote.USD.market_cap, 2)}</td>
                                <td>{numberToFixed(crypto.quote.USD.volume_change_24h, 2)}</td>
                                <td>{numberToFixed(crypto.max_supply, 2)}Slide</td>
                                <td>Grafico...</td>
                                <td ><i className="fas fa-ellipsis-v cursor"></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;
