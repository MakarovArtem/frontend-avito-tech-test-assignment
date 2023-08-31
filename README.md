# For you

Hello! I don't know who you are and how you've been doing lately. But I hope, that everything is okay, and I sure know that everything will be so. Thank you for checking my work. I have been trying to do well. Good luck you, me, and every student, who wants to became developer!

# Installation

There is no nothing special about installation of this application.

First clone the repository on your computer:
```
git clone https://github.com/MakarovArtem/frontend-avito-tech-test-assignment
```

When it is downloaded (sorry, cloned) you need to go to the app and install all the dependencies for the project:
```
cd myproject

npm install
```

Now you want to start the application:
```
npm start
```

There are some other scripts, you can look them up in *package.json* file.

By the way, if you use yarn, you run these commands:
```
yarn dev

yarn build
```

# About the project

This is an application for gamers. Here you can explore large database of games of any genre and type.

On main page there is a list of games. You can sort them and filter by genre and platform. All these filters work along By clicking on the game card you will go to the game page. 

Game page is more interesting thing. Here are displayed more information about the game you have chosen:
- title
- release date (in Russian format)
- publisher
- developer
- genre
- image/poster
- carousel of screenshots
- system requirements

And of course, you can go back to main page by clicking on big blue button.

## Traffic using

Don't you worry about your internet traffic. You can easily navigarte between pages - all data needed to display interface are saved, unless you close the application.

# Key technologies

For the project were used not so much of technologies. **React**, **Redux-toolkit**, **Ant Design**, **React Router v6** a liiiitle bit of CSS modules.
I also installed and configure linters for TS and CSS files **Eslint** and **Stylelint**. Installed tests **Jest**. And cherry on the top **Vite** - I didn't use CRA hoorayyyy.

# How I solved optional tasks

TypeScript - it is the standard of frontend now.

Thousands of titles.. Seems heavy for browser. So instead of filtering data in browser I decided, that it is more smart to use backend: make requests with query parameters.

Unit tests - it is easy. But unfortunately, I didn't have enough time for all tests. But I installed Jest and write test for a utility.

Other tasks are for my future practicing.

# A little bit about the app (some humour time)

## Typescript

Who came up with TypeScript?? It is good for code consistency, decreasing of errors, autocomplite in IDEs and stuff but sometimes you just want to use:

```
@ts-ignore 
```

## Comments

If I leave lots of comments - don't worry. I think my code is quite easy to read BUT if it's not, it'd be nice of me to explain some constructions, coz I think you are gonna need a lot of time to check apps of all students.

## Errors in displaying

Browser games do not have minimal system requirements, like this one: https://www.freetogame.com/api/game?id=432
You could make sure if go to that link, copy JSON and then go to the site and look at it in pretty formatting: https://jsonformatter.org/json-pretty-print

## ReduxPersist

Having a whole library for a single purpose? Yes, that is a good idea. Joking. But Redux-persist is good for using. I needed to save data of games for 5 minutes - I did it.

## Design

I love frontend. One of the key reasons - you can see and affect on design of an application. But. I'm certainly no designer. I can't coe up with good one. I just can to make a layout, taste it and tell my designer if it is good or too good. So, I'm sorry for the appearance of my app. It work great though!

## Easy Peasy Lemon Squeezy

What was easy in the development? Nothing. Joking again. Easy task was for the app to launch on localhost:3011 port haha.
What was not so easy - Ant Design. I haven't used UI-frameworks. But it looks fun. Though sometimes you still need good old CSS.