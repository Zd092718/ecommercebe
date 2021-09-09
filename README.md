<br>
<p align="center">
   <h2 align="center">E-Commerce Back End</h2>
</p>
<br>
  <details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
  </details>
  <br>

## About the project
This is a Node.js application that uses Sequelize, MySQL and Express to build a database for e-commerce usage and storage. This application creates a database that allows users to store and access e-commerce information using different http routes. The database is organized and executed using three different models: Categories, Products, and Tags. Using Express and Insomnia, users are able to retreive different products, categories or tags by entering the according endpoints.

### Built With

* Javascript
* Node.js
* Sequelize.js
* MySQL
* Express.js

### Testing


To access the code for the generator:

* Clone the repo

    ```sh
    git clone https://github.com/Zd092718/ecommercebe
    ```
For demo video, go to https://drive.google.com/file/d/1JJdl1EVBMdjtNVqjXvNysrZ7htDdu12M/view.

1. To use this project, clone the project repository and access it from your command line. 
2. Access the /db directory in the command line and type mysql -u root -p into the command line and press enter when prompted for a password leaving it blank. 
3. Type source schema.sql to create the database.
4. Move to the main project repository in your terminal and type npm run seed to seed your database.
5. Type run npm watch to initialize the server and your database.
6. To access the proper endpoints, use http://localhost:3001/api/ as your url.
7. In Insomnia, access products, tags, or categories using the GET method and corresponding endpoints.
8. To add a new value in products, tags or categories, use the POST method and the corresponding endpoints.
9. To update an existing value, use the PUT method and the corresponding endpoints.
10. To delete an existing value, use the DELETE method and the corresponding endpoints.
### Preview Gif
<br>

![gif of project](/preview.gif)

### Contact
Zachary Dowd - zdowd2796@gmail.com 📧

Github Profile - https://github.com/Zd092718 🤖
