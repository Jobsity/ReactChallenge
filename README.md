<div align="center">
    <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/jobsity_logo_small.png"/>
</div>

## Description

This project is designed to test your knowledge of front-end web technologies and assess your ability to create front-​end UI products with attention to details, cross-browser compatibility, standards, and  reusability.


## Assignment

The goal of this exercise is to create a demo calendar application using React.

You should start by rendering a single month view of a calendar for the current month, along the lines of the illustration below:
<div align="center">
    <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/CalendarSample.png"/>
</div>

## Mandatory features
 - Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.
 - Ability to edit reminders - including changing text, city, day and time.
 - Add a weather service call from [MetaWeather](https://www.metaweather.com/), [AccuWeather](https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D) or [VisualCrossing](https://www.visualcrossing.com/weather/weather-data-services#/login) and get the weather forecast (e.g. Rain) for the date of the calendar reminder based on the city.

## Bonus (Optional)

- Expand the calendar to support more than the current month or year.
- Properly handle overflow when multiple reminders appear on the same date.
- Unit test the functionality: *Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a city.*

## Considerations

 - Show us in the Readme all relevant information about your project.
 - The project is completely focused on Front-end. Ignore the Back-end.
 - Create your Calendar using the route `/calendar`
 - Feel free to use small helper libraries for:
 -- UI Elements.
 -- Date/Time handling.
 - **You must create the calendar component yourself**. Do not user calendar libraries like FullCalendar or Bootstrap Calendar.
 - Provide working API keys to any external API you use.
 - We have implemented Redux thunk for state management, but you may use any state manager you are familiar with.
 - Show us your capabilities on CSS and styling, if possible.

# How to deploy

 - Run `npm install` | `yarn install` to install all dependencies.
 - Run `npm start`   | `yarn run` to run the app locally.
 - You can find the project running on `localhost:3000`.
