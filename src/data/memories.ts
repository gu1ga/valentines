import photo_1 from './photos/01.jpeg' 
import photo_2 from './photos/02.jpeg' 
import photo_3 from './photos/03.jpeg' 
import photo_4 from './photos/04.jpeg' 
import photo_5 from './photos/05.jpeg' 
import photo_6 from './photos/06.jpeg' 
import photo_7 from './photos/07.jpeg' 
import photo_8 from './photos/08.jpeg' 
import photo_9 from './photos/09.jpeg' 
import photo_10 from './photos/10.jpeg' 
import photo_11 from './photos/11.jpeg' 
import song from './song.mp3'

export type Memory = {
  src: string;
  caption: string;
  date: string;
  station: string;
};

// Swap these images, captions, and dates with your own anytime.
export const memories: Memory[] = [
  {
    src: photo_1,
    caption: 'Nosso primeiro "Rolê" como namorados, um momento bem nobre, lembra?',
    date: "Oct - 2025",
	station:'Benfica'
  },
  {
    src: photo_2,
    caption: "A vida tem uma trilha sonora bem mais bela desde que você chegou, como um belo concerto ",
    date: "Nov - 2025",
	station:'Padre Cícero'
  },
  {
    src: photo_3,
    caption: "You're my best FRIEND, do you know that? You're my lobster 🦞", 
    date: "Nov - 2025",
	station:'Porangabusu'
  },
  {
    src: photo_4,
    caption: "Doesn't matter if we eat Italian Food, your smile melts me just like mozzarella 🧀",
    date: "Dec - 2025",
	station:'Couto Fernandes'
  },
  {
    src: photo_5,
    caption: "We even tried to make our cookies 🍪. I haven't given up yet! u.u",
    date: "Jan - 2026",
	station:'Juscelino Kubstcheck'
  },
  {
    src: photo_11,
    caption: "I love you, and I love to look at you when you're smiling! ❤️",
    date: "Jan - 2026",
	station:'Parangaba'
  },
  {
    src: photo_6,
    caption: "You're pretty under a waterfall. LOVE YOUUU!",
    date: "Feb - 2026",
	station:'Vila Pery'
  },
  {
    src: photo_7,
    caption: "And you still gorgeous even in Venezuela 🇻🇪. Te amo, hermosa!",
    date: "May - 2026",
	station:'Vila Manoel Sátiro'
  },
  {
    src: photo_8,
    caption: "Quero ir a todos os shows possíveis com você! Vou me lembrar de não me esquecer disso",
    date: "May - 2026",
	station:'Mondubim'
  },
  {
    src: photo_9,
    caption: "Te amo, meu docinho de tangerina, quero construir a vida a seu lado, sem amarelar!",
    date: "Eu te amo, meu amor!",
	station:'Esperança'
  },
];

// Change me!
export const PASSCODE = "breguinha";

// Replace with any direct MP3/OGG URL.
export const SONG_URL = song
export const SONG_TITLE = "our song";
