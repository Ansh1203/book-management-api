#Instructions to run the application
1. Clone this repository
   ```bash
   git clone<repository-URL> ```

2. Nagivate to the porject eg, vs code.
3. in the terminal run (the code below to install the required dependencies.
   ```bash
   npm install```
4. Set up mongodb atlas database online.
5. Run the application, put 'https://localhost:3000' on postman to use the application.
   ```bash
   npm start```
#Book Management Api
It is a RESTful api that is being used here for managing books, while allowing user to perform basic crud operations(Create, Read, Update, Delete) on book data. Moreover it perform user authentication as well using Jwt tokens and that is connected to mongodb database as well.
This API is built using node.js, express.js, mongodb(mongoose).

#API Endpoints and Usage
The Api end points are used for the user authentication, to perform CRUD operations and to filter books by year.
- **Signup**
    - Endpoint: `POST/user/signup`
    - Usage: Sends a post request to `/user/signup` with a json file containing {username, email, password} and checks if the email is real, and the password is then encrypted and a token is generated for user authentication.

- **Login**
    - Endpoint: `POST/user/login`
    - Usage: Sends a post request to `/user/login` with a json file containing {email, password} and firstly it checks the email and password match or not and based on that a token is generated.
    
- **Creating/Adding a new book**
  -   Endpoint: `POST/books`
  -   Usage: Sends a post request to `/books` with a JSON body containing book details {title, author, Year} to create a new book.

- **View/Read a list of all books**
  - EndPoint: `GET/books`
  - Usage: Sends a get request to `/books` to retrieve all the books in the database.

- **View a book specifiec to its ID**
  - Endpoint: `Get/:id`
  - Usage: Sends a get request to `/books/:id` to retrieve the book details with the specific id mentioned from the database.
 
- **Update a Book's detail**
    - Endpoint: `PUT/books/:id`
    - Usage: Sends a put request to `/books/:id` to commit changes in {title, author, Year} and the update the changes into the databases.
 
- ** Delete a Book**
    - Endpoint: `Delete/books/:id`
    - Usage: Sends a delete request to `books/:id` to delete the book entry with the specific id.

- **View a book using its publish Year**
    - Endpoint: `GET/books`
    - Usage: Sends a get request to `/books` to fetch/get the data of the book based on the specific year from the database.

Input validations are made for each process that takes places from running the api to connecting mongodb, and while signup, login process and the crud operations.
