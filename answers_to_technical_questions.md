# Technical Questions

## 1.How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent about 5 hours on this assignment. I would add the following if I had more time.
* Navigation Bar on top of the page to navigate between home page and refine search page.
* I would add React Helmet to improve SEO and tailoring pages' metadata to each page content.
* Add form validation logic where if a user inputs return no result, create a pop up message that indicates there were nothing returned.
* I would consider using Next.js to make sure my contents are crawled by google bots, which improves SEO. 
* I would definitely style the app better such as adding image of restaurant to the each resturant detial card by retrieving photos from "photo_url" api end point.

## 2.What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I have written React in functional component using hooks and for Redux I have used reselect library to solve the most complex logic of this app where after user inputs a city then try to refine a search by inputting another word, the app needs to display all the restaurants where the word matches with any one of restaurant name, address and cuisines. Instead of creating another component to code the logic, with the help of this fairly new redux library, I was able to nail down the logic with concise code. 
```
import { createSelector } from "reselect";

const filteredRestaurants = createSelector(
  (state) => state.allRestaurants.restaurants,
  (state) => state.visibilityFilter.filters,
  (restaurants, filters) =>
    restaurants.filter((restaurant) => {
      return Object.values(restaurant.restaurant).some((value) => {
        return JSON.stringify(value).toLowerCase().includes(filters.word);
      });
    })
);
```

## 3.How would you track down a performance issue in production? Have you ever had to do this?

There are number of ways to track down performance of React app.
* I like to use React Dev Tools which comes with profiler tool that provides a visual method to show how long a component and its children took to render.
* React's Profiler component can be used to test the performance, but require to build the app with react-dom/profiling and scheduler/tracing-profiling.
* Lighthouse from google chrome is quick way to test the performance of React app.
* Always look for small things like double check if my component is re-rendering unnecessarily or if my code can be optimized by implementing better algorithm or use of modern React library.

## 4.How would you improve the API that you just used?

I had to get entity_type and entity_id from Location end point then use that on Search end point to get the list of restaurants in the city, which I thought was unnecessary. There should be city endpoint with in Search, since most users are most likely search the restaurant by city then look for the ones with highest ratings. This would make developers life easier using the api. At the end, both users and developers benefit.

## 5.Please describe yourself using JSON.

```
{
    "firstName": "Alexander",
    "lastName": "Yang",
    "personality": ["Very fun to work with","curious"],
    "currentFocus": ["React","React Native","algorithms"]
    "interests": ["Raptors", "videogames", "jiu-jitsu"]
}
```