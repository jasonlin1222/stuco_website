import { tw } from 'twind';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const aboutLinks = [
  {
    label: `Introduction`,
    href: `#VideoSec`,
  },
  {
    label: `Why Us?`,
    href: `#ListSec`,
  },
  {
    label: `Future Plans`,
    href: `#FeatureSec`,
  },
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)} id="footer">
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-10 flex flex-wrap`)}>
      <div className={tw(`w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h3 className={tw(`text-gray-900 text-xl font-bold mb-1`)}>Navigation</h3>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h3 className={tw(`text-gray-900 text-xl font-bold mb-1`)}>Contact us</h3>
              <div className={tw(`flex flex-col md:flex-row md:space-x-4 `)}>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/letitia_88403/"
                      className={tw(`flex flex-row space-x-2 text-pink-600`)}
                    >
                      <InstagramIcon fontSize="large" />
                      <p className={tw(`text-md text-black`)}>@letitia_88403</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ja20nl1n/"
                      className={tw(`flex flex-row space-x-2 text-pink-600`)}
                    >
                      <InstagramIcon fontSize="large" />
                      <p className={tw(`text-md text-black`)}>@ja20l1n</p>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="mailto:11032067@st.fhjh.tp.edu.tw" className={tw(`flex flex-row space-x-2 text-gray-700`)}>
                      <EmailIcon fontSize="large" />
                      <span className={tw(`text-md text-black`)}>Letitia_Liu</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:11031082@st.fhjh.tp.edu.tw" className={tw(`flex flex-row space-x-2 text-gray-700`)}>
                      <EmailIcon fontSize="large" />
                      <span className={tw(`text-md text-black`)}>Jason_Lin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
