# Social Media Feed Application

This React application is a dynamic social media feed that displays user posts with search filtering and image lightbox functionality. The project demonstrates effective use of React components, third-party libraries, and state management.

## Features

### 1. Post Display

- Responsive grid/list of posts.
- Each post displays:
  - User avatar and name.
  - Post content (text).
  - Media images in a grid layout.
  - Timestamp formatted using `dayjs`.
  - Like and comment counts.

### 2. Image Lightbox

- Clicking on any image opens a lightbox.
- Lightbox features:
  - Displays all images from the post.
  - Navigation between images.
  - Close button.

### 3. Search Functionality

- Search bar filters posts in real-time.
- Matches against the sender's name (case-insensitive).
- Displays an empty state if no results match.

## Installation

### Prerequisites

- Node.js (v14 or later) installed on your machine.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mdiibrahim/social-media-demo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-media-demo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at `http://localhost:5173/social-media-demo/`.

## Project Structure

```
project-repo/
├── src/
│   ├── components/
│   │   ├── Post.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Lightbox.jsx
│   ├── data/
│   │   └── posts.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Technologies Used

- **React**: Component-based library for building the user interface.
- **dayjs**: For formatting timestamps.
- **Yet Another React Lightbox**: For image lightbox functionality.
- **CSS**: Basic styling and layout.

## Deployment

This app can be deployed using GitHub Pages:

1. Add the following `homepage` field to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/social-media-demo"
   ```
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy the app:
   ```bash
   npm run deploy
   ```
5. Access the app at `https://your-username.github.io/social-media-demo`.

## Future Enhancements

- Add user authentication.
- Implement a backend API for dynamic data.
- Include additional post interaction features (e.g., commenting, liking).

## Contact

For questions or support, please contact [Mohammad Ibrahim] at [mdiibrahim549@gmail.com].
