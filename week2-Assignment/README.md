## WEEK 1: ASSIGNMENT

Your first assignment is to create a basic web page with HTML and CSS.  Your page must
include the picture of any actor/actress, a heading with their name, and a link to their wikipedia
page.  Underneath should be a table that lists some their movies, under table headers labeled title
and year.  Finally, add an input date form that allows for the user to choose the month, day and
year from a dropdown menu.

Use CSS to manipulate background color, font-color, height and width of image
and text. Add a border to the table with headers and manipulate size and color as well.  Finally, use
html heading tags to manipulate text size.

## WEEK 1: ASSIGNMENT SETUP

  1. In your terminal command, type `npm install watch-http-server -g`

     This will install a simple, zero-configuration command-line http server.

  2. Next you must clone a git repository that contains week one assignment instructions
  and a basic html shell for your first html/css project.

  3.  Remember your Terminal Commands!  

      Make a directory for your cloned code.

        `mkdir week1`

      Change your working directory to week1

        `cd week1`

      Clone the code you need into the directory you just created.

        `git clone https://github.com/steveflint3/week1-Assignment.git`

      Open your cloned code in Atom

        `atom .`

  4. Sanity Check!!!  It is always important to make sure that your code will run as
  intended by entering something simple.  Here, we want to make sure that the http server
  we downloaded from NPM will run our simple HTML shell. In your index.html file, inside
  the body tag, enter the following line...

      `<div>Hello World</div>`

    Press `command s` on your keyboard to save the changes.

    Now, go to your terminal command, make sure you are in your cloned git directory "week1".

    Now run your simple http server...

      `watch-http-server`

    When you run this command, you will see the following line...

      `Starting up http-server, serving ./ on: http://0.0.0.0:8080`

    This line shows the local port where your code will run.

    Go to your browser and enter the following address...

      `http://localhost:8080/`

    Now you should be able to see your "Hello World" in the upper left hand corner of your browser.

    Congratulations!  You have just run your first HTML code.  Now, follow the instructions below
    to complete your first assignment in your HTML shell.
