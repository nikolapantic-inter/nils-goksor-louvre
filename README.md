# Louve - create your art galleries!

## Setup

In the project root folder, run `npm i` to install dependencies. Then, start the json db server needed to save/load galleries, `npx json-server --watch db.json --port 1337`. Lastly, start the website by running `npm run dev`

## Tech desicions

- redux toolkit: while the app could have been done without a state management tool, it felt like RTK would provide a nice structure for data fetching. It's very consise and intuitive to use.

- tailwind: easy to get started with and great for a small project like this. I have not used it professionally and want to get to know it better.

- nextui: seems like a nice component library that works well in next with tailwind, never tried it before.

## Time spent

- RTK & API setup: 90min
- component library research & setup: 30min
- create gallery page implementation: 60min
- crud + view galleries page: 60 min

## Improvements/backlog

### General

- testing
- image sizes, handle it smarter? like first loading thumbnails and then higher quality?
- user feedback when creating gallery etc, no nice component for it in next ui unfortunately

### Search

- pagination when searching for images
- tags when searching for images
- skeleton loading for better UX

### Features

- delete images in creation mode
- prevent duplicate images in a gallery
- edit galleries at later point, rm certain images etc
- select which photo in gallery that should be the gallery pic
