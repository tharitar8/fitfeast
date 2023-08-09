## FitFeast

`FitFeast is a recipe recommendation web application that suggests recipes based on a user's Total Daily Energy Expenditure (TDEE) and a preferred ingredient. The app leverages the Edamam API to provide recipe suggestions tailored to the user's caloric needs and ingredient preference.`

## Overview

`FitFeast provides a straightforward interface for users to input their TDEE and an ingredient they're interested in. Based on this input, the app fetches and displays a list of recipes that align with the user's criteria. The user can browse these recipes, view their calorie content, and access the full recipe if interested. This app is particularly useful for individuals mindful of their caloric intake and looking for recipes fitting their dietary plans.`


## ERD


![Database ER diagram example (crow's foot) (1)](https://github.com/tharitar8/fitfeast/assets/86535497/7a62be73-d618-46d2-a0c4-a32053042247)

# WireFrames
![FITFEAST](https://github.com/tharitar8/fitfeast/assets/86535497/e79884dc-0aa5-4b5a-9d82-9cc1475ae818)

![FITFEAST2 (1)](https://github.com/tharitar8/fitfeast/assets/86535497/28d177f6-4423-4481-9832-4b11bd124f68)


![FITFEAST2](https://github.com/tharitar8/fitfeast/assets/86535497/fdb21f60-8cd6-48b1-8478-0aa58772b9b8)

## Features
* Recipe Recommendations Based on TDEE and Ingredient: Users can input their Total Daily Energy Expenditure (TDEE) and a preferred ingredient. FitFeast then suggests recipes tailored to these preferences using data from the Edamam API.

* Pagination Support: As users browse through the recipes, they can click "More Recipes" to view additional recipe suggestions based on their previous inputs.

* Simple and Intuitive Interface: FitFeast offers a straightforward and user-friendly design. With just a couple of inputs, users can quickly receive a list of suitable recipes.



## Technologies
* Frontend: React.js
* Backend: Node.js and Express.js
* External API: Edamam's Nutrition Analysis API

## Future Enhancements
* Macronutrient Calculator: A feature to allow users to input food items consumed and their quantity to calculate the total proteins, fats, and carbs of their meal.
* Diet-Based Recipe Suggestions: Extend the functionality to allow users to select their dietary preference, presenting suitable recipes fitting their dietary needs.
* Comprehensive User Authentication System: Implement a secure sign-in and registration system for users.
* Daily Meal Tracker: Extend the app to allow users to track all meals consumed throughout the day.
* Diverse Dietary Preferences and Restrictions: Incorporate a broader range of dietary preferences, ensuring the app caters to a wide audience.
* Save Favorite Recipes: Allow users to save and quickly access their favorite recipes.
