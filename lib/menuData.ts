export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image: string;
  category: 'Cakes' | 'Snacks' | 'Beverages' | 'Ice Cream';
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  // CAKES
  {
    id: 'oreo-cake',
    name: 'Oreo Cake',
    description: 'Rich chocolate layers with crunchy Oreo bits.',
    price: '₹500 for 500g',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Bestseller']
  },
  {
    id: 'kitkat-cake',
    name: 'KitKat Cake',
    description: 'Surrounded by KitKat bars and topped with gems.',
    price: '₹890 / kg',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Premium']
  },
  {
    id: 'coffee-cake',
    name: 'Coffee Cake',
    description: 'For the coffee lovers, infused with premium espresso.',
    price: '₹750 / kg',
    image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Bestseller']
  },
  {
    id: 'chocochip-cake',
    name: 'Chocochip Cake',
    description: 'Classic chocolate cake loaded with chips.',
    price: '₹800 / kg',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 'black-forest-cake',
    name: 'Black Forest Cake',
    description: 'Traditional German style with cherries and cream.',
    price: '₹700 / kg',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 'pineapple-cake',
    name: 'Loaded Pineapple Cake',
    description: 'Fresh pineapple chunks in every bite.',
    price: '₹650 / kg',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Bestseller']
  },
  {
    id: 'cookie-crumbles',
    name: 'Cookie Crumbles Cake',
    description: 'Vanilla base with crushed cookies.',
    price: '₹750 / kg',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 'biscoff-cake',
    name: 'Biscoff Cake',
    description: 'The trendy caramelized biscuit flavour.',
    price: '₹950 / kg',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Trending']
  },
  {
    id: 'mixed-fruit',
    name: 'Mixed Fruit Cake',
    description: 'Seasonal fresh fruits with smooth cream.',
    price: '₹850 / kg',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 'butterscotch-cake',
    name: 'Loaded Butterscotch Cake',
    description: 'Crunchy butterscotch bits and rich caramel.',
    price: '₹750 / kg',
    image: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 'red-velvet',
    name: 'Chocolate Red Velvet Cake',
    description: 'Velvety texture with a hint of cocoa.',
    price: '₹1000 / kg',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Luxury']
  },
  {
    id: 'bento-cake',
    name: 'Custom Bento Cake',
    description: 'The perfect mini cake for any surprise.',
    price: '₹350 onwards',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80&auto=format&fit=crop',
    category: 'Cakes',
    tags: ['Custom Available']
  },

  // SNACKS
  {
    id: 'veg-sub',
    name: 'Veg Aloo Tikki Sub (6")',
    description: 'Fresh sub with aloo tikki and veggies.',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=600&q=80&auto=format&fit=crop',
    category: 'Snacks'
  },
  {
    id: 'veg-burger',
    name: 'Veg Aloo Tikki Burger',
    description: 'Classic crunchy burger.',
    price: '₹70',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop',
    category: 'Snacks'
  },
  {
    id: 'grilled-sandwich',
    name: 'Cheese Corn Veg Grilled Sandwich',
    description: 'Melty cheese and sweet corn.',
    price: '₹80',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&auto=format&fit=crop',
    category: 'Snacks'
  },
  {
    id: 'cheese-patties',
    name: 'Veg Grilled Cheese Corn Patty',
    description: 'A quick cheesy snack.',
    price: '₹45',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&auto=format&fit=crop', // Reusing sandwich since snack images were limited
    category: 'Snacks'
  },

  // BEVERAGES
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    description: 'Creamy and refreshing brewed coffee.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop',
    category: 'Beverages'
  },
  {
    id: 'oreo-shake',
    name: 'Oreo Shake',
    description: 'Thick shake with crushed Oreos.',
    price: '₹70',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80&auto=format&fit=crop',
    category: 'Beverages'
  },
  {
    id: 'banana-shake',
    name: 'Banana Shake',
    description: 'Fresh and healthy banana shake.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80&auto=format&fit=crop', // Reusing shake image
    category: 'Beverages'
  },
  {
    id: 'mojito',
    name: 'Mojitos',
    description: 'Minty and zesty cooler.',
    price: '₹70',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&auto=format&fit=crop',
    category: 'Beverages'
  },
  {
    id: 'lemon-ice-tea',
    name: 'Lemon Ice Tea',
    description: 'Chilled tea with a lemony kick.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80&auto=format&fit=crop',
    category: 'Beverages'
  },

  // ICE CREAM
  {
    id: 'single-scoop',
    name: 'Single Scoop',
    description: 'Various flavours available.',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80&auto=format&fit=crop',
    category: 'Ice Cream'
  },
  {
    id: 'double-scoop',
    name: 'Double Scoop',
    description: 'Double the joy.',
    price: '₹70',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80&auto=format&fit=crop',
    category: 'Ice Cream'
  }
];
