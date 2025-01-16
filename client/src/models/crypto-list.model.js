class CryptoList {
    constructor(cryptoList) {
        this.cryptoList = [new Crypto(cryptoList)]
    }
}


class Crypto {
    constructor(id, name, symbol, max_supply, total_supply, quote) {
        this.id = id
        this.name = name
        this.symbol = symbol
        this.max_supply = max_supply
        this.total_supply = total_supply
        this.quote = new Quote(quote)
    }
}
class Quote {
    constructor(USD) {
        this.USD = new USDClass(USD)
    }
}

class USDClass {
    constructor(price, percent_change_24h, percent_change_7d, market_cap, volume_change_24h) {
        this.price = price
        this.percent_change_24h = percent_change_24h
        this.percent_change_7d = percent_change_7d
        this.market_cap = market_cap
        this.volume_change_24h = volume_change_24h
    }
}

module.exports = {
    CryptoList,
    Crypto,
    Quote,
    USDClass,
}