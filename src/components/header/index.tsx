import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import Typed from 'typed.js';
import React from 'react';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(80vh - 6rem);
`;

const Header = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [`Rights`, `Opinion`, `Voice`],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 750,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-6xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`font-sans text-6xl md:text-6xl lg:text-8xl text-center text-gray-800`)}>
          We value your <span className={tw(`font-extrabold font-italic subpixel-antialiased`)} ref={el} />
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
            2022 Student Council <br />
            President and Vice President Election
          </p>
        </div>
        <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
          <Button primary>Learn more</Button>
          <span className={tw(`mx-2`)}>or</span>
          <Button>Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
