# Work Day Scheduler

## Overview
The Work Day Scheduler is a simple, dynamic calendar application designed to help employees manage their busy schedules effectively. It allows users to save events for each hour of a typical working day, from 9 AM to 5 PM. Built using HTML, CSS, and jQuery, this app features a user-friendly interface with dynamically updated content.

This application utilizes the [Day.js](https://day.js.org/en/) library for date and time manipulation, ensuring accurate and up-to-date scheduling.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am–5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## How to Use


1.View Current Date: Open the app to see today's date displayed at the top.
2.Add Events: Click on a time block to enter an event for that hour.
3.Save Events: Click the save button next to the time block to store your event.
4.View Color-Coded Blocks: Each time block's color indicates whether the hour is past, present, or 
future relative to the current time.

Feel free to explore and manage your daily work schedule effectively with this intuitive scheduler!

## Features

- **Dynamic Date and Time Display**: The current date is prominently displayed at the top of the calendar, and it updates in real-time.
- **Interactive Time Blocks**: Time blocks for each hour allow users to input and view events. Each block changes color based on whether the time is in the past, present, or future.
- **Local Storage Integration**: User input is saved to local storage, ensuring that data persists even after refreshing the page.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.

## Screenshots

- ![Screenshot 1](./assets/readme_screenshots/Screenshot1.png)
- ![Screenshot 2](./assets/readme_screenshots/Screenshot2.png)

## Live Application

Access the live application here: [Work Day Scheduler](https://mbarrie1979.github.io/Work-Day-Scheduler/)


## Credits
[Original Code Repo](https://github.com/coding-boot-camp/crispy-octo-meme)
- **Additional Code**: Mark Barrie

---


