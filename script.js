/**
 * Language
 */
const languages = {
    de: "de-DE",
    en: "en-US"
}

let lang = navigator.language.startsWith("de") ? "de" : "en";

function switchLanguage(event) {
    lang = event.target.value
    refreshComplete();
}

function translateWords() {
    const translatables = document.querySelectorAll("[data-i18n]")

    Object.values(translatables).forEach(translateable => {
        const keyword = translateable.dataset.i18n
        translateable.innerText = i18n[keyword][lang]
    })
}

/**
 * Month
 */
const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    oktober: 10,
    november: 11,
    december: 12
}

const today = new Date();
let selectedDate = today;

const currentMonth = today.getMonth() + 1;
let selectedMonth = currentMonth;

let selectedMonthName = (selectedDate) => selectedDate.toLocaleString(languages[lang], { month: 'long' });

function selectMonth(event) {
    if ("BUTTON" !== event.target.tagName) {
        return;
    }

    selectedDate.setMonth(event.target.value - 1)
    selectedMonth = selectedDate.getMonth() + 1
    refreshMonth()
}


const refreshMontSelector = () => {
    window.monthPopoverContainer.innerHTML = ''

    Object.entries(months).forEach(([key, value]) => {
        console.log(key, value);

        const currentDate = new Date()
        currentDate.setMonth(value - 1)
        console.log(currentDate)

        const monthButton = document.createElement('button')
        monthButton.value = value
        monthButton.innerText = selectedMonthName(currentDate)

        window.monthPopoverContainer.appendChild(monthButton);
    })

}
/**
 * Output
 */
const getFresh = (category, month, lang) => Object.values(category).filter(item => item.fresh.includes(month)).map(item => item.name[lang]);
const getRegional = (category, month, lang) => Object.values(category).filter(item => item.regional && item.regional.includes(month)).map(item => item.name[lang]);

const displayCategory = (category, container, month, lang) => {
    container.innerHTML = ""; // Clear previous content

    const freshItems = getFresh(category, month, lang);
    freshItems.forEach(item => {
        const element = document.createElement('p');
        element.textContent = item;
        container.appendChild(element);
    });

    const regionalDisclaimer = document.createElement('hr');
    regionalDisclaimer.style.color = 'grey';
    regionalDisclaimer.style.margin = '10px 0';

    regionalDisclaimer.style.border = '1px solid #eee';

    container.appendChild(regionalDisclaimer);
    const regionalItems = getRegional(category, month, lang);
    regionalItems.forEach(item => {
        const element = document.createElement('p');
        element.style.color = 'grey';
        element.textContent = item;
        container.appendChild(element);
    });
};

const refreshMonth = () => {
    window.toggleMonthSelector.innerHTML = selectedMonthName(selectedDate);
    displayCategory(vegetables, window.vegetables, selectedMonth, lang);
    displayCategory(fruits, window.fruits, selectedMonth, lang);
    displayCategory(salads, window.salads, selectedMonth, lang);
}
const refreshComplete = () => {

    window.toggleMonthSelector.innerHTML = selectedMonthName(selectedDate);
    refreshMontSelector()
    translateWords()
    displayCategory(vegetables, window.vegetables, selectedMonth, lang);
    displayCategory(fruits, window.fruits, selectedMonth, lang);
    displayCategory(salads, window.salads, selectedMonth, lang);
};

window.addEventListener('DOMContentLoaded', refreshComplete);
