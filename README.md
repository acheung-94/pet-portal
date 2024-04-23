
![alt text](./readme/image.png)

[🐾 Live Demo ](https://mern-pet-portal-4c9fd5ba0b2f.herokuapp.com/)
## Background and Overview
Pet Portal is a web application designed to simplify pet care management for pet owners. With Pet Portal, users can create profiles for their pets, track their health records, set reminders for important events like vaccinations, preventatives, and appointments, and track metrics on their pets over time. The platform aims to streamline the pet care process, providing users with a centralized hub for managing some common aspects of their pets' health.

## Features:
Users must log in to access the Pet Portal platform.
There is a demo user available to try out these features!

1. **Dashboard:** The dashboard serves as the central hub for users to manage their pets and appointments. It displays an index of the user's pets along with any upcoming reminders or events, such as vaccinations, labwork, and vet appointments. Users can add new pets to their dashboard and upload a profile photo. From here, users can navigate to their individual pets' profiles to view/edit detailed information. 
![alt text](./readme/image-5.png)
![alt text](./readme/image-4.png)
2. **Pet Profiles:** Users can view individual pet summaries, including physical characteristics and microchip/insurance information. Profiles also house reminder modules that categorize reminders by type and display details for vaccines, medications, and appointments. Users may edit or delete their pet's profiles from here as well.
![alt text](./readme/image-2.png)
3. **Reminders:** This module provides a user-friendly interface for adding, editing, and deleting reminders. Reminders can be made under several categories, including appointments/procedures, vaccines, labwork, preventatives, and contain details specific to each type of reminder.  Users can set reminders for specific dates and times, as well as assign reminders to individual pets.
![alt text](./readme/image-1.png)

## Technologies
**Front End**
- ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![css](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

**Back end**
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Cloud**
  - ![aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
## Development Team and Work Breakdown
[Andrea Cheung](https://github.com/acheung-94) - Frontend flex | [Christopher J. Trent](https://github.com/ChristopherJTrent) - Backend Lead | [Sam Kim](https://github.com/sam-kim99) - Backend flex | [SoHyun Jang](https://github.com/shjang1025) - Frontend Lead

1. **Day 1 - User Auth and Project Setup**
- User Auth
  - MongoDB & repo setup - Andrea
  - ESLint config - Chris
- Project breakdown, assign tasks, set up PM 
  - backend User auth - Chris & Sam
  - frontend User auth - set up redux store for auth - Andrea & Jenny

2. **Day 2 - Pet Profiles**
- Backend CRUD API endpoints for Pets and their reminders - Chris & Sam
- Frontend components for pet profile page, +/- data vis implementation - Andrea & Jenny

3. **Day 3 - Reminders**
- Backend CRUD API endpoints for reminders - Chris & Sam
- Front end dashboard components to access Reminder module for creating/editing reminders. - Andrea & Jenny

4. **Day 4 - Reminders, continued**
- continue coordination with backend for access/formatting of documents for reminders, run integration tests along the way.

5. **Day 5 - Polishing**
-  UI/UX improvements, code optimization, debugging
- develop plans for Yelp API for a potential Find A Vet feature. 

6. **Day 6 - Deployment & bugfixes**
- Assess for smooth interactions and flow, accurate and reliable data served from backend in production environment, etc.
- Heroku deployment, allow time to debug potential production bugs.