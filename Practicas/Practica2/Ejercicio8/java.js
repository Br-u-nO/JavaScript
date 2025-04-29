function  total1(prices, amounts) {
    tot=0;
    prices=Object.entries(prices);
    amounts=Object.entries(amounts);
    
    for(i=0;i<amounts.length;i++){
        j=0;
        while(amounts[j][0]!=prices[i][0])
            j++;
        tot+=prices[i][1]*amounts[j][1]
    }
    return tot;
}

function  total2(prices, amounts) {
    tot=0;
    prices=Object.entries(prices);
    amounts=Object.entries(amounts);
    index=0;
    return prices.reduce((acc,[key,precio])=>{ 
        let cantidad=0;
        for(let i=0;i<amounts.length;i++)
            if(amounts[i][0]===key)
                cantidad=amounts[i][1];
        return acc+precio*cantidad

    },0);
    
}

 var  prices  = {
 MILK: 48.90,
 BREAD: 90.50,
 BUTTER: 130.12
 };
 var  amounts  = {
 MILK: 1,
 BUTTER: 0.2,
 BREAD: 0.5
 
 }
 console.log(typeof  prices);
 console.log(prices.BREAD);
 console.log(amounts["MILK"]);
 console.log(total1(prices, amounts)); // imprime 120.174
 console.log(total2(prices, amounts))