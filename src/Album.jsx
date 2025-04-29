import Askforsomething from './assets/album_artworks/Asked for Something.jpg';
import Beathingheart from './assets/album_artworks/Beating Heart counting breaths.jpg';
import Kembali from './assets/album_artworks/Kembali3.jpg';
import Someone from './assets/album_artworks/Someone Anyone.png';

const Album = [
  {
    image: Someone,
    title: 'Someone Anyone',
    releaseDate: '2024-04-29',
    description:
      'A song about understanding the world around us and the people in it. Someone can be anyone, but not anyone can be someone.',
    audio: '/assets/audio/someone-anyone.mp3',
  },
  {
    image: Beathingheart,
    title: 'Beating Heart, Counting Breaths',
    releaseDate: '2024-05-01',
    description:
      'A meditative rhythm representing the subtle tension between life’s persistence and vulnerability.',
    audio: '/assets/audio/beating-heart-counting-breaths.mp3',
  },
  {
    image: Askforsomething,
    title: 'Asked for Something, Given Everything',
    releaseDate: '2024-05-19',
    description:
      'A powerful composition that reflects the unexpected grace in receiving more than what was sought.',
    audio: '/assets/audio/asked-for-something.mp3',
  },
  {
    image: Kembali,
    title: 'Kembali',
    releaseDate: '2024-09-29',
    description:
      'Kembali bagi para wisudawan Departemen Teknik Elektro, dan kembali bagi Mahasiswa baru Departemen Teknik Elektro.',
    audio: '/assets/audio/kembali.mp3',
  },
];

export default Album;
