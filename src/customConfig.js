const serverUrl = "https://the-trivia-api.com/v2";

const questionsEndpoint = serverUrl + "/questions";

const difficulties = ["easy", "medium", "hard"];

const categories = {
    'heavier': [
        "society_and_culture",
        "arts_and_literature",
        "film_and_tv",
        "history",
        "geography"
    ],
    'lighter': [
        "music",
        "science",
        "general_knowledge",
        "sport_and_leisure",
        "food_and_drink"
    ]
};

module.exports = { questionsEndpoint, difficulties, categories };
