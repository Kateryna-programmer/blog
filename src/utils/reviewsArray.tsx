import avatar1 from '../assets/images/avatar-1.jpg';
import avatar2 from '../assets/images/avatar-2.jpg';
import avatar3 from '../assets/images/avatar-3.jpg';

type Reviews = {
  fullname: string;
  text: string;
  img: string;
};

const reviewsArray: Reviews[] = [
  {
    fullname: 'Helen Santiago',
    img: avatar1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis eos, culpa asperiores, quo non fuga ea consequatur laudantium amet harum optio, eum deleniti repellendus cumque vel mollitia? Reprehenderit, repudiandae!',
  },
  {
    fullname: 'Alex Born ',
    img: avatar2,
    text: 'Consectetur adipisicing elit. Iure reiciendis culpa asperiores, quo non fuga ea consequatur laudantium. Lorem ipsum dolor sit amet c amet harum optio, eum deleniti repellendus cumque vel mollitia? Reprehenderit, repudiandae eos !',
  },
  {
    fullname: 'Mila Green',
    img: avatar3,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus soluta impedit, labore illo architecto atque. Culpa, corporis minus repellendus veritatis distinctio, cupiditate eaque maxime, adipisci fuga dolore soluta ab qui.',
  },
];

export default reviewsArray;
