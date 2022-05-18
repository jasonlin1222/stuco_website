import { tw } from 'twind';

const ListSection = () => (
  <section className={tw(`bg-white lg:py-28 pt-28 overflow-hidden`)} id="ListSec">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
          You might be wondering...
        </h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why vote for us?</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            <li className={tw(`flex -mx-4`)}>
              <div className={tw(`px-4`)}>
                <span
                  className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                >
                  1
                </span>
              </div>
              <div className={tw(`px-4`)}>
                <h3 className={tw(`my-4 text-xl font-semibold`)}>Leadership</h3>
                <p className={tw(`text-gray-500 leading-loose`)}>
                  <ul>
                    <li>
                      <span className={tw(`font-bold`)}>➤ Letitia</span>: Debate Club President, Student Council Head
                      Event Manager, Head of Policy Team
                    </li>
                    <li>
                      <span className={tw(`font-bold`)}>➤ Jason</span>: STEM Club President, Student Council Treasurer
                    </li>
                  </ul>
                </p>
              </div>
            </li>
            <li className={tw(`flex -mx-4`)}>
              <div className={tw(`px-4`)}>
                <span
                  className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                >
                  2
                </span>
              </div>
              <div className={tw(`px-4`)}>
                <h3 className={tw(`my-4 text-xl font-semibold`)}>Competent</h3>
                <p className={tw(`text-gray-500 leading-loose`)}>
                  <ul>
                    <li>➤ Only candidates to be in Student Council for 2 years</li>
                    <li>➤ Main actors in Student Council events: Winter Gala, Halloween, Spirit Week, etc.</li>
                    <li>➤ Well-known reputation for being responsible, hardworking, and efficient</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className={tw(`flex -mx-4`)}>
              <div className={tw(`px-4`)}>
                <span
                  className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                >
                  3
                </span>
              </div>
              <div className={tw(`px-4`)}>
                <h3 className={tw(`my-4 text-xl font-semibold`)}>Proactive</h3>
                <p className={tw(`text-gray-500 leading-loose`)}>
                  <ul>
                    <li>➤ Always willing to speak with school on behalf of students and stand for what is right</li>
                    <li>➤ Promote student input on Student Council decisions</li>
                  </ul>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img alt="feature" src="features.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
