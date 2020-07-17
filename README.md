# EDU LOOKBOOK
> A place where all edu profiles can be stored and accessed.

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.
   (you must have [node](https://nodejs.org) installed)
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.

## Endpoints
1. GET:`/api/users/` - to get the all the user profiles
2. POST:`/api/users/signup` - to post/signup a new user
3. POST:`/api/users/login` - to post/login a existing user
4. GET:`/api/users/:userId` - to get a user by ID
5. PATCH:`/api/users/:userId` - to update a user by ID
6. DELETE:`/api/users/:userId` - to delete a user by ID

## Environment Variables
> PORT, DB_URL, SECRET

## Contributing
You can help improve the code base of the application where neccessary by opening a pull request.