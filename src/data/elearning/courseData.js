import course1 from 'assets/img/e-learning/courses/course1.png';
import course2 from 'assets/img/e-learning/courses/course2.png';
import course3 from 'assets/img/e-learning/courses/course3.png';
import course4 from 'assets/img/e-learning/courses/course4.png';
import course5 from 'assets/img/e-learning/courses/course5.png';
import course6 from 'assets/img/e-learning/courses/course6.png';
import course7 from 'assets/img/e-learning/courses/course7.png';
import course8 from 'assets/img/e-learning/courses/course8.png';
import course9 from 'assets/img/e-learning/courses/course9.png';
import beachVideo from 'assets/video/beach.mp4';
import beachPoster from 'assets/video/beach.jpg';

import chevronUp from 'assets/img/icons/chevron-up.svg';
import doubleChevronUp from 'assets/img/icons/double-chevron-up.svg';
import tripleChevronUp from 'assets/img/icons/triple-chevron-up.svg';

export const propertyFilters = [
  {
    label: 'Superficie',
    options: [
      {
        label: 'Techada',
        icon: 'brush',
        type: 'radio',
        value: 'Techada',
        name: 'superficie',
      },
      {
        label: 'Total',
        icon: 'brush',
        type: 'radio',
        value: 'Total',
        name: 'superficie',
      },
    ],
  },
  {
    label: 'Baños',
    options: [
      {
        label: '1+',
        icon: 'brush',
        type: 'radio',
        value: '1+ baños',
        name: 'banos',
      },
      {
        label: '2+',
        icon: 'brush',
        type: 'radio',
        value: '2+ baños',
        name: 'banos',
      },
      {
        label: '3+',
        icon: 'brush',
        type: 'radio',
        value: '3+ baños',
        name: 'banos',
      },
      {
        label: '4+',
        icon: 'brush',
        type: 'radio',
        value: '4+ baños',
        name: 'banos',
      },
      {
        label: '5+',
        icon: 'brush',
        type: 'radio',
        value: '5+ baños',
        name: 'banos',
      },
    ],
  },
  {
    label: 'Estacionamientos',
    options: [
      {
        label: '0',
        icon: 'brush',
        type: 'radio',
        value: '0 estacionamientos',
        name: 'estacionamientos',
      },
      {
        label: '1+',
        icon: 'brush',
        type: 'radio',
        value: '1+ estacionamientos',
        name: 'estacionamientos',
      },
      {
        label: '2+',
        icon: 'brush',
        type: 'radio',
        value: '2+ estacionamientos',
        name: 'estacionamientos',
      },
      {
        label: '3+',
        icon: 'brush',
        type: 'radio',
        value: '3+ estacionamientos',
        name: 'estacionamientos',
      },
      {
        label: '4+',
        icon: 'brush',
        type: 'radio',
        value: '4+ estacionamientos',
        name: 'estacionamientos',
      },
    ],
  },
  {
    label: 'Tipo de anunciante',
    options: [
      {
        label: 'Todos',
        icon: 'brush',
        type: 'radio',
        value: 'Todos',
        name: 'anunciante',
      },
      {
        label: 'Inmobiliaria',
        icon: 'brush',
        type: 'radio',
        value: 'Inmobiliaria',
        name: 'anunciante',
      },
      {
        label: 'Dueño directo',
        icon: 'brush',
        type: 'radio',
        value: 'Dueño directo',
        name: 'anunciante',
      },
    ],
  },
  {
    label: 'Antiguedad',
    options: [
      {
        label: 'En construcción',
        icon: 'brush',
        type: 'radio',
        value: 'En construcción',
        name: 'antiguedad',
      },
      {
        label: 'A estrenar',
        icon: 'brush',
        type: 'radio',
        value: 'A estrenar',
        name: 'antiguedad',
      },
      {
        label: 'Hasta 5 años',
        icon: 'brush',
        type: 'radio',
        value: 'Hasta 5 años',
        name: 'antiguedad',
      },
      {
        label: 'Más de 5 años',
        icon: 'brush',
        type: 'radio',
        value: 'Más de 5 años',
        name: 'antiguedad',
      },
    ],
  },
  {
    label: 'Fecha de publicación',
    options: [
      {
        label: 'Esta semana',
        icon: 'brush',
        type: 'radio',
        value: 'esta semana',
        name: 'publicacion',
      },
      {
        label: 'Este mes',
        icon: 'brush',
        type: 'radio',
        value: 'este mes',
        name: 'publicacion',
      },
      {
        label: 'Últimos 3 meses',
        icon: 'brush',
        type: 'radio',
        value: 'ultimos 3 meses',
        name: 'publicacion',
      },
      {
        label: 'Últimos 6 meses',
        icon: 'brush',
        type: 'radio',
        value: 'ultimos 6 meses',
        name: 'publicacion',
      },
    ],
  },
  // Checkbox
  {
    label: 'Ambientes',
    options: [
      {
        label: 'Bodega',
        icon: 'brush',
        type: 'checkbox',
        value: 'Bodega',
        name: 'ambiente',
      },
      {
        label: 'Área de cafetería',
        icon: 'brush',
        type: 'checkbox',
        value: 'area de cafeteria',
        name: 'ambiente',
      },
      {
        label: 'Patio',
        icon: 'brush',
        type: 'checkbox',
        value: 'patio',
        name: 'ambiente',
      },
      {
        label: 'Área común',
        icon: 'brush',
        type: 'checkbox',
        value: 'area comun',
        name: 'ambiente',
      },
      {
        label: 'Baño propio',
        icon: 'brush',
        type: 'checkbox',
        value: 'bano propio',
        name: 'ambiente',
      },
      {
        label: 'Cuarto de juegos',
        icon: 'brush',
        type: 'checkbox',
        value: 'cuarto de juegos',
        name: 'ambiente',
      },
    ],
  },
  {
    label: 'Exteriores',
    options: [
      {
        label: 'Área BBQ',
        icon: 'brush',
        type: 'checkbox',
        value: 'area bbq',
        name: 'exteriores',
      },
      {
        label: 'Balcón',
        icon: 'brush',
        type: 'checkbox',
        value: 'balcon',
        name: 'exteriores',
      },
      {
        label: 'Cancha',
        icon: 'brush',
        type: 'checkbox',
        value: 'cancha',
        name: 'exteriores',
      },
      {
        label: 'Jardín privado',
        icon: 'brush',
        type: 'checkbox',
        value: 'jardin privado',
        name: 'exteriores',
      },
      {
        label: 'Laguna',
        icon: 'brush',
        type: 'checkbox',
        value: 'laguna',
        name: 'exteriores',
      },
      {
        label: 'Piscina al aire libre',
        icon: 'brush',
        type: 'checkbox',
        value: 'piscina al aire libre',
        name: 'exteriores',
      },
    ],
  },
  {
    label: 'Servicios',
    options: [
      {
        label: 'Área de lavanderia',
        icon: 'brush',
        type: 'checkbox',
        value: 'area de lavanderia',
        name: 'servicios',
      },
      {
        label: 'Control de acceso',
        icon: 'brush',
        type: 'checkbox',
        value: 'control de acceso',
        name: 'servicios',
      },
      {
        label: 'Áreas verdes',
        icon: 'brush',
        type: 'checkbox',
        value: 'areas verdes',
        name: 'servicios',
      },
      {
        label: 'Parrilla',
        icon: 'brush',
        type: 'checkbox',
        value: 'parrilla',
        name: 'servicios',
      },
      {
        label: 'Aire acondicionado',
        icon: 'brush',
        type: 'checkbox',
        value: 'aire acondicionado',
        name: 'servicios',
      },
      {
        label: 'Calefacción',
        icon: 'brush',
        type: 'checkbox',
        value: 'calefaccion',
        name: 'servicios',
      },
    ],
  },
];

export const courseFilters = [
  {
    label: 'Category',
    options: [
      {
        label: 'Free',
        icon: 'file-alt',
        type: 'checkbox',
        value: 'free course',
        name: 'free course',
      },
      {
        label: 'Paid',
        icon: 'file-invoice-dollar',
        type: 'checkbox',
        value: 'paid course',
        name: 'paid course',
      },
      {
        label: 'On Sale',
        icon: 'tags',
        iconShrink: true,
        type: 'checkbox',
        value: 'on sale',
        name: 'on sale',
      },
    ],
  },
  {
    label: 'Subject',
    options: [
      {
        label: 'Design',
        icon: 'brush',
        type: 'checkbox',
        value: 'design',
        name: 'design',
      },
      {
        label: 'Web Development',
        icon: 'globe',
        type: 'checkbox',
        value: 'development',
        name: 'development',
      },
      {
        label: 'Software',
        icon: 'code',
        type: 'checkbox',
        value: 'software',
        name: 'software',
      },
      {
        label: 'Business',
        icon: 'balance-scale-left',
        type: 'checkbox',
        value: 'business',
        name: 'business',
      },
      {
        label: 'Marketing',
        icon: 'comment-dollar',
        type: 'checkbox',
        value: 'marketing',
        name: 'marketing',
      },
      {
        label: 'Self Help',
        icon: 'hand-holding-water',
        type: 'checkbox',
        value: 'self help',
        name: 'self help',
      },
      {
        label: 'Photography',
        icon: 'camera-retro',
        type: 'checkbox',
        value: 'photograpy',
        name: 'photograpy',
      },
      {
        label: 'Music',
        icon: 'music',
        type: 'checkbox',
        value: 'music',
        name: 'music',
      },
      {
        label: 'Writing',
        icon: 'pen-nib',
        type: 'checkbox',
        value: 'writing',
        name: 'writing',
      },
      {
        label: 'Painting',
        icon: 'palette',
        type: 'checkbox',
        value: 'painting',
        name: 'painting',
      },
      {
        label: 'Cooking',
        icon: 'utensils',
        type: 'checkbox',
        value: 'cooking',
        name: 'cooking',
      },
      {
        label: 'Teaching',
        icon: 'book',
        type: 'checkbox',
        value: 'teaching',
        name: 'teaching',
      },
      {
        label: 'Miscellaneous',
        icon: 'thumbtack',
        type: 'checkbox',
        value: 'misc',
        name: 'misc',
      },
    ],
  },
  {
    label: 'Rating',
    options: [
      {
        label: '4.5 & Up',
        icon: 'star',
        type: 'radio',
        name: 'rating',
        value: 4.5,
      },
      {
        label: '4.0 & Up',
        icon: 'star',
        type: 'radio',
        name: 'rating',
        value: 4.0,
      },
      {
        label: '3.5 & Up',
        icon: 'star',
        type: 'radio',
        name: 'rating',
        value: 3.5,
      },
      {
        label: '3.0 & Up',
        icon: 'star',
        type: 'radio',
        name: 'rating',
        value: 3.0,
      },
    ],
  },
  {
    label: 'Proficiency',
    options: [
      {
        label: 'Beginner',
        svg: chevronUp,
        type: 'checkbox',
        value: 'beginner',
        name: 'beginner',
      },
      {
        label: 'Intermediate',
        svg: doubleChevronUp,
        type: 'checkbox',
        value: 'intermediate',
        name: 'intermediate',
      },
      {
        label: 'Professional',
        svg: tripleChevronUp,
        type: 'checkbox',
        value: 'professional',
        name: 'professional',
      },
      {
        label: 'Master',
        icon: 'star',
        type: 'checkbox',
        value: 'master',
        name: 'master',
      },
      {
        label: 'Everyone',
        icon: 'users',
        type: 'checkbox',
        value: 'everyone',
        name: 'everyone',
      },
    ],
  },
  {
    label: 'Language',
    options: [
      {
        label: 'English',
        type: 'checkbox',
        selected: true,
        value: 'english',
        name: 'english',
      },
      {
        label: 'Spanish',
        type: 'checkbox',
        value: 'spanish',
        name: 'spanish',
      },
      {
        label: 'French',
        type: 'checkbox',
        value: 'french',
        name: 'french',
      },
      {
        label: 'German',
        type: 'checkbox',
        value: 'german',
        name: 'german',
      },
      {
        label: 'Bengali',
        type: 'checkbox',
        value: 'bengali',
        name: 'bengali',
      },
      {
        label: 'Hindi',
        type: 'checkbox',
        value: 'hindi',
        name: 'hindi',
      },
      {
        label: 'Arabic',
        type: 'checkbox',
        value: 'arabic',
        name: 'arabic',
      },
    ],
  },
  {
    label: 'Enrolled Courses',
    options: [
      {
        label: 'Show',
        name: 'enrolledCourses',
        type: 'radio',
        value: 'all courses',
      },
      {
        label: 'Dont Show',
        name: 'enrolledCourses',
        type: 'radio',
        value: 'new courses',
      },
    ],
  },
];

const tags = {
  writing: {
    id: 1,
    type: 'primary',
    content: 'Writing',
    icon: 'pen-nib',
  },
  topTrainer: {
    id: 2,
    type: 'success',
    content: 'Top Trainer',
    icon: 'crown',
  },
  editorsChoice: {
    id: 3,
    type: 'warning',
    content: 'Editor’s Choice',
    icon: 'award',
  },
  misc: {
    id: 4,
    type: 'primary',
    content: 'Misc.',
    icon: 'thumbtack',
  },
  design: {
    id: 5,
    type: 'primary',
    content: 'Design',
    icon: 'brush',
  },
  bestSeller: {
    id: 6,
    type: 'success',
    content: 'Best Seller',
    icon: 'hashtag',
  },
  painting: {
    id: 7,
    type: 'primary',
    content: 'Painting',
    icon: 'palette',
  },
};

export const courseData = [
  {
    id: 'CN000001',
    name: 'Script Writing Masterclass: Introdution to Industry Cliches',
    price: 69.99,
    oldPrice: 139.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course1,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 92632,
    rating: 4.8,
    review: 78259,
    tags: [tags.writing, tags.topTrainer, tags.editorsChoice],
  },
  {
    id: 'CN000002',
    name: 'Composition in Comics: Easy to Read Between Panels',
    price: 39.99,
    oldPrice: 139.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course2,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 92603,
    rating: 4.9,
    review: 34567,
    tags: [tags.misc],
  },
  {
    id: 'CN000003',
    name: 'Advanced Design Tools for Modern Designs',
    price: 69.55,
    oldPrice: 139.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course3,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 11000,
    rating: 4.5,
    review: 108009,
    tags: [tags.design, tags.bestSeller],
    wishlisted: true,
  },
  {
    id: 'CN000004',
    name: 'Comic Page Layout: Analysing The Classics',
    price: 49.55,
    oldPrice: 99.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course4,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 32106,
    rating: 4.6,
    review: 26777,
    tags: [tags.misc, tags.topTrainer],
    addedToCart: true,
  },
  {
    id: 'CN000005',
    name: 'Abstract Painting: Zero to Mastery in Traditional Medium',
    price: 69.99,
    oldPrice: 109.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'J. H. Williams III',
    thumbnail: {
      image: course5,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 2304,
    rating: 4.8,
    review: 1527,
    tags: [tags.design, tags.topTrainer],
  },
  {
    id: 'CN000006',
    name: 'Inking: Choosing Between Analog vs Digital',
    price: 39.99,
    oldPrice: 139.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course6,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 9312,
    rating: 4.7,
    review: 8179,
    tags: [tags.painting, tags.topTrainer],
  },
  {
    id: 'CN000007',
    name: 'Character Design Masterclass: Your First Supervillain',
    price: 99.9,
    oldPrice: 139.9,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course7,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 292603,
    rating: 4.9,
    review: 201452,
    tags: [tags.writing, tags.bestSeller, tags.editorsChoice],
  },
  {
    id: 'CN000008',
    name: 'Character Design Masterclass: Your First Superhero',
    price: 69.99,
    oldPrice: 129.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course8,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 90304,
    rating: 4.8,
    review: 80259,
    tags: [tags.writing, tags.editorsChoice],
  },
  {
    id: 'CN000009',
    name: 'Character Design Masterclass: Your First Sidekick',
    price: 69.99,
    oldPrice: 139.99,
    excerpt:
      'Explore all the advanced design tools like Photoshop, Illustrator, Krita, Procreate, & Inkscape; trace the evolution of graphic design with us, from the first breakthrough of image development to today’s AI assisted designs. Begin your visual language journey with these advanced design tools.',
    trainer: 'Bill Finger',
    thumbnail: {
      image: course9,
      video: beachVideo,
      videoPoster: beachPoster,
    },
    totalEnrolled: 66304,
    rating: 4.5,
    review: 55699,
    tags: [tags.writing, tags.topTrainer],
  },
];
