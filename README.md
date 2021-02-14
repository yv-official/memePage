The server end point is https://backend-xmeme.heroku-app.com/api/v1

To get all the memes place a GET request to /memes
to get a particular meme, place a GET request at /memes/id where id is the id of meme in database
To add a meme to database, place a POST request at /memes with the required payload 
To edit/update a meme, place a PATCH request at /memes/id