import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '../button';

const FeatureSection = () => (
  <section className={tw(`bg-bg-color pb-6`)} id="FeatureSec">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-bg-color`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-300 font-semibold tracking-wide uppercase`)}>Policies</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-white`)}>How we change the game</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Relax Uniform Regulations</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Advocate for less hair restrictions and pants for female uniform</li>
                <li>➤ Difficult, but promise to be the team that works hardest to change regulations</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Accessible College Resources</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Create platform to book sessions with teachers to discuss college application</li>
                <li>
                  ➤ Create senior profile of college applications from Fuhsing students who got into top schools for
                  YOUR reference
                </li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Book-Sharing</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Website for Book Sharing to share/reuse textbooks, prepbooks, PDFs, etc.</li>
                <li>➤ Save money on buying new books, benefit the environment, and gain access to more resources!</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Increase transparency</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Publish meeting minutes</li>
                <li>➤ Keep students constantly updated on Student Council progress on all proposals</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Club Collaborations</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Support new clubs with hosting events, eg. shows, game nights</li>
                <li>➤ Help clubs to gain access and exposure to school and Student Council resources</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Digitalization for Convenience</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Digitalize absent forms and classroom borrowing to ensure student convenience</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Flexible Breakfast Time</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Advocate for eating breakfast during morning period</li>
                <li className={tw(`text-blue-400`)}>#BreakfastIsLife #EatingIsARight</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Reasonable Electronic Use</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>➤ Allow individuals more leniency in phone use during emergencies</li>
                <li>
                  ➤ Create system of registering for consistent electronic use in classes/events that strongly require
                  electronics, eg. AP Art
                </li>
                <li>➤ Increase accessibility of internet by establishing a more user-friendly Internet system</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 border-b md:border-r md:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-300`)} />
              <div className={tw(`ml-4 text-2xl text-white`)}>Establishing Bilingual Bell</div>
            </div>
            <p className={tw(`leading-loose text-gray-300`)}>
              <ul>
                <li>
                  ➤ Negotiate with school administration to take into account testing periods of bilingual students and
                  adjust bell accordingly
                </li>
                <li>➤ No more interruptions during exams!</li>
              </ul>
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center justify-center text-3xl p-4 text-white`)}>Want Something Else?</div>
            <div className={tw(`flex items-center justify-center`)}>
              <a href="/forum">
                <Button>
                  <p className={tw(`text-lg text-white text-bold p-2 text-black`)}>Tell us!</p>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
