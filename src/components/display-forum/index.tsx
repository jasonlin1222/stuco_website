import React from 'react';
import Link from 'next/link';
import { tw } from 'twind';
import style from '../../styles/Home.module.css';

function Displayforum({ response }) {
  return (
    <div>
      <div className={style.topcont}>
        <h1 className={style.heading}>Discussion Page</h1>
        <div>
          <Link href="/upload">
            <button type="button">Click to comment</button>
          </Link>
        </div>
      </div>
      {response && response.length
        ? response.map((post: any) => (
            <div key={post.id} className={style.questioncont}>
              <h2 className={style.subheading}>{post.attributes.Title}</h2>
              <p className={tw(`text-clip`)}>{post.attributes.Description}</p>
            </div>
          ))
        : `Be the first one to comment!`}
    </div>
  );
}
export default Displayforum;
