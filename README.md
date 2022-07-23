# Tetlier
[Sections]() | [Installation](https://github.com/Tetlier/Atelier#installation) | [Demo](https://github.com/Tetlier/Atelier#demo)
Tech stack used: ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

Welcome to Tetlier, an online e-commerce marketing website displaying various unique styles of clothing!

This e-commerce attire website features a product overview, ability to add products to a cart, a reviews section, and a question-and-answers section. The information is pulled from an API database. This product has been formatted to fit all devices. 

# Sections

This project has 4 main sections and various functionalities:

1. Overview:
      This section displays the features of a product - including the styles, price, color, and sizing.
      The product may be viewed more closely via zoom features by clicking on the displayed image.
      Various other clickable styles of a product may be selected in the style selection space.
      An image carousel and arrow buttons may be used to switch between different photos of the style.
      The products may be added to a cart for later checkout. Users can share the product to different social media platforms.

2. Other Products:
      This section displays other products available for sale, which are clickable to change the selected product.

3. Reviews & Ratings:
      This section displays the overall ratings and reviews of the product posted by users.
      The ratings are filterable by clicking on the star ratings, drop-down bar, and entering text in the search bar.
      Clicking on the 'MORE REVIEWS' button displays 2 more reviews each time in a scrollable section.
      Users may mark the helpfulness of reviews.
      Clicking on the 'ADD A REVIEW' button opens a form that allows the user to input their review/ratings.
      Various inputs of the form are mandatory (marked by asterisks), and will not submit if not met.
      When adding a review, users may upload photos, which can be clicked on and expanded.

4. Questions & Answers:
      This section displays the questions and answers of the products, in order of most to least helpfulness.
      The questions are filterable by a search bar.
      Users may mark the helpfulness of questions and answers.
      Questions and answers may be reported, after which they will no longer be visible to users.
      Clicking on the 'LOAD MORE ANSWERS' button will display all answers for the question.
      Clicking on the 'MORE ANSWERED QUESTIONS' button will display 2 more questions in a scrollable section.
      Forms are available to add questions and answers.
      When adding an answer, users may upload photos, which can be clicked on and expanded.

*Dark Mode*:
      A dark mode button with a moon icon on the top right screen will follow the user as they scroll down.
      Clicking on the moon will turn the dark-mode feature on for the user. The moon then becomes a sun.
      Clicking on the sun will turn off dark mode.

# Installation
To start this application, run the following commands in the terminal:

$ npm install (installs dependencies)

$ npm run build (creates bundle using webpack)

$ npm run start (runs the server on localhost: 3000)

# Demo
Overview: 
![](https://github.com/Tetlier/Atelier/blob/main/overview-section.gif)

Dark mode and Other Products: 
![](https://github.com/Tetlier/Atelier/blob/main/dark-mode%20and%20other-products.gif)

Reviews: 
![](https://github.com/Tetlier/Atelier/blob/main/reviews-section.gif)

Questions & Answers: 
![](https://github.com/Tetlier/Atelier/blob/main/questions-section.gif)
