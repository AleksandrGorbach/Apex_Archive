# Apex_Archive

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Apex Archive** is a full stack application that allows users to browse through the Apex Legends character list. Users that have created an account can create, update and delete posts tied to their account.

<br>

## MVP

_The **Apex Archive** MVP is to have full CRUD with a signin/signup, landing page and a detail page showcasing more in depth versions of the cards that will be displayed on the landing page._

<br>

### Goals

- _Incorporate materialui or tailwind,_
- _Have the landing page display the different characters via the card component._
- _A form page where authorized users can create their own post._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend creation._                       | 
|   React Router   | _Routing endpoints for the pages._         |
|      Axios       | _Making calls to the database._            |
|       Jwt        | _Authentication for users._                |
|      Rails       | _Backend for the db, models and controllers._ |
|      Heroku      | _For deploying the backend._               |
|      Netlify     | _For deplaying the frontend._              |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Home Page](https://i.imgur.com/6w85OA8.jpg)

- Desktop Landing

![Detail Page](https://i.imgur.com/MEoWX18.jpg)

- Detail Page

![Form/Post Page](https://i.imgur.com/rFSwgYd.jpg)

- New Post Page

![Sign-In](https://i.imgur.com/O2cHTBq.jpg)

- Sign-in

#### Component Tree

![Component Tree](https://i.imgur.com/Sy9GMJH.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__Header
           |__ Header.jsx
           |__ Header.css
      |__Navbar
           |__ Navbar.jsx
           |__ Navbar.css
      |__Footer
           |__ Footer.jsx
           |__ Footer.css
      |__Filter
           |__ Filter.jsx
           |__ Filter.css
|__ screens/
      |__Home
           |__Home.jsx
           |__Home.css
      |__Articles
           |__Article.jsx
           |__Article.css
      |__DetailPage
           |__DetailPage.jsx
           |__DetailPage.css
      |__SignIn
           |__SignIn.jsx
           |__SignIn.css
      |__SignUp
           |__SignUp.jsx
           |__SignUp.css
|__ services/
        |__ users.js
        |__ apiConfig.js
        |__ articles.js
        |__ categories.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Skeleton    |    L     |     1 hrs      |     2 hrs     |    3 hrs    |
| Routes and Seed     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Backend CRUD        |    H     |     2 hrs      |               |             |
| Authorization       |    H     |     1 hrs      |               |             |
| Frontend file setup |    M     |     1 hrs      |               |             |
| Frontend CRUD       |    H     |     2 hrs      |               |             |
| Home Page           |    H     |     3 hrs      |               |             |
| Detail Page         |    H     |     3 hrs      |               |             |
| Edit Page           |    H     |     3 hrs      |               |             |
| Post page           |    H     |     3 hrs      |               |             |
| Sign In             |    H     |     3 hrs      |               |             |
| Sign Up             |    H     |     3 hrs      |               |             |
| Styling Skeleton    |    H     |     2 hrs      |               |             |
| Styling with MUI    |    H     |     2 hrs      |               |             |
| MediaQ              |    H     |     3 hrs      |               |             |
| Debugging errors    |    H     |     3 hrs      |               |             |
| Deployment          |    H     |     2 hrs      |               |             |
| Mock presentation(s)|    H     |     2 hrs      |               |             |
| TOTAL               |          |     42 hrs     |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/U5oJpuv.png)
<br>

***

## Post-MVP
- Having a seperate screen for articles related to the meta
- Styling with MUI or Tailwind
- Cards with on hover drop down that provides additional details
- Likes & sorting based on likes

***
