# React Native Chat App

A cross-platform mobile chat application built with **React Native** and **Expo**, designed to deliver a fast, accessible, and media-rich messaging experience. The app allows users to exchange text messages, images, and real-time location data, with full offline support and anonymous authentication.

This project demonstrates production-ready mobile development practices, real-time data handling, cloud integration, and accessibility considerations using a single shared codebase for iOS and Android.

---

## Live Demo
> _Coming soon_ (Expo publish / TestFlight / Play Store build)

---

## Project Overview

As mobile usage continues to dominate everyday communication, this app showcases how modern frameworks like **React Native** make it possible to build high-quality native mobile experiences without maintaining multiple platform-specific codebases.

The app uses **Firebase** for authentication, data persistence, and media storage, and **Gifted Chat** for a robust and customizable chat UI. Messages are stored both remotely (Firestore) and locally, allowing users to read conversations even when offline.

---

## Features

### Core Functionality
- Anonymous user authentication
- Real-time chat messaging
- Customizable chat background colors
- Offline message access and caching

### Media & Location Sharing
- Send images from the device gallery
- Take and send photos using the device camera
- Share real-time location with map previews
- Secure image storage via Firebase Cloud Storage

### Accessibility
- Screen reader–friendly UI
- Accessible inputs and message rendering

---

## User Stories

- As a new user, I want to quickly enter a chat room so I can start chatting immediately
- As a user, I want to send and receive messages in real time
- As a user, I want to share images to show what I’m doing
- As a user, I want to share my location with others in the chat
- As a user, I want to read past messages even when offline
- As a visually impaired user, I want the app to work seamlessly with screen readers

---

## Technologies Used

### Frontend / Mobile
- React Native
- Expo
- Gifted Chat

### Backend / Cloud Services
- Firebase Authentication (Anonymous Auth)
- Google Firestore Database
- Firebase Cloud Storage

### Device APIs
- Expo Image Picker
- Expo Camera
- Expo Location

### Other
- AsyncStorage (local data persistence)
- React Hooks

---

## Architecture & Design

- Single codebase supporting both iOS and Android
- Component-based architecture for maintainability
- Real-time Firestore listeners for instant message updates
- Local-first strategy with offline message caching
- Clear separation of UI, services, and configuration

---
<!-- 
## 🔐 Authentication & Security

- Users are authenticated anonymously via Firebase Authentication
- Firestore security rules restrict data access to authenticated users
- Media files are securely stored and accessed via Firebase Cloud Storage

---

## 🗄️ Data Storage

| Data Type       | Storage Location              |
|-----------------|-------------------------------|
| Messages        | Firestore Database            |
| Images          | Firebase Cloud Storage        |
| Cached Messages | AsyncStorage (Local Storage)  | -->

<!-- --- -->

<!-- ## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- Expo CLI
- Firebase project with Firestore & Storage enabled
- iOS Simulator / Android Emulator or physical device

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/chat-app.git
cd chat-app

# Install dependencies
npm install

# Start the Expo development server
expo start

``` -->

<!-- --- -->

<!-- ## 🧪 Testing

- Manual testing on iOS and Android devices and emulators
- Offline mode testing with network disabled
- Permission handling tests for camera, image library, and location access
- Accessibility testing with screen readers (VoiceOver and TalkBack)

---

## 📈 Performance Considerations

- Firestore query limits to prevent excessive reads
- Message pagination for long conversations
- Image compression prior to upload
- Lazy rendering via Gifted Chat
- Local caching to reduce network dependency

---

## 🧭 Future Enhancements

- Push notifications
- User profiles and avatars
- Group chat support
- Message reactions and read receipts
- End-to-end encryption

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes with clear, descriptive messages
4. Push to your fork and open a pull request

--- -->

## 📄 License

This project is licensed under the **MIT License**.

---

Built with a focus on clean architecture, accessibility, and real-world mobile development best practices.
