export interface ICat {
  id: number;
  name: string;
  pic: string;
  sex: string;
  age: string;
  breed: string;
  color: string;
  detail: string;
  category: {
    label: string;
    link: string;
  }[];
  thumbnail: string[];
}

export const list: ICat[] = [
  {
    id: 1,
    name: 'หอมแดง ไตรมาส',
    pic: 'pic/hom1.jpg',
    sex: 'Female',
    age: '2 years',
    breed: 'Scottish Fold',
    color: 'Tabby Silver',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus placerat felis, a eleifend arcu facilisis eget. Quisque sit amet porttitor enim, nec congue eros. Suspendisse potenti. Pellentesque ut finibus purus. Etiam id lorem ac odio aliquet iaculis quis ac justo. Nullam elit dui, vehicula sed lectus sed, bibendum dapibus justo. Duis tincidunt aliquet dictum. Nulla luctus massa eget quam rhoncus, id pharetra ex vehicula.',
    category: [
      { label: 'Scottish Fold', link: '#' },
      { label: 'Tabby Silver', link: '#/' },
      { label: 'Female', link: '#' },
    ],
    thumbnail: ['pic/hom2.jpg', 'pic/hom3.jpg', 'pic/hom4.jpg'],
  },
  {
    id: 2,
    name: 'โมจิ',
    pic: 'pic/moji3.jpg',
    sex: 'Male',
    age: '3 years',
    breed: 'Scottish Fold',
    color: 'Silver Blue',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus placerat felis, a eleifend arcu facilisis eget. Quisque sit amet porttitor enim, nec congue eros. Suspendisse potenti. Pellentesque ut finibus purus. Etiam id lorem ac odio aliquet iaculis quis ac justo. Nullam elit dui, vehicula sed lectus sed, bibendum dapibus justo. Duis tincidunt aliquet dictum. Nulla luctus massa eget quam rhoncus, id pharetra ex vehicula.',
    category: [
      { label: 'Scottish Fold', link: '#' },
      { label: 'Silver Blue', link: '#' },
      { label: 'Male', link: '#' },
    ],
    thumbnail: ['pic/moji2.jpg', 'pic/moji1.jpg', 'pic/moji4.jpg'],
  },
  {
    id: 3,
    name: 'อูนิ',
    pic: 'pic/uni1.jpg',
    sex: 'Male',
    age: '11 months',
    breed: 'Scottish Fold',
    color: 'Tabby Orange',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus placerat felis, a eleifend arcu facilisis eget. Quisque sit amet porttitor enim, nec congue eros. Suspendisse potenti. Pellentesque ut finibus purus. Etiam id lorem ac odio aliquet iaculis quis ac justo. Nullam elit dui, vehicula sed lectus sed, bibendum dapibus justo. Duis tincidunt aliquet dictum. Nulla luctus massa eget quam rhoncus, id pharetra ex vehicula.',
    category: [
      { label: 'Scottish Fold', link: '#' },
      { label: 'Tabby Orange', link: '#' },
      { label: 'Male', link: '#' },
    ],
    //   cat: ['โคล่า','ชานม','กาแฟ'],
    thumbnail: ['pic/uni2.jpg', 'pic/uni3.jpg', 'pic/uni4.jpg'],
  },
];
