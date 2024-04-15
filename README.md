# Welcome to your Pet Portal

## Background and Overview
Pet Portal is a web application designed to simplify pet care management for pet owners. With Pet Portal, users can create profiles for their pets, track their health records, set reminders for important events like vaccinations, preventatives, and appointments, and track metrics on their pets over time. The platform aims to streamline the pet care process, providing users with a centralized hub for managing some common aspects of their pets' well-being.

## Functionality and MVP:

1. **User Authentication and Home Page:** Users must log in to access the Pet Portal platform. Upon logging in, users are directed to the dashboard where they can navigate to other sections of the application. The home page provides an overview of the user's pets, upcoming reminders, and recent activity.

2. **Reminders:** This module provides a user-friendly interface for adding, editing, and deleting reminders. Reminders can be made under several categories, including appointments/procedures, vaccines, labwork, preventatives, and contain details specific to each type of reminder.  Users can set reminders for specific dates and times, as well as assign reminders to individual pets.

3. **Pet Profiles:** Clicking on a pet from the dashboard brings users to the pet's profile page. Here, users can view individual records, health metrics, weight trends, vaccine history, and past and upcoming events or reminders. The pet profile page includes a navigation bar for easy access to different sections, allowing users to track their progress and stay organized.

4. **Dashboard:** The dashboard serves as the central hub for users to manage their pets and appointments. It displays an index of the user's pets along with any upcoming reminders or events, such as vaccinations, heartworm tests, and insurance renewals. Users can navigate to their pet profiles from here to view detailed information.

5. **Shared Heuristics Module:** As part of the MVP, Pet Portal includes a shared heuristics module accessible to non-member users. This module serves as a mock pet cost calculator, providing estimates for services based on breed, age, and other factors. It offers valuable insights for pet owners seeking financial planning and budgeting assistance.

## Technologies and Technical Challenges
-This project will be built using the MERN (MongoDB/Express backend, React/Redux frontend, Node runtime) tech stack.
- This project may also include the use of other libraries:
  - data-vis libraries like d3 or chart js.
  - 3rd party pet heuristics API for getting data on pet care costs. 

## Group Members and Work Breakdown
1. **Day 1 - User Auth and Project Setup**
- User Auth
  - MongoDB & repo setup - Andrea
  - ESLint config - Chris
- Project breakdown, assign tasks, set up PM 
  - backend User auth - Chris & Sam
  - frontend User auth - set up redux store for auth - Andrea & Jenny

2. **Day 2 - Reminders**
- Backend CRUD API endpoints for reminders - Chris & Sam
- Front end dashboard components to access Reminder module for creating/editing reminders. - Andrea & Jenny

3. **Day 3 - Pet Profiles**
- Backend CRUD API endpoints for Pets and their reminders - Chris & Sam
- Frontend components for pet profile page, +/- data vis implementation - Andrea & Jenny

4. **Day 4 - Continued frontend metrics, dashboard metrics**
- continue coordination with backend for access/formatting of documents for data vis.

5. **Day 5 - Shared heuristics module**
- coordination with backend for researching and integrating third party api. 

6. **Day 6 - Integration testing & bugfixes**
- Assess for smooth interactions and flow, accurate and reliable data served from backend, etc.