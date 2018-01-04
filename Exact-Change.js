function checkCashRegister(price, cash, cashInDrawer) {

    var totalCoin = [];
    var trackCoin = [];
    let minCoin;
    var change = cash - price;

    totalCoin[0] = 0;

    for (let i = 1; i <= change; i++) {
        totalCoin[i] = Infinity;
    }

    for (let i = 0; i <= change; i++) {
        trackCoin[i] = -1;
    }

    for (let cashInDrawerIndex = 0; cashInDrawerIndex <= 3; cashInDrawerIndex++) {

        for (let totalCoinIndex = 1; totalCoinIndex < totalCoin.length; totalCoinIndex++) {

            // console.log([ totalCoinIndex,cashInDrawer[cashInDrawerIndex] ]);

            if (totalCoinIndex >= cashInDrawer[cashInDrawerIndex]) {

                var coin = totalCoin[totalCoinIndex];

                minCoin = Math.min(totalCoin[totalCoinIndex], 1 + totalCoin[totalCoinIndex - cashInDrawer[cashInDrawerIndex]])

                console.log([coin, minCoin]);

                totalCoin[totalCoinIndex] = minCoin;


                if (minCoin !== coin) {
                    // console.log(cashInDrawerIndex);
                    trackCoin[totalCoinIndex] = cashInDrawerIndex;
                }

            }
        }

    }

    console.log(totalCoin);
    console.log(trackCoin);

    calCoin(trackCoin, cashInDrawer, change);
}

function calCoin(trackCoin, cashInDrawer, change) {

    var coin = [];
    var total;
    var flag;

    coin.push(cashInDrawer[trackCoin[trackCoin.length - 1]]);

    // console.log(flag);

    while (coin.reduce(
        (acc, cur) => acc + cur,
        0
    ) !== change) {

        flag = change - coin.reduce(
            (acc, cur) => acc + cur,
            0
        );

        coin.push(cashInDrawer[trackCoin[flag]]);



        // coin.push( cashInDrawer[ trackCoin[flag] ]);


    }





    total = coin.reduce(
        (acc, cur) => acc + cur,
        0
    );

    console.log(total);

    console.log(coin);

}

checkCashRegister(100, 110, [7, 2, 3, 6]);

  /* challanges 
  
  1.dealing with insaficient fund
  
  2. available currency
  
  3.fractional value
  /*
