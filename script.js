const vegetables = {
    aubergine: {
        name: {
            de: 'Aubergine',
            en: 'Eggplant'
        },
        fresh: [7, 8, 9, 10],
    },
    cauliflower: {
        name: {
            de: 'Blumenkohl',
            en: 'Cauliflower'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    greenBeans: {
        name: {
            de: 'Grüne Bohnen',
            en: 'Green Beans'
        },
        fresh: [7, 8, 9, 10],
    },
    broadBeans: {
        name: {
            de: 'Dicke Bohnen',
            en: 'Broad Beans'
        },
        fresh: [6, 7, 8],
    },
    broccoli: {
        name: {
            de: 'Brokkoli',
            en: 'Broccoli'
        },
        fresh: [6, 7, 8, 9, 10],
    },
    butterTurnip: {
        name: {
            de: 'Butterrübe',
            en: 'Butter Turnip'
        },
        fresh: [8, 9, 10, 11, 12],
        regional: [1, 2, 3, 4],
    },
    mushrooms: {
        name: {
            de: 'Champignons',
            en: 'Mushrooms'
        },
        fresh: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    peas: {
        name: {
            de: 'Erbsen',
            en: 'Peas'
        },
        fresh: [6, 7, 8],
    },
    fennel: {
        name: {
            de: 'Fenchel',
            en: 'Fennel'
        },
        fresh: [6, 7, 8, 9, 10, 11],
    },
    kale: {
        name: {
            de: 'Grünkohl',
            en: 'Kale'
        },
        fresh: [1, 2, 11, 12],
    },
    cucumber: {
        name: {
            de: 'Gurke',
            en: 'Cucumber'
        },
        fresh: [6, 7, 8, 9, 10],
    },
    potatoes: {
        name: {
            de: 'Kartoffeln',
            en: 'Potatoes'
        },
        fresh: [6, 7, 8, 9, 10],
        regional: [1, 2, 3, 4, 5, 11, 12],
    },
    kohlrabi: {
        name: {
            de: 'Kohlrabi',
            en: 'Kohlrabi'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    pumpkin: {
        name: {
            de: 'Kürbis',
            en: 'Pumpkin'
        },
        fresh: [8, 9, 10, 11],
        regional: [1, 2, 12],
    },
    leek: {
        name: {
            de: 'Lauch',
            en: 'Leek'
        },
        fresh: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    springOnions: {
        name: {
            de: 'Lauchzwiebeln',
            en: 'Spring Onions'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    corn: {
        name: {
            de: 'Mais',
            en: 'Corn'
        },
        fresh: [8, 9, 10],
    },
    chard: {
        name: {
            de: 'Mangold',
            en: 'Chard'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    carrots: {
        name: {
            de: 'Möhren',
            en: 'Carrots'
        },
        fresh: [6, 7, 8, 9, 10],
        regional: [1, 2, 3, 4, 5, 11, 12],
    },
    bellPepper: {
        name: {
            de: 'Paprika',
            en: 'Bell Pepper'
        },
        fresh: [7, 8, 9, 10],
    },
    parsnips: {
        name: {
            de: 'Pastinaken',
            en: 'Parsnips'
        },
        fresh: [1, 2, 3, 9, 10, 11, 12],
        regional: [4],
    },
    radishes: {
        name: {
            de: 'Radieschen',
            en: 'Radishes'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    brusselsSprouts: {
        name: {
            de: 'Rosenkohl',
            en: 'Brussels Sprouts'
        },
        fresh: [1, 2, 10, 11, 12],
    },
    beetroot: {
        name: {
            de: 'Rote Bete',
            en: 'Beetroot'
        },
        fresh: [7, 8, 9, 10, 11],
        regional: [1, 2, 3, 4, 12],
    },
    redCabbage: {
        name: {
            de: 'Rotkohl',
            en: 'Red Cabbage'
        },
        fresh: [6, 7, 8, 9, 10, 11],
        regional: [1, 2, 3, 4, 5, 12],
    },
    blackSalsify: {
        name: {
            de: 'Schwarzwurzeln',
            en: 'Black Salsify'
        },
        fresh: [1, 2, 10, 11, 12],
    },
    asparagus: {
        name: {
            de: 'Spargel',
            en: 'Asparagus'
        },
        fresh: [4, 5, 6],
    },
    spinach: {
        name: {
            de: 'Spinat',
            en: 'Spinach'
        },
        fresh: [3, 4, 5, 9, 10, 11],
    },
    pointedCabbage: {
        name: {
            de: 'Spitzkohl',
            en: 'Pointed Cabbage'
        },
        fresh: [5, 6],
    },
    celery: {
        name: {
            de: 'Staudensellerie',
            en: 'Celery'
        },
        fresh: [7, 8, 9, 10],
    },
    swede: {
        name: {
            de: 'Steckrübe',
            en: 'Swede'
        },

        fresh: [9, 10, 11, 12],
        regional: [1, 2, 3],
    },
    tomatoes: {
        name: {
            de: 'Tomaten',
            en: 'Tomatoes'
        },
        fresh: [7, 8, 9, 10],
    },
    jerusalemArtichoke: {
        name: {
            de: 'Topinambur',
            en: 'Jerusalem Artichoke'
        },

        fresh: [1, 2, 10, 11, 12],
    },
    whiteCabbage: {
        name: {
            de: 'Weißkohl',
            en: 'White Cabbage'
        },

        fresh: [6, 7, 8, 9, 10, 11],
        regional: [1, 2, 3, 4, 12],
    },
    savoyCabbage: {
        name: {
            de: 'Wirsing',
            en: 'Savoy Cabbage'
        },
        fresh: [5, 6, 7, 8, 9, 10, 11, 12],
        regional: [1, 2, 3],
    },
    zucchini: {
        name: {
            de: 'Zucchini',
            en: 'Zucchini'
        },
        fresh: [6, 7, 8, 9, 10],
    },
    sugarSnapPeas: {
        name: {
            de: 'Zuckerschoten',
            en: 'Sugar Snap Peas'
        },
        fresh: [6, 7, 8],
    },
    onions: {
        name: {
            de: 'Zwiebeln',
            en: 'Onions'
        },
        fresh: [7, 8, 9, 10],
        regional: [1, 2, 3, 4, 5, 6, 11, 12],
    }
};

const fruits = {
    apple: {
        name: {
            de: 'Apfel',
            en: 'Apple'
        },
        fresh: [8, 9, 10, 11],
        regional: [1, 2, 3, 4, 5, 12],
    },
    apricot: {
        name: {
            de: 'Aprikose',
            en: 'Apricot'
        },
        fresh: [7, 8],
    },
    pear: {
        name: {
            de: 'Birne',
            en: 'Pear'
        },

        fresh: [8, 9, 10],
        regional: [11, 12],
    },
    blueberry: {
        name: {
            de: 'Blaubeere',
            en: 'Blueberry'
        },

        fresh: [6, 7, 8, 9],
    },
    blackberry: {
        name: {
            de: 'Brombeere',
            en: 'Blackberry'
        },

        fresh: [7, 8, 9],
    },
    strawberry: {
        name: {
            de: 'Erdbeere',
            en: 'Strawberry'
        },
        fresh: [5, 6, 7],
    },
    raspberry: {
        name: {
            de: 'Himbeere',
            en: 'Raspberry'
        },

        fresh: [6, 7, 8],
    },
    elderberry: {
        name: {
            de: 'Holunderbeere',
            en: 'Elderberry'
        },

        fresh: [9, 10],
    },
    currant: {
        name: {
            de: 'Johannisbeere',
            en: 'Currant'
        },

        fresh: [6, 7, 8],
    },
    cherry: {
        name: {
            de: 'Kirsche',
            en: 'Cherry'
        },
        fresh: [6, 7, 8],
    },
    mirabelle: {
        name: {
            de: 'Mirabelle',
            en: 'Mirabelle'
        },

        fresh: [7, 8, 9],
    },
    plum: {
        name: {
            de: 'Pflaume',
            en: 'Plum'
        },
        fresh: [7, 8, 9],
    },
    quince: {
        name: {
            de: 'Quitte',
            en: 'Quince'
        },

        fresh: [9, 10, 11],
    },
    rhubarb: {
        name: {
            de: 'Rhabarber',
            en: 'Rhubarb'
        },
        fresh: [4, 5, 6],
    },
    gooseberry: {
        name: {
            de: 'Stachelbeere',
            en: 'Gooseberry'
        },

        fresh: [6, 7, 8],
    },
    watermelon: {
        name: {
            de: 'Wassermelone',
            en: 'Watermelon'
        },
        fresh: [8, 9],
    },
    grape: {
        name: {
            de: 'Weintraube',
            en: 'Grape'
        },
        fresh: [9, 10],
    },
    damson: {
        name: {
            de: 'Zwetschge',
            en: 'Damson'
        },
        fresh: [7, 8, 9, 10],
    }
};

const salads = {
    batavia: {
        name: {
            de: 'Batavia',
            en: 'Batavia'
        },
        fresh: [5, 6, 7, 8, 9],
    },
    chicory: {
        name: {
            de: 'Chicorée',
            en: 'Chicory'
        },
        fresh: [1, 2, 3, 4, 10, 11, 12],
    },
    oakLeafLettuce: {
        name: {
            de: 'Eichblattsalat',
            en: 'Oak Leaf Lettuce'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    icebergLettuce: {
        name: {
            de: 'Eisbergsalat',
            en: 'Iceberg Lettuce'
        },
        fresh: [6, 7, 8, 9, 10],
    },
    endive: {
        name: {
            de: 'Endivie',
            en: 'Endive'
        },
        fresh: [5, 6, 7, 8, 9, 10, 11, 12],
    },
    lambsLettuce: {
        name: {
            de: 'Feldsalat',
            en: 'Lambs Lettuce'
        },
        fresh: [1, 2, 3, 4, 10, 11, 12],
    },
    butterheadLettuce: {
        name: {
            de: 'Kopfsalat',
            en: 'Butterhead Lettuce'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    lolloRosso: {
        name: {
            de: 'Lollo Rosso',
            en: 'Lollo Rosso'
        },
        fresh: [5, 6, 7, 8, 9, 10],
    },
    purslane: {
        name: {
            de: 'Portulak',
            en: 'Purslane'
        },
        fresh: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12],
    },
    radicchio: {
        name: {
            de: 'Radicchio',
            en: 'Radicchio'
        },
        fresh: [8, 9, 10, 11],
        regional: [1, 2, 12],
    },
    arugula: {
        name: {
            de: 'Rucola',
            en: 'Arugula'
        },
        fresh: [4, 5, 6, 7, 8, 9],
    }
};

const currentMonth = new Date().getMonth() + 1;
const currentMonthName = new Date().toLocaleString('en-US', { month: 'long' });

const getFresh = (category, month, lang) => Object.values(category).filter(item => item.fresh.includes(month)).map(item => item.name[lang]);
const getRegional = (category, month, lang) => Object.values(category).filter(item => item.regional && item.regional.includes(month)).map(item => item.name[lang]);

const lang = window.navigator.language.split('-')[0];
const whenDOMLoaded = () => {
    const vegetableOutput = window.vegetables;
    const freshVeggies = getFresh(vegetables, currentMonth, lang);
    console.log(vegetableOutput);
    freshVeggies.forEach(veggie => {
        const veggieElement = document.createElement('p');
        veggieElement.textContent = veggie;
        vegetableOutput.appendChild(veggieElement);
    })

    const regionalVeggies = getRegional(vegetables, currentMonth, lang);
    console.log(regionalVeggies);
    regionalVeggies.forEach(veggie => {
        const veggieElement = document.createElement('p');
        veggieElement.style.color = 'grey';
        veggieElement.textContent = veggie;
        vegetableOutput.appendChild(veggieElement);
    })


    const fruitOutput = window.fruits;
    const freshFruits = getFresh(fruits, currentMonth, lang);
    console.log(fruitOutput);
    freshFruits.forEach(fruit => {
        const fruitElement = document.createElement('p');
        fruitElement.textContent = fruit;
        document.querySelector('#fruits').appendChild(fruitElement);
    })

    const regionalFruits = getRegional(fruits, currentMonth, lang);
    console.log(regionalFruits);
    regionalFruits.forEach(fruit => {
        const fruitElement = document.createElement('p');
        fruitElement.style.color = 'grey';
        fruitElement.textContent = fruit;
        document.querySelector('#fruits').appendChild(fruitElement);
    })

    const saladOutput = window.salads;
    const freshSalads = getFresh(salads, currentMonth, lang);
    console.log(saladOutput);
    freshSalads.forEach(salad => {
        const saladElement = document.createElement('p');
        saladElement.textContent = salad;
        document.querySelector('#salads').appendChild(saladElement);
    })

    const regionalSalads = getRegional(salads, currentMonth, lang);
    console.log(regionalSalads);
    regionalSalads.forEach(salad => {
        const saladElement = document.createElement('p');
        saladElement.style.color = 'grey';
        saladElement.textContent = salad;
        document.querySelector('#salads').appendChild(saladElement);
    })

};
window.addEventListener('DOMContentLoaded', whenDOMLoaded);