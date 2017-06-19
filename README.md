# Watch Something

![Screen Shot](https://i.imgur.com/ehgkayt.png)
![Wire Frame](https://i.imgur.com/nQ9b8rW.jpg)


You know when you want to watch something and you kind of know what you want to watch, but you don't really know what you what to watch?
That's where Watch Something comes in.

Select the decade and genre you want to watch and Watch Something will find you three movies to choose from. Hit search again for more.

If your selection is available on Prime, Rental or Digital purchase you can watch right now. Otherwise, you can order a copy and watch later.

Watch Something is powered by Amazon's Product Advertising API, The Movie Database API and Watch Something API.

API - https://ericproject4wsapi.herokuapp.com
APP - https://sheltered-everglades-81055.herokuapp.com


### Git Projects

### API's
The Movie Database API - https://www.themoviedb.org/documentation/api
Amazon Product API - http://docs.aws.amazon.com/AWSECommerceService/latest/DG/Welcome.html
### MVP 
Show 3 movie results based on a users query.
Find user selected movie on Amazon

### Tech
* Express - Server side development
* Node - Server side development
* React - front end
* Postgress - data base
* pg-promise - this and Blue Bird make the local database accessable to Node
* Blue Bird
* CheerioJS - parse XML data with JQuery syntax
* npm amazon-product-api - run queries to the Amazon Product API from Node
* Axios - send request to API's
* dotENV -  store API keys
### CRUD functionality
Create Entries in Watch Something API from The Movie Database API
Read Watch Something API data in the Watch Something App
Delete a movie from the Watch Something API based on id
### Wireframes and ERD's
![Watch Somtething](https://i.imgur.com/wujRn0d.jpg)
![Watch Something](https://i.imgur.com/RGh5tIP.jpg)
![Get and Render Amazon Data](https://i.imgur.com/eda4vbw.jpg)
![React State](https://i.imgur.com/IZAYKP5.jpg)
### User Stories
The users of this app are some what indecisive people. They have pretty much their go to movie taste, but can never think of what to watch. They would be so happy to be remined of a movie they have always meant to watch but have forgotten about or be reminded of an old favorite. While tastes varies, the option to choose your genre means that no matter what a user is into, they can find something to watch.

1. As a user I want to be presented with three choices of movies to watch when I don't know what I want to watch based on my genre preference and decade of choice.
2. When I select the movie that I want to watch, I want to see the movie details 
3. Then I want to be linked to Amazon Video to watch it.

### Aproach
After deciding on the project Idea I skeched a wireframe

### Download and Install
This project requires NodeJS and Postgress to be installed 
Before downloading please obtain an API key from The Movie DB as well as a key, secret key and AWS tag for the Amazon Product API (links are at the beginning of this document).

Fork and git clone this project.

npm install. 

Seed a database using schema.sql located in models folder.

Replace process.env text with associated api keys and credentials or create a .env file and link to keys there.

npm start on both App and API.

By default the Watch Something App is linked to the web hosted Watch Something API - change that to the local port Watch Something API is running.



## POST MVP
* iframes ( modal to Amazon when user selects a movie to watch )
* ThreeJS
* React Native 

## 





