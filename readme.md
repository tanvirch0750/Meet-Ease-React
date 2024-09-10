# Meet Ease: Meeting Room Booking System for Co-working Spaces

## Overview

Meet Ease is a comprehensive platform designed to simplify the process of booking meeting rooms in co-working spaces. The system offers a seamless experience for both regular users and administrators, featuring real-time availability, secure transactions, and robust management tools.

### live link: https://meet-easee.netlify.app/

---

## Table of Contents

1. [Public Pages](#public-pages)
2. [User Authentication](#user-authentication)
3. [Meeting Room Listings](#meeting-room-listings)
4. [Booking Process](#booking-process)
5. [Admin Features](#admin-features)
6. [Bonus Features](#bonus-features)
7. [Deliverables](#deliverables)

---

## Features

### **User Features**

- **Real-Time Room Availability**: Users can check real-time room availability and book instantly.
- **Instant Booking Confirmation**: Upon successful booking, users receive an instant confirmation.
- **Flexible Scheduling**: Allows users to book rooms for specific times based on their needs.
- **Customer Testimonials**: Positive feedback from previous users displayed on the landing page.
- **Responsive Design**: Fully responsive interface for desktop and mobile users.
- **Search & Filter**: Easily search for rooms based on name or keyword and filter by capacity or price.
- **My Bookings Page**: Users can view and manage their bookings with details about each reservation.
- **Secure Payment Integration**: Payment options integrated for a smooth checkout process.
- **Scroll to Top Button**: Quick navigation to the top of the page for enhanced user experience.

### **Admin Features**

- **Room Management**: Admins can create, update, and delete rooms with real-time updates.
- **Slot Management**: Manage time slots for rooms, including adding and removing slots.
- **Booking Management**: Admins can approve or reject bookings and manage booking statuses (confirmed/unconfirmed).
- **User Role Management**: Admins can promote users to "ADMIN" role.
- **Dashboard**: Provides a summary of total bookings, revenue, available slots, and recent bookings.

### **Security Features**

- **Role-Based Access Control**: Only authorized admins can access admin functionalities.
- **Token-Based Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Form Validation**: All forms feature robust validation, ensuring correct user input.
- **Secure Transactions**: Payments processed through trusted services like Stripe.

---

## Public Pages

### 1. Homepage / Landing Page

- **Header Section / Navbar**:

  - Logo/System Name redirects to the homepage.
  - Links: Home, Meeting Rooms, About Us, Contact Us, Login/Register.
  - User Icon: Links to "My Bookings" or "Dashboard" based on user role.

- **Hero Section**:

  - Eye-catching banner featuring a modern workspace.
  - Headline: "Book Your Ideal Meeting Room with Ease."
  - CTA Button: "Book Now" redirects to Meeting Rooms.

- **Service Advertisement**:

  - Features: Real-Time Availability, Instant Booking Confirmation, 24/7 Support.

- **Featured Rooms**:

  - Display of rooms with image, name, capacity, price per slot, and "See Details" button.

- **Additional Sections**:

  - "Why Choose Us?" emphasizes ease of booking and security.
  - "How It Works" illustrates steps to booking with icons.
  - Customer Testimonials presented in a carousel.

- **Footer Section**:
  - Contact Info: Email, phone, office address.
  - Social Media Links.
  - Legal: Privacy Policy, Terms of Service.

### 2. About Us Page

- **Sections**:
  - Our Mission, Meet the Team, and Our Story.
  - Creative presentation with animations and visuals.

### 3. Contact Us Page

- **Content**:
  - Email, phone, and office address.
  - Contact Form with fields: Name, Email, Subject, Message.
  - Animated form elements.

### 4. Error Pages

- **Custom 404 Page**:
  - Provides navigation options back to safe pages (e.g., Home, Login).

---

## User Authentication

### 5. Sign Up and Login Pages

- **Sign Up Page**:

  - Form Fields: Name, Email, Password, Phone, Address.
  - All users are assigned the "USER" role by default.
  - Admin role can be promoted by an existing admin.

- **Login Page**:
  - Token-based authentication for secure access.
  - Proper error handling for invalid credentials.

---

## Meeting Room Listings

### 6. Meeting Rooms Page

- **Room Listings**:
  - Card View: Image, Room Name, Capacity, Price per Slot.
  - Search and Filter Options: By name, capacity, price.
  - Sorting: By price (ascending/descending).
  - Clear Filter button resets filters.

### 7. Room Details Page

- **Detailed Room Information**:
  - Display of multiple images, room name, floor, capacity, and amenities.
  - "Book Now" button navigates to the booking page.

---

## Booking Process

### 8. Booking Form

- **Form**:
  - Date and Time Selection via calendar (shows available slots).
  - Pre-filled user information.

### 9. Confirmation and Payment Page

- **Summary**:
  - Booking details: Room name, date, time, and total cost.
  - Payment options with secure integration.
  - Confirmation modal with a thank you message.

### 10. My Bookings Page

- **Booking List**:
  - Displays all user bookings with room details, date, time, and status (confirmed/unconfirmed).

---

## Admin Features

### 11. Admin Dashboard

- **Room Management**:

  - Create, update, and delete rooms with real-time updates.

- **Slots Management**:

  - Create, update, and delete time slots.

- **Booking Management**:
  - Approve or reject bookings, and delete bookings with confirmation prompts.

---

## Bonus Features

- **Debounce API Calls**: Improved search performance.
- **Animations**: Micro-interactions for smoother user experience.
- **Payment Integration**: Secure processing via Stripe or similar.
- **Scroll to Top Button**: For easier navigation.
- **GitHub Contributions**: A minimum of 15 meaningful commits.

---

## Deliverables

- Fully functional, responsive frontend integrated with backend.
- Separate user and admin dashboards.
- Clean, well-organized, and documented code.
- Creative solutions for integration challenges.

---

This documentation provides an overview of the features, user flows, and technical requirements for "Meet Ease." Follow the guidelines to ensure the best possible user experience.
