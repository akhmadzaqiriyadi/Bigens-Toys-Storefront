const features = [
  {
    image: '/images/whychoose/whychoose1.svg',
    title: 'Timeless Durability',
    description:
      'Crafted with tough, high-quality materials, our 50-inch Bounce Ball is made to last through endless playtime adventures.',
  },
  {
    image: '/images/whychoose/whychoose2.svg',
    title: 'Easy Returns',
    description:
      'Not bouncing with joy? Return or exchange your ball hassle-free within 30 days, no questions asked.',
  },
  {
    image: '/images/whychoose/whychoose3.svg',
    title: 'Free Worldwide Shipping',
    description:
      "We'll deliver your Bounce Ball to your doorstep at no extra cost, anywhere in the world, anytime.",
  },
  {
    image: '/images/whychoose/whychoose4.svg',
    title: 'Secure Checkout',
    description:
      'Shop with confidence—your payment is protected with our encrypted, safe checkout process.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold font-chillax mb-4 text-primary-goldenrod">
          Why Bigens Bounce Balls Shine
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Experience hassle-free fun with a toy built for joy and connection.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-primary-goldenrod w-full max-w-[640px]"
            >
              {/* Bagian Gambar (dengan tinggi tetap) */}
              <div className="relative w-full h-80">
                {' '}
                {/* Tinggi gambar dibuat tetap */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover object-top w-full h-full"
                />
              </div>

              {/* Bagian Deskripsi (dibuat fleksibel untuk mengisi sisa ruang) */}
              <div className="flex flex-col flex-1 p-6 text-left">
                {' '}
                {/* 'flex-1' membuat area ini mengisi sisa ruang */}
                <h3 className="text-2xl font-semibold font-chillax text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
