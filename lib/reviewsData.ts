export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  platform: 'Google' | 'JustDial';
  isLocalGuide?: boolean;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Surjit Singh Banga',
    rating: 5,
    date: '4 months ago',
    text: 'The shop emphasizes selling fresh, high-quality cakes. They highlight their philosophy with the slogan, Cake ho to acha ho varna na hi ho, indicating a strong commitment to quality.',
    platform: 'Google',
    isLocalGuide: true
  },
  {
    id: '2',
    name: 'Radhika',
    rating: 5,
    date: '4 months ago',
    text: "Got a customized bento cake specially from here because I've heard so much about them and as expected it was very good — they made it look like straight from Pinterest.",
    platform: 'Google'
  },
  {
    id: '3',
    name: 'VIVEK GOYAL',
    rating: 5,
    date: 'a year ago',
    text: "Thank you so much Meetika for making such a beautiful and tasty cake for my son's birthday. You delivered much more than you promised with lots of innovation and surprises.",
    platform: 'Google'
  },
  {
    id: '4',
    name: 'Jatin Ahuja',
    rating: 5,
    date: 'a year ago',
    text: 'Delicious Cakes! Presentation is awesome!! Personalized message from team makes the experience superb!!',
    platform: 'Google'
  },
  {
    id: '5',
    name: 'Harmanjot Singh',
    rating: 5,
    date: 'a year ago',
    text: 'Best cake available here...because it was the first cake shop at my favourite place (Panjab University).',
    platform: 'Google'
  },
  {
    id: '6',
    name: 'Dr. Sucha Singh',
    rating: 5,
    date: 'a year ago',
    text: 'Cake Express has a lot of variety. Most important you can customize your choice of cakes.',
    platform: 'Google'
  },
  {
    id: '7',
    name: 'PARNEET KAUR',
    rating: 5,
    date: 'a year ago',
    text: 'I often go for having truffle there. I have tried Hazelnut and KitKat pastries also. All the pastries are very delicious, specially Truffle.',
    platform: 'Google'
  },
  {
    id: '8',
    name: 'Naveen Sharma',
    rating: 5,
    date: '2 years ago',
    text: 'Great ambience, great hygiene, best cake quality delivered. Very humbled staff. Worth every penny spent. 100% eggless and yummy cakes. Highly recommended.',
    platform: 'Google'
  },
  {
    id: '9',
    name: 'Garima Mishra',
    rating: 5,
    date: 'a year ago',
    text: 'Got so many cakes from here. They make amazing customized cakes. The quality is also very good.',
    platform: 'Google'
  },
  {
    id: '10',
    name: 'Tanya Rawat',
    rating: 5,
    date: 'a year ago',
    text: 'Love the texture and flavours of their cakes. The owners are also super sweet and supportive! Loved the experience.',
    platform: 'Google'
  },
  {
    id: '11',
    name: 'Jasmeet Kaur',
    rating: 5,
    date: 'a year ago',
    text: 'The best cake I had in the tricity ❤️ best cakes with balanced taste and sugar ❤️ loved it.',
    platform: 'Google'
  },
  {
    id: '12',
    name: 'Gurnoor Kaur',
    rating: 5,
    date: 'a year ago',
    text: 'Best cakes — the presentation is flawless and every bite is a heavenly experience.',
    platform: 'Google'
  },
  {
    id: '13',
    name: 'Renu Walia',
    rating: 5,
    date: '2 years ago',
    text: 'One of the best bakery in Chandigarh — very delicious and fresh cakes. Very professional.',
    platform: 'Google'
  },
  {
    id: '14',
    name: 'Jahnvi Sharma',
    rating: 5,
    date: '2 years ago',
    text: 'Best cakes in tricity 💕',
    platform: 'Google'
  },
  {
    id: '15',
    name: 'Hardeep Saini',
    rating: 5,
    date: '2 years ago',
    text: 'Good taste, friendly staff, 100% eggless cakes, overall good experience. Must visit place.',
    platform: 'Google'
  },
  {
    id: '16',
    name: 'Bhavya Garg',
    rating: 5,
    date: 'a year ago',
    text: 'Best custom cakes in Chandigarh.',
    platform: 'Google'
  },
  {
    id: '17',
    name: 'Arjun Mittal',
    rating: 5,
    date: '2 years ago',
    text: "Some of the best cakes I've had!!! Will certainly come for more 🥰",
    platform: 'Google'
  }
];
