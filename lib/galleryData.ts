export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'Birthday' | 'Custom' | 'Bento' | 'Classic';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80&auto=format&fit=crop',
    caption: 'Chocolate Drip Masterpiece',
    category: 'Birthday'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=80&auto=format&fit=crop',
    caption: 'KitKat Dream Cake',
    category: 'Classic'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=700&q=80&auto=format&fit=crop',
    caption: 'Red Velvet Elegance',
    category: 'Classic'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80&auto=format&fit=crop',
    caption: 'Chocolate Chip Special',
    category: 'Birthday'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=700&q=80&auto=format&fit=crop',
    caption: 'Black Forest Delight',
    category: 'Classic'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&q=80&auto=format&fit=crop',
    caption: 'Oreo Celebration',
    category: 'Birthday'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=700&q=80&auto=format&fit=crop',
    caption: 'Bento Cake Magic',
    category: 'Bento'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=700&q=80&auto=format&fit=crop',
    caption: 'Coffee & Cream',
    category: 'Custom'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700&q=80&auto=format&fit=crop',
    caption: 'Cookie Crumbles',
    category: 'Custom'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=700&q=80&auto=format&fit=crop',
    caption: 'Fruit Fiesta Cake',
    category: 'Birthday'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&q=80&auto=format&fit=crop',
    caption: 'Pineapple Paradise',
    category: 'Custom'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=700&q=80&auto=format&fit=crop',
    caption: 'Butterscotch Dream',
    category: 'Classic'
  }
];
