// import React from 'react'
import './post.scss';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <>
    <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

    <div className="post-wrapper">
      <div className="post">
        <div className='user-wrapper'>
          <div className='round-pfp'></div>
          <p className='user-text'>u/username_here</p>
          <p className='date-text'>6 mo. ago</p>
        </div>
        <p className="post-header">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <p className="post-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit, dicta, libero, ducimus dolor vel quod hic omnis
          temporibus atque obcaecati laudantium in. Nemo totam iure aspernatur
          architecto quis, assumenda voluptate a facere. Dolores sapiente quo,
          modi architecto fuga debitis consequatur recusandae quas magni non
          nobis doloribus labore eum eligendi accusantium est asperiores atque
          sit reprehenderit alias distinctio delectus vitae! Rerum, consequatur.
          Ea inventore fugiat dolor facilis maxime quod tempore esse
          consectetur. Facilis, non reiciendis, aliquam optio illum ut dolorum
          voluptas natus ad iste eveniet? Tenetur aliquid illum, corporis sequi
          deleniti fugit. Illo voluptatibus dignissimos et. Omnis magnam maiores
          ex possimus.
        </p>
      </div>
    </div>
    </>
  );
};

export default Post;
