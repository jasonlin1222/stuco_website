import { tw } from 'twind';
import Play from '@/constants/svg/play.svg';
import Countdown from 'react-countdown';

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Watch the video (3 min)</span>
  </button>
);

const renderer = ({ days, hours, minutes, seconds }) => (
  <span className={tw(`text-5xl text-white flex justify-center md:text-9xl`)}>
    {String(days).padStart(2, `0`)}:{String(hours).padStart(2, `0`)}:{String(minutes).padStart(2, `0`)}:
    {String(seconds).padStart(2, `0`)}
  </span>
);

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-bg-color to-white`)} id="VideoSec">
    <div className={tw(`max-w-7xl mx-auto max-h-9xl`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <div className={tw(`relative mx-auto w-100 h-80 bg-d-blue opacity-80 rounded-lg p-10`)}>
              <p className={tw(`flex justify-center text-white text-5xl`)}>Video Coming Soon!</p>
              <Countdown date={Date.parse(`26 May 2022 00:00:00 GMT+8`)} renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
