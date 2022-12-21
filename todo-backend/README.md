Project Name : To Do List

Technologies Used : Node Js

Steps to set up Project Locally:

git clone url
Install all dependencies locally - cmd : npm install
add live server extension in your ide to run project
Cmd to start server: npm start

Steps to push changes to Global branch

check changes with help of ide.
git add . ( to add changes in your local branch)
git commit -m "give approriate msg" ( cmd to stage changes)
git push origin main ( cmd to push changes to global branch)
Description: To do list helps you to track status of daily activites.

Functionalities: (CRUD operations are incorporated in this project)

Create/Add - you can an add a todo item
Read - Read all todo items
Upate - Update the fields of existing todo items
Delete - Delete existing Todo items

API end points:
Port: 8081

Get: http://localhost:8081/todo/items
Post: http://localhost:8081/todo/items
Delete:http://localhost:8081/todo/items?itemId=6366c02b7515e6932de5a819
Put: http://localhost:8081/todo/items
Request Body:
{
    "_id":"6366c02b7515e6932de5a819",
    "title":"Fight",  // title can't be empty
    "description":"WWE Smack "
}