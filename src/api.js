//base url
const base_url = 'https://api.rawg.io/api/'

//getting the month
const getCurrentMonth = () => {
    const month = new Date.getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

//getting the day
const getCurrentDay = () => {
    const day = new Date.getDay();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentdate}&ordering=-rating&page_size=10`;

export const popularGames = () => `${base_url}${popular_games}`
