import { tw } from 'twind';

const articles = [
  {
    title: `Celebrate Holidays!`,
    description: `Halloween Party, Trick or Treat, Christmas Cookie Sale`,
    image: `/images/1event.jpeg`,
    alt: `1st`,
  },
  {
    title: `Seasonal Large-Scale Events!`,
    description: `Winter Gala, Easter Egg Hunt, Spirit Week, Game Night`,
    image: `/images/2event.jpeg`,
    alt: `2nd`,
  },
  {
    title: `Educational Opportunities!`,
    description: `AP Sharing, Alumni Sharing`,
    image: `/images/3event.jpg`,
    alt: `3rd`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)} />
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Missed out on past events?</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          We are hosting it again and adding new ones!
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer z-0 scale-95 hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-10`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-20 relative`)}>
                  <p className={tw(`uppercase text-sm font-bold text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
