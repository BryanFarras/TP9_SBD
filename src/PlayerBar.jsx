import { useEffect, useState } from 'react';

export default function PlayerBar({ song, audioRef, onEnded }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song) return;

    audio.src = song.audio;
    audio.play();
    setIsPlaying(true);

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      onEnded();
    });

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', onEnded);
    };
  }, [song]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <img src={song.image} alt={song.title} className="w-12 h-12 rounded object-cover" />
        <div>
          <h3 className="text-sm font-semibold">{song.title}</h3>
          <p className="text-xs text-gray-500">{song.releaseDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full max-w-md mx-auto">
        <button
          onClick={togglePlay}
          className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-orange-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
