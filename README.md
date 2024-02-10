# aware

A CLI tool to improve general awareness.

This tool fetches questions from [The Trivia API](https://the-trivia-api.com) and renders them to the user according to its _[structure and working](#structure-and-working)_.

# Structure and Working

The Trivia API provides ten main categories and three difficulty levels.

## Dividing categories 

The categories are divided into

- lighter categories  
    _music, science, general_knowledge, sport_and_leisure, food_and_drink_
- heavier categories  
    _society_and_culture, arts_and_literature, film_and_tv, history, geography_

## Difficulty levels

The [API](https://the-trivia-api.com) divides questions into 'easy', 'medium' and 'hard' difficulty levels.

## Sets, rounds and subparts

Conceptual divisions to help achieve the desired balance of catagories and difficulties.

- Subpart  
    Consists of __five questions__.  
    
- Round  
    Consists of __three subparts__.  
    Two subparts will consist of questions of __heavier categories__ and one subpart will consist of questions of __lighter categories__.  
    _All questions from the three subparts of a round will be shuffled together._
    
- Set  
    Consists of __three rounds__.  
    The three rounds will be of __easy__, __medium__, and __hard__ difficulty level accordingly.
