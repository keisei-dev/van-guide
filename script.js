const cards = [
    {
        name: "Kitsilano",
        description: "海と公園が近く、落ち着いた西エリアです。",
        suitables_for: "海辺で暮らしたい人。家賃より場所を優先できる人。",
        rent: "月 2,600〜3,200 カナダドルくらい",
        transportation: "バスは多いです。SkyTrain の駅までは歩いて遠いです。",
        nearOcean: true,
        convenientTrain: false,
        rentMin: 2600
    },
    {
        name: "Mount Pleasant",
        description: "カフェと店が多く、市内の中心に近いです。",
        suitables_for: "歩いて用事を減らしたい人。初めての街で中心にいたい人。",
        rent: "月 2,400〜2,900 カナダドルくらい",
        transportation: "Canada Line の Broadway City Hall 駅が近いです。バスも使えます。",
        nearOcean: false,
        convenientTrain: true,
        rentMin: 2400
    },
    {
        name: "Metrotown",
        description: "駅とモールが近く、高層マンションが多いです。",
        suitables_for: "電車で移動したい人。家賃を抑えたい人。",
        rent: "月 2,000〜2,500 カナダドルくらい",
        transportation: "Expo Line の Metrotown 駅が中心です。電車は便利です。",
        nearOcean: false,
        convenientTrain: true,
        rentMin: 2000
    },
];

const generateCards = (cards) => {
    const cardsContainer = document.getElementById("cards");
    cardsContainer.replaceChildren();

    cards.forEach((card) => {
        const article = document.createElement("article");

        const name = document.createElement("h2");
        name.textContent = card.name;
        article.appendChild(name);

        const description = document.createElement("p");
        description.textContent = card.description;
        article.appendChild(description);

        const details = document.createElement("dl");

        const fitLabel = document.createElement("dt");
        fitLabel.textContent = "向いている人";
        const fit = document.createElement("dd");
        fit.textContent = card.suitables_for;
        details.append(fitLabel, fit);

        const rentLabel = document.createElement("dt");
        rentLabel.textContent = "家賃の目安";
        const rent = document.createElement("dd");
        rent.textContent = card.rent;
        details.append(rentLabel, rent);

        const transitLabel = document.createElement("dt");
        transitLabel.textContent = "交通";
        const transit = document.createElement("dd");
        transit.textContent = card.transportation;
        details.append(transitLabel, transit);

        article.appendChild(details);
        cardsContainer.appendChild(article);
    });
};

generateCards(cards);

const filterCardsByOcean = (cards) => {
    const filterButtonByOcean = document.getElementById("filter-ocean");
    filterButtonByOcean.addEventListener("click", () => {
        const matchedCardsByOcean = cards.filter((card) => card.nearOcean === true);
        generateCards(matchedCardsByOcean);
    });
};

filterCardsByOcean(cards);

const filterCardsByTrain = (cards) => {
    const filterButtonByTrain = document.getElementById("filter-train");
    filterButtonByTrain.addEventListener("click", () => {
        const matchedCardsByTrain = cards.filter((card) => card.convenientTrain === true);
        generateCards(matchedCardsByTrain);
    });
};

filterCardsByTrain(cards);

const filterCardsByRent = (cards) => {
    const filterButtonByRent = document.getElementById("filter-rent");
    filterButtonByRent.addEventListener("click", () => {
        const matchedCardsByRent = cards.filter((card) => card.rentMin <= 2200);
        generateCards(matchedCardsByRent);
    });
};

filterCardsByRent(cards);
