const features = [
  {
    icon: '/images/option/Joystick.svg',
    title: 'Joyful Quality',
    description:
      'Proudly crafting top-quality 50-inch Bounce Balls for endless fun.',
  },
  {
    icon: '/images/option/Local shipping.svg',
    title: 'Global Shipping',
    description: 'Worldwide shipping, delivered safely to your door.',
  },
  {
    icon: '/images/option/Credit card.svg',
    title: 'Secure Payments',
    description: 'Confidently pay with major cards or PayPal.',
  },
  {
    icon: '/images/option/Email.svg',
    title: 'Friendly Support',
    description: 'Contact us anytime at hello@bigenstoys.com.',
  },
];

export default function InfoBannerSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-primary-royal text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4"
            >
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="h-12 w-12"
              />
              <h3 className="text-2xl font-semibold font-chillax">
                {feature.title}
              </h3>
              <p className="text-base font-normal text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
