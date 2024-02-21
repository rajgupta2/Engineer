A project named- Engineer
It is a project for study and contribution of their works/notes.

You can view its user interface in youtube- https://youtu.be/rQkK3G8do0U?si=VIXiMDeWeyTOUuCe

If you want this project to work then clone the repository
and then run the below command-

npm install at root directory
and create a models folder at root directory and create Notes.js in it.
and create a public folder and inside public create Notes folder.

Inside Notes folder you have to upload your file to show in UI.
and Place the below template in models/Notes.js-

var Notes=[
    {
        Subject: "C",
        Description: "Mother language.",
        Notes: "/Notes/C.pdf",
        Tutorial: "https://www.w3schools.com/c/index.php",
        Practice: "https://www.w3schools.com/c/index.php"
    }
]
export default Notes;


Now, to run the application, run the command- npm run dev.


Thanks for Reading.
