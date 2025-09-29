export default function FeaturedProductSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-6 mb-12">
          <h2 className="text-[40px] font-semibold font-chillax text-primary-goldenrod">
            Champions in Playfulness
          </h2>
          <div className="hidden md:block border-1 border-l border-primary-goldenrod h-8"></div>
          <p className="text-gray-600 text-lg">
            Unleash Fun with Bigens: iconic bounce balls for joyful play.
            <a href="#" className="text-primary-goldenrod font-semibold ml-1 underline">
              Learn more
            </a>
          </p>
        </div>

        {/* Main Hero Card - Full Width */}
        <div className="bg-white rounded-2xl border-1 border-primary-royal shadow-lg overflow-hidden w-full max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Side: Content */}
            <div className="flex flex-col justify-center space-y-6 p-8 md:p-12">
              <h1 className="text-[56px] font-semibold font-chillax text-primary-royal leading-tight">
                Rediscover Play with the Iconic 50-Inch Bounce Ball
              </h1>

              <p className="text-gray-600 leading-relaxed text-base font-normal">
                Relive the '90s magic with Bigens' 50-inch Bounce Ball! Designed
                for endless fun, this vibrant green ball brings families
                together, supports sensory play for kids, and doubles as a
                fitness tool. Whether you're bouncing with your little ones,
                using it in a classroom, or adding it to your retro collection,
                it's a timeless piece that inspires joy and connection.
              </p>

              {/* Pill Buttons */}
              <div className="space-y-3">
                <button className="flex items-center gap-3 px-6 py-3 border-2 border-primary-goldenrod rounded-full text-primary-goldenrod hover:bg-primary-goldenrod/10 transition-colors w-fit">
                  <img
                    src="/images/featuredproduct/Toys.png"
                    alt="Spark"
                    width={20}
                    height={20}
                  />
                  <span className="font-normal text-base">Sparks joy & creativity</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 border-2 border-primary-goldenrod rounded-full text-primary-goldenrod hover:bg-accent/10 transition-colors w-fit">
                  <img
                    src="/images/featuredproduct/Fitness.png"
                    alt="Fitness"
                    width={20}
                    height={20}
                  />
                  <span className="font-normal text-base">
                    Perfect for fitness & therapy
                  </span>
                </button>
              </div>

              {/* CTA Button */}
              <button className="group bg-royal-bright text-primary-snow-white px-8 py-4 rounded-full font-semibold text-[20px] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl w-fit">
                Explore Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  &#8594;
                </span>
              </button>
            </div>

            {/* Right Side: Full Hero Image */}
            <div className="relative overflow-hidden">
              {/* Background gradient to match the green playground theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600"></div>

              {/* Hero Image - Full coverage */}
              <div className="relative w-full h-full">
                <img
                  src="/images/featuredproduct/Hero.svg"
                  alt="Green bounce balls in colorful playground"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Overlay Content - Extended to right */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/20 via-transparent to-transparent">
                {/* Rating Badge */}
                <div className="mb-4 w-full flex flex-col items-start">
                  <img
                    src="/images/ratings.svg"
                    alt="Ratings"
                    width={140}
                    height={32}
                  />
                  <p className="font-normal text-xl text-white mt-2">
                    Rated 4.8 out of 5 – 450+ happy bouncers
                  </p>
                </div>

                {/* Testimonial Card - Extended width */}
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl w-full ">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src="/images/featuredproduct/avatar-sarah.png"
                      alt="Sarah"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-primary-rich-black text-base">
                        Sarah - Special Ed Teacher
                      </p>
                      <div className="flex items-center">
                        {/* Five stars */}
                        <span className="text-gray-800">★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed">
                    "My students love the Bounce Ball! It's been amazing for
                    their motor skills and brings so much laughter to our
                    classroom."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
