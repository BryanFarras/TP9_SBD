import { useState, useEffect, useRef } from 'react';
import songs from './Album.jsx';
import Navbar from './NavBar.jsx';
import './App.css';
import { Helmet } from 'react-helmet';

function AlbumCard({ song, index, setFocusedIndex, isFocused, isLastItem, onPlay }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const calculateVisibility = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      if (isLastItem) {
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY + windowHeight;

        if (documentHeight - scrollPosition < 100) {
          setFocusedIndex(index);
          return;
        }
      }

      if (Math.abs(elementCenter - viewportCenter) < rect.height * 0.6) {
        setFocusedIndex(index);
      }
    };

    calculateVisibility();

    const handleScroll = () => {
      requestAnimationFrame(calculateVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index, setFocusedIndex, isLastItem]);

  const blurAmount = isFocused ? 0 : 3;
  const opacityValue = isFocused ? 1 : 0.6;
  const scaleValue = isFocused ? 1 : 0.97;

  return (
    <div
      ref={cardRef}
      className="flex flex-row items-center gap-10 p-8 transition-all duration-700 ease-in-out max-w-6xl w-full"
      style={{
        opacity: opacityValue,
        filter: `blur(${blurAmount}px)`,
        transform: `scale(${scaleValue})`,
      }}
      onClick={() => onPlay(song)}
    >
      <img
        src={song.image}
        alt={song.title}
        className="w-72 h-72 object-cover rounded-xl shadow-2xl"
      />
      <div className="flex flex-col justify-center text-left max-w-xl">
        <h3 className="text-2xl text-color_green5">{song.title}</h3>
        <p className="text-md text-gray-500 mb-4">{song.releaseDate}</p>
        <p className="text-sm text-gray-700 text-justify">{song.description}</p>
      </div>
    </div>
  );
}

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>Artificial Nature</title>
      </Helmet>

      <div className="flex flex-col min-h-screen font-encode">
        <Navbar visible={showNavbar} />

        <div className="text-center text-black mt-24">
          <h1 className="fade-in-up text-4xl">Artificial Nature</h1>
          <h2 className="fade-in-to-left delay-1 text-2xl font-national">by Bryan Farras</h2>
          <p className="delay-1 py-5">If we never find nature, we create it.</p>
        </div>

        <main id="albums" className="flex-grow flex flex-col items-center gap-32 px-10">
          {songs.map((song, index) => (
            <AlbumCard
              key={index}
              index={index}
              song={song}
              setFocusedIndex={setFocusedIndex}
              isFocused={focusedIndex === index}
              isLastItem={index === songs.length - 1}
              onPlay={handlePlay}
            />
          ))}
        </main>
      </div>

      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner py-4 px-8 flex items-center justify-between z-50">
          <div className="flex items-center gap-4">
            <img src={currentSong.image} alt={currentSong.title} className="w-16 h-16 object-cover rounded" />
            <div>
              <h3 className="text-lg font-semibold text-color_green5">{currentSong.title}</h3>
              <p className="text-sm text-gray-500">{currentSong.releaseDate}</p>
            </div>
          </div>
          <audio controls ref={audioRef} className="w-1/2">
            <source src={currentSong.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {/* Add padding at the bottom to ensure last album can be scrolled to center */}
      <div className="h-96"></div>

      <footer className="w-screen py-4 bg-black text-white relative left-1/2 right-1/2 -translate-x-1/2 bottom-0">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Bryan Farras — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
