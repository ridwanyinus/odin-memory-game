# 🎴 Otaku Recall - Anime & Manga Memory Card Game

A React-based memory card game featuring characters from my favorite anime and manga series. Test your memory by clicking each character only once while the cards shuffle after every click!

![Game Preview](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 🎮 How to Play

1. **Click each character card only once**
2. **Cards shuffle after every click**
3. **Avoid clicking the same character twice** or the game ends
4. **Beat your high score** by remembering more characters

## ✨ Features

- 🎲 **Random anime selection** from a curated list of popular series
- 📱 **Responsive design** that works on desktop and mobile
- 🎯 **Score tracking** with persistent high score storage
- 🔄 **Dynamic card shuffling** after each click
- ⚡ **Real-time character fetching** from the Jikan API
- 🎨 **Modern UI/UX** with smooth animations and transitions

## 🛠️ Built With

- **React** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **SCSS** - Styling with advanced CSS features
- **[Jikan API](https://jikan.moe/)** - Unofficial MyAnimeList API for anime/manga data

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/ridwanyinus/odin-memory-game.git
cd odin-memory-game
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 🎯 API Integration

This project uses the **[Jikan API](https://jikan.moe/)** (v4) to fetch character data from anime and manga series:

```javascript
// Example API call for anime characters
https://api.jikan.moe/v4/anime/{id}/characters?sfw

// Example API call for manga characters
https://api.jikan.moe/v4/manga/{id}/characters?sfw
```

### Rate Limiting

- The Jikan API has rate limits (3 requests per second)
- The app handles errors gracefully with retry functionality

## 📺 Part of My Favorite Anime & Manga Collection

The game randomly selects from part of my personal collection of favorite anime and manga series. Each game features characters from one of these handpicked titles - check out the complete list in [fav.md](./fav.md):

**Some from My Favorites Include:**

- Vagabond
- Ashita no joe
- Berserk
- Attack on Titan
- Vinland Saga
- Death Note
- Demon Slayer
- Dragon Ball
- Fullmetal Alchemist: Brotherhood
- Hunter x Hunter
- Jujutsu Kaisen
- One Punch Man
- And many more!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── header/           # Game title and scoreboard
│   ├── card/            # Individual character cards
│   ├── ui/
│   │   └── main-board/  # Main game board component
│   ├── footer/          # Footer component
│   └── loader/          # Loading spinner
├── hooks/
│   ├── useBreakPoints.js    # Responsive breakpoint detection
│   └── useMemoryGame.js     # Game logic hook
├── utils/
│   └── localStorage.js      # Local storage utilities
└── styles/              # SCSS stylesheets
```

## 🎨 Key Features Implementation

### Memory Game Logic

- Tracks clicked anime and manga characters to prevent duplicates
- Shuffles character cards after each click for added difficulty
- Manages scoring and game state

### Responsive Design

- Adapts character card count based on screen size
- Mobile-first approach with breakpoint detection

### Error Handling

- Graceful error messages for API failures
- Retry functionality for failed requests
- Loading states for better UX

## 🎯 Learning Objectives

This project was built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) curriculum to practice:

- React hooks and state management
- API integration and error handling
- Responsive web design
- Modern JavaScript features
- Component architecture

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Jikan API](https://jikan.moe/)** for providing free anime/manga data
- **[MyAnimeList](https://myanimelist.net/)** for the original data source
- **[The Odin Project](https://www.theodinproject.com/)** for the project inspiration
- The anime and manga creators for the amazing characters!

## 🐛 Known Issues

- Some anime and manga may have limited character data
- API rate limiting may cause occasional delays
- Character image loading depends on external CDN availability

---

**Enjoy the game and test your anime & manga knowledge!** 🎌
