# README for CookIt.com

## Intro

CookIt is a food plan delivery business, they would like an interactive part of their website that allows users to create a meal plan suited for their dietary needs, adn any other requirements that they need.

The needs of the web application from the founder are

To allow potential customers to add their own data
To have the web application be personal to the user
To have them able to create a plan by day or week
To be able to see the recipes in each plan
Easy access to recipes of plans that they like

![image of mockups](assets/readme/assets/device-mockup.png)

[live site](https://josephwoodland.github.io/MS2---Cookit.com/)

## Index

- <a href="#The-Website-Brief" >The Website Brief</a> 
- <a href="#ux">UX</a>
- <a href="#design">Design</a>
- <a href="#testing">Testing</a>
- <a href="#deployment">Deployment</a>
- <a href="#future">Future Features</a>
- <a href="#credits">Credits</a>

<span id="#The-Website-Brief"></span>
  
# The Website Brief

This is a copy of the [brief](assets/readme/Assets/Brief - Cook it.pdf)


## Summary of the brief

The app is going to be linked from the bigger website and linked directly from email. The purpose of the app is to get people interacting with the brand, so they can be targeted in future campaigns trying to sell the meal plan section of the business. 

The site should - were possible be on one screen - not linikng to different pages to make it feel quicker.

The site should be as clean as possible and not cluttered, easy and clear to navigate. 

They requested a Desktop first design that is mobile friendly - they have an idea of there customer using a laptop or desktop to order there food plan so marketing will be focused around that.

<span id="#ux"></span>
  
# UX

### Target Audience

The target audience for this project is single busy professional. Who works on there laptop or desktop, has the money to afford to pay for a meal plan. 

## Website Goals

### Client 

- To make an easy to use and understand web application.
- To create something that will get users coming back each week.
- Needs to have some sort of personal aspect to the site.
- Does not move the users around different  pages to make the app feel quicker.

### Users

- As a user, I want to be able to have a program create a meal plan for me
- As a user, I want to be able to have the plan fit to my diet.
- As a user, I want to have access to recipes that I can cook myself.


## User Journey

This is an example of a successful user journey.

### User

I have been redirected to this app via an emai.
I am interested in looking at the meal plan creator. 
I can find and input easily all of my dietary needs.
I can quickly see what suggestions have been made by the computer
I like the suggestions I have been given and will save the results
I can quickly see from the plan how to make each recipe
I can store these recipes separate so I can have quick acces to them during the plan that has been created for me. 
That was easy I will use it next week.

## Sections of the Web App

### General Layout

Given the brief from the client, we are looking at a desktop first approche, making the app a single static page that filles the screen and will adapt to each screen size. They would like pop up modals to show different information.

### Navigation bar

The navigation bar will be static and have space to add and hide interactive buttons if needed.

### Home section

Home section shlud be clean and have enough space to fit all the necessary potential information that is needed. I.e a weekly meal plan. All easy to see and understand. 

###  Popup Modal

Modal must carry on with inline witht he brand and design of the web app. Must have enough space in the main section of the modal to fill in all the necessary information from potential recipes. Also must be easily accessible and made simple to navigate out of.

Must be interactive and not moving from place to place to create a better user experience.


### Footer

Footer on this project is not to important, no information is needed in there -  just have a picture there to break up the page a little.

## Wireframes

Here is a sample of the original wireframes for the app approved by the client.

![desktop](assets/readme/xd/landing.png)

Other wireframes can be downloaded [here in xd format](assets/readme/xd/Cookit - Wireframes.xd)
<span id="#design"></span>

# Design

The design elements were influenced and informed by the client’s brief, specifically the client’s brand guidelines which included the look and feel and TOV (tone of voice).

## Font

### Copy

-Noto Sans JP and as a back up sans-serif


### Main colours

Brand colours are ![brand](assets/readme/assets/xd/colourPalette.png)


## Features for the website

### Responsive design on all devices

- Website must be functional on all screen sizes

### Interactive page

- Page HTML must be interactive for the user and feel fluid


## Technologies Used

### Languages

HTML5 - I used HTML 5 for the layout and structure of the website.

CSS - CSS has been used to style the HTML 5 elements.

Vanilla JavaScript - Javascript has been used to make the HTML 5 elements interactive for the user and to mutate the onscreen HTML


## API - Spoonacular

I used the Spoonacular API to work with using javascript to make calls the API and fetch the data. 

Follow the link to see the API documentation.

[Spoonacular](https://spoonacular.com/food-api/docs/)

## Styling Architecture - SCSS

As I am coding different elements on the page, some that are only visible on user interaction, I have decided to use SCSS architecture to write my code.

Using the import feature of SCSS would first allow me to structure the architecture of the project in a much cleaner way. This style of architecture allows for smaller files that can be easily connected, and identified. 

Allwing the use of variables makes it easy if there is any brand change that could potentially come up.

Using the nesting feature of SCSS allows for cleaner code making site upkeep and bug fixes easier to locate and address.

## Coding Architecture - Model - View - Controller

I am using the MVC(Model - View - Controller) architecture to organise my JS files. I fond this way of organizing my file base easy to understand, and clean to look at, and designed in a way to reduce the length of single js files.

The Model.js page is there to handle all the data that is used by the app, this makes it easy to try and look for any problems with the use of data.

The View.js files are handling anything to do with changing the view of the HTML, anything that prints ad replaces HTML

The Controller.js file will have anything to do with the connectin between the two. Calling the initial information needed to start the app. 

## VS Code

I used VS Code as my code editor. In the code editor, the extensions that I used were:

- Prettier - to automatically format my code for basic formatting mistakes and to have a consistent style throughout the code.
- Npm - I used this extension to give npm support for the version of VS Code I have.
- Image preview - I used this extension that shows a preview of any linked images in my code to help me quickly identify if the URL path is correct and to identify the right image.
- Markdown all in one - I used this which enabled me to edit the readme file with live preview in VS Code.

## Node modules

I used basic node modules to help me code in a smoother and more organised approach.

- Devsever - I used the dev server module to live to reload my project, on a change of the code. This made it easier to see changes I had been making to the code.

- Node-sass - I used this to node so I could use the SCSS file and architecture.

- Watch sass - I used this module to compile the SCSS structure and architecture that I was using into a CSS format.

- Autoprefixer - I used this extension to add prefixes to my code for added browser support.

- Font Awesome - I used this extension to integrate free icons into the page.

## Outside libraries

- Google font - I used the Google font library for the font family on the website.

## CSS Pseudo-classes

- Hover: I used the hover class to change the state of various items over the page, all buttons, and icons. This is a familiar convention that signals to the site visitor the interactive site elements/features they can engage with.

## JavaScript 

Methods - I used alot of built in methods throught this project, 

## Software Used

- Git - This was used to manage the different versions of my project, using different branches to test and add new features/sections to the website. Once tested they were then merged into the master branch and then, using Git Desktop pushed to the Git Hub repository.

- Git Desktop - I used this to manage commits and push them to the GitHub repository

- GitHub - I used GitHub to store the version of the project remotely.

- Adobe XD - I used XD to create and build the wireframes, to design some of the unique icons on the page and the unique colour patterns on the page.



## Online resources

### [W3 Schools](https://www.w3schools.com/)

### [Stack Overflow](https://stackoverflow.com/)

### [npm](https://www.npmjs.com/)

### [MDN](https://developer.mozilla.org/en-US/)

<span id="#testing"></span>
 
# Testing
