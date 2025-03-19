# 📘 Engineer

**Engineer** is a project designed for organizing and sharing study materials, notes, and tutorials. Built with **Next.js**, it provides an organized way to manage and access study materials. 

## 🌐 Live Demo
- **Hosted on GitHub Pages**: [View Here](https://rajgupta2.github.io)
- **Project UI Overview (YouTube)**: [Watch Video](https://youtu.be/rQkK3G8do0U?si=VIXiMDeWeyTOUuCe)

---

## ✨ Features

- 📚 Organize and store notes for various subjects.
- 🔗 Direct links to tutorials and practice materials.
- 🎨 Clean and responsive UI built with **Next.js**.
- 📝 Easy contribution and customization.

---

## 🚀 Installation & Setup

Follow these steps to set up and run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rajgupta2/rajgupta2.github.io
cd rajgupta2.github.io
```

### 2️⃣ Install Dependencies  
Run the following command to install all required dependencies:  

```bash
npm install
```

### 3️⃣ Run the Application
```bash
npm run dev
```
This will start a development server at http://localhost:3000.

## 🛠 Contribution Guidelines  

We welcome contributions to improve and expand this project! Follow these steps:

### 1️⃣ Fork the Repository  
Click on the **Fork** button at the top right of this repository to create a copy under your GitHub account.

### 2️⃣ Clone Your Forked Repository  
Run the following command to clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rajgupta2.github.io
#Replace your-username with your actual GitHub username.
```

### 3️⃣ Create a New Branch  
Before making any changes, create a new branch to keep your work organized and separate from the `main` branch:
```sh
git checkout -b feature-branch
#Replace `feature-branch` with a meaningful name related to your changes, such as `add-new-notes` or `fix-ui-bug`.
```

### 4️⃣ Make Your Changes  
Now, make improvements to the project. You can:  
✅ Add new study materials or notes in **public/Notes** folder and also add entry for it in **models/Notes.js** file like below one:  
```bash
var Notes=[
    {
        ....
    },
    {
        Subject: "Your Subject",
        Description: "Description.",
        Notes: "/Notes/pdf-name-with-extension",
        Tutorial: "Tutorial Link",
        Practice: "Tutorial Practice"
    }
]
export default Notes;
```
✅ Fix bugs and improve performance  
✅ Enhance the UI for a better experience  
✅ Improve documentation  

### 5️⃣ Commit Your Changes  
Once you've made the necessary updates, it's time to commit your changes.

1. **Stage all modified files**  
    ```bash
   git add .
    ```
2. **Commit with a meaningful message**
    ```bash
    git commit -m "commit_message"
    ```
💡 _Tip: Write a clear commit message describing your changes._  

### 6️⃣ Push Your Changes  
Send your updates to your GitHub fork:  
    ```bash
    git push origin feature-branch
    ```

### 7️⃣ Submit a Pull Request  
1. Go to the **original repository** on GitHub.  
2. Click on the **Pull Requests** tab.  
3. Click **New Pull Request** and select your **forked repository & branch**.  
4. Provide a meaningful description of your changes.  
5. Click **Create Pull Request**.  

🎉 Congratulations! Your contribution is now under review. 🚀  

---

## 📜 License  

This project is open-source and available under the **MIT License**.  
Feel free to use, modify, and distribute as per the license terms.

---

## 🙌 Acknowledgments  

- **Project by**: [Raj Gupta](https://github.com/rajgupta2)  
- **Built with**: ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white)  
- **Inspired by**: A passion for collaborative learning 🚀  

---

💡 _If you find this project useful, consider giving it a **star ⭐** on GitHub!_
