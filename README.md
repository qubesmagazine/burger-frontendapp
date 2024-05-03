 

Introduction

In this article, I share my experience building a React Native burger app using Expo Go, Redux Toolkit, and various other packages. This project demonstrates how to create a complete mobile app for a food ordering system and includes a backend to support the frontend functionality. I discuss key decisions, packages used, and the challenges I overcame to deliver a fully functional application. The QR code below allows you to view the app on Expo Go, and the GitHub links provide access to both the frontend and backend code.

Project Overview

My burger app aims to provide users with an intuitive and straightforward way to order burgers and other food items. The application has the following features:

Browse Menu: Users can view available burgers and other menu items.
Add to Cart: Users can add items to their shopping cart and adjust quantities.
Checkout: Users can review their order and proceed to checkout.
Order Tracking: Once an order is placed, users can track its progress.
Tech Stack
For this project, I used the following technologies:

Frontend: React Native with Expo Go
Backend: Node.js with Express
State Management: Redux Toolkit
Data Fetching: Axios
Maps: react-native-maps
Redux Integration

Redux is a popular choice for state management in React applications, but it has evolved significantly. I utilized Redux Toolkit, which simplifies Redux setup and provides best practices by default. Here's how I structured Redux in this project:

Slice Creation: Using createSlice from Redux Toolkit, I created slices for managing cart items, orders, and user data.
Thunk Actions: For asynchronous actions, such as fetching menu data from the backend, I used createAsyncThunk.
Selectors and Memoization: To improve performance, I utilized reselect to create memoized selectors for accessing Redux state.
The flexibility of Redux Toolkit allowed me to quickly implement the desired functionality while maintaining code readability and simplicity.

Backend and Data Handling

The backend for this project is built with Node.js and Express. It provides a RESTful API for fetching menu data, handling orders, and user authentication. The backend is designed to be modular and scalable, allowing easy integration with the frontend.


Key Backend Components
Express Router: For defining API endpoints.
Database Integration: A schema-based database structure for consistent data handling.
Data Validation: Middleware to ensure valid data is passed through the API.


![alt text](<Screenshot 2024-05-03 at 01.41.01.png>)

Conclusion and Resources

Building this burger app with React Native, Expo, and Redux was a rewarding experience. It taught me the importance of robust state management, backend integration, and efficient data handling. I hope this article provides valuable insights for other developers working on similar projects.

You can find the complete code for both the frontend and backend on my GitHub repository:

Frontend GitHub Repository
Backend GitHub Repository
I welcome feedback and questions from fellow developers. Feel free to leave comments or open issues on GitHub if you have any suggestions or run into issues while exploring the code.

Thank you for reading, and I hope you find this article helpful!