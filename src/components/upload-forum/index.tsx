import React, { useState } from 'react';
import { createQuestion } from '@/pages/api';
import Link from 'next/link';
import Router from 'next/router';
import style from '../../styles/Home.module.css';

function Uploadforum() {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);

  const sendData = () => {
    const newQuestion = {
      data: {
        Description: description,
        Title: name,
      },
    };
    createQuestion(newQuestion);
    Router.push(`/forum`);
  };

  return (
    <div className={style.uploadpage}>
      <div className={style.topcont}>
        <h1 className={style.heading}>New Comment</h1>
        <Link href="/forum">
          <button type="button">Back</button>
        </Link>
      </div>
      <div className={style.formcont}>
        <form className={style.uploadform}>
          <input
            type="text"
            placeholder="Enter your title"
            maxLength={74}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Enter your description"
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={() => sendData()}>
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}
export default Uploadforum;
