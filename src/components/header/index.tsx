import { tw } from 'twind/css';
import Button from '@/components/button';
import Typed from 'typed.js';
import React from 'react';

const Header = () => {
  const el = React.useRef() as React.MutableRefObject<HTMLSpanElement>;
  const typed = React.useRef<Typed>();

  React.useEffect(() => {
    const options = {
      strings: [` Value Your <b><i>Rights</i></b>`, ` Hear Your <b><i>Voice</i></b>`, `Fight For <b><i>Change</i></b>`],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 750,
      startDelay: 200,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      const typedItem = typed.current;
      typedItem?.destroy();
    };
  }, []);

  return (
    <header className={tw(`bg-bg-color`)}>
      <div className={tw(`max-w-6xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`font-sans text-6xl md:text-6xl lg:text-8xl text-center text-white`)}>
          We <span className={tw(`subpixel-antialiased`)} ref={el} />
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-300 text-center text-xl lg:text-3xl`)}>
            2022 Student Council <br />
            Vote for{` `}
            <b>
              <u>Letitia</u>
            </b>
            {` `}
            and{` `}
            <b>
              <u>Jason</u>
            </b>
          </p>
        </div>
        <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
          <a href="#VideoSec">
            <Button primary>Learn more</Button>
          </a>
          <span className={tw(`mx-2 text-white`)}>or</span>
          <a href="#footer">
            <Button>Contact us</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
