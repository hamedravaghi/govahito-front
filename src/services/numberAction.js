export const seperateNumber = (num) => {
     var str = num.toString().split(".");
     if (str[0].length >= 5) {
          str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
     }
     if (str[1] && str[1].length >= 5) {
          str[1] = str[1].replace(/(\d{3})/g, "$1 ");
     }
     return str.join(".");
};

export const calPerc = (price, per) => {
     const priceNumber = Number(price);
     const percentNumber = Number(per);
     const percetPrice = (priceNumber * percentNumber) / 100;
     const resultPrice = Math.round(priceNumber - percetPrice);
     return seperateNumber(resultPrice);
};


export const calculatePrice = (price, per) => {
     const priceNumber = Number(price);
     const percentNumber = Number(per);
     const percetPrice = (priceNumber * percentNumber) / 100;
     const resultPrice = Math.round(priceNumber - percetPrice);
     const perfit = price - resultPrice
     return ({ price: Number(price), resultPrice: Number(resultPrice), perfit: Number(perfit) })
}


export const calculateTotalPrice = (products) => {
     if (products) {
          let allPrice = 0;
          let finalPrice = 0;
          let perfitPrice = 0;
          products.map((item) => {
               const { price, resultPrice, perfit } = calculatePrice(
                    item.price,
                    item.discountPercent
               );
               allPrice += price;
               finalPrice += resultPrice;
               perfitPrice += perfit;
          });
          return {
               total: allPrice,
               perfit: perfitPrice,
               payable: finalPrice,
          }

     } else {
          return null
     }
}