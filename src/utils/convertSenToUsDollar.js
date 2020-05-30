const convertSenToUsDollar = sen => {
    var dollars = sen / 4712.16;
    return dollars.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};

export default convertSenToUsDollar;
