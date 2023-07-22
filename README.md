## FitFeast
`FitFeast is a health and nutrition web application that helps users track their macronutrient 
intake for a single meal and suggests recipes based on the user's dietary preference. 
The app leverages the Edamam API to fetch nutritional information and recipe suggestions.`



## Overview
`FitFeast provides users with a simple and intuitive interface to input food items consumed during a meal. 
The app calculates and presents the total macronutrient content - proteins, fats, 
and carbs - for the meal by interacting with the Edamam API. Users can also select their diet preference, 
and the app suggests suitable recipes for their next meal, supporting a diverse range of diets like vegan, paleo, ketogenic, etc.`


## ERD


![Database ER diagram example (crow's foot) (1)](https://github.com/tharitar8/fitfeast/assets/86535497/7a62be73-d618-46d2-a0c4-a32053042247)

# WireFrames
![FITFEAST](https://github.com/tharitar8/fitfeast/assets/86535497/e79884dc-0aa5-4b5a-9d82-9cc1475ae818)

![FITFEAST2 (1)](https://github.com/tharitar8/fitfeast/assets/86535497/28d177f6-4423-4481-9832-4b11bd124f68)


![FITFEAST2](https://github.com/tharitar8/fitfeast/assets/86535497/fdb21f60-8cd6-48b1-8478-0aa58772b9b8)

## Features
* Macronutrient Calculator: Simply input the food items consumed and their quantity, and FitFeast calculates the total proteins, fats, and carbs of your meal using data from the Edamam API.

* Diet-Based Recipe Suggestions: Select your dietary preference, and the app presents suitable recipes fetched from the Edamam API.

* Simple and Intuitive Interface: FitFeast's minimalist design ensures a seamless and user-friendly experience, enabling users to quickly input their meal information and receive instant feedback.



## Technologies
* Frontend: React.js
* Backend: Node.js and Express.js
* Database: MongoDB
* External API: Edamam's Nutrition Analysis API

## Future Enhancements
* Introduce a comprehensive user authentication system.
* Extend the functionality to track all meals throughout the day.
* Incorporate a broader range of dietary preferences and restrictions.
* Implement a feature to save favorite recipes for quick access.
