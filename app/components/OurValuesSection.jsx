const values = [
  {
    icon: '/images/ourvalues/Value1.svg',
    title: 'Retro Revival',
    description:
      "Born in the '90s, Bigens brought the iconic 50-inch Bounce Ball back to life in 2024 with Vertuem. We're here to rekindle the nostalgia and spark new memories!",
    titleColor: 'text-primary-crimson', // Menggunakan warna dari tailwind.css
  },
  {
    icon: '/images/ourvalues/Value2.svg',
    title: 'Crafted for All',
    description:
      'Our bounce balls are designed for everyone—kids, families, educators, and fitness lovers. They inspire creativity, support learning, and bring people together.',
    titleColor: 'text-primary-royal', // Menggunakan warna dari tailwind.css
  },
  {
    icon: '/images/ourvalues/Value3.svg',
    title: 'Play with Purpose',
    description:
      'We believe in the power of play to connect, heal, and grow. Bigens fosters family bonding, sensory development, and active fun for all ages.',
    titleColor: 'text-primary-goldenrod', // Menggunakan warna dari tailwind.css
  },
];

export default function OurValuesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-chillax mb-4 text-primary-goldenrod">
          Bouncing Back with Purpose
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Reviving the '90s spirit of play for a new generation of joy-seekers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-primary-snow-white rounded-lg overflow-hidden max-w-[420px] mx-auto" // Menggunakan warna dari tailwind.css
            >
              <div className="relative w-full h-64">
                <img
                  src={value.icon}
                  alt={`${value.title} icon`}
                  className="p-8 object-contain w-full h-full"
                />
              </div>
              <div className="p-6 text-left space-y-3">
                <h3
                  className={`text-2xl font-semibold font-chillax ${value.titleColor}`}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pr-6">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
