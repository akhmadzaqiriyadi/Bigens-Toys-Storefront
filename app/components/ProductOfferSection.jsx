// app/components/ProductOfferSection.jsx
import TestimonialCarousel from './TestimonialCarousel';

// Data untuk fitur produk
const features = [
  {icon: '/images/productoffer/fitness-ball.svg', text: 'Durable Material'},
  {
    icon: '/images/productoffer/circle-group-people.svg',
    text: 'Safe for All Ages',
  },
  {icon: '/images/productoffer/color-swatches.svg', text: 'Vibrant Colors'},
  {icon: '/images/productoffer/store.svg', text: 'Easy to Store'},
];

// Komponen untuk ikon bintang
function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary-goldenrod"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.35 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z" />
    </svg>
  );
}

export default function ProductOfferSection() {
  return (
    <section className="bg-primary-royal py-20">
      {/* Gambar Produk (Sekarang full-width) */}
      <div className="relative w-full mb-8 px-4 md:px-8 lg:px-20">
        <img
          src="/images/productoffer/hero.svg" // Pastikan path gambar ini sesuai
          alt="Giant BigensToys Play Ball"
          className="rounded-xl shadow-2xl w-full"
        />
      </div>

      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center text-white px-4 md:px-8 lg:px-20">
        {/* Rating Bintang */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-base font-medium text-gray-200">
            Rated 4.8 based on 500+ reviews
          </p>
        </div>

        {/* Judul Produk */}
        <p className="text-base font-medium text-gray-300 my-6">
          The Original Bigens
        </p>
        <h1 className="text-[56px] md:text-6xl font-bold font-chillax mb-6">
          Giant BigensToys Play Ball
        </h1>

        {/* Harga */}
        <div className="flex items-center my-6 gap-4">
          <p className="text-5xl font-semibold">$49</p>
          <p className="text-xl text-gray-400 line-through">$59</p>
          <span className="bg-primary-goldenrod text-white text-xs font-normal px-3 py-2 rounded-full">
            18% OFF
          </span>
        </div>

        {/* Deskripsi */}
        <p className="max-w-3xl text-gray-200 mb-10 leading-relaxed text-base font-medium">
          Bounce into fun with Bigens’ 50-inch Bounce Ball – the perfect mix of
          ‘90s nostalgia and modern play! Ideal for family bonding, sensory
          learning, or a retro fitness twist.
        </p>

        {/* Grid Fitur */}
        <div className="flex flex-row justify-around items-start gap-8 mb-8 w-full max-w-2xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-center w-28"
            >
              <img
                src={feature.icon}
                alt={feature.text}
                width={40}
                height={40}
              />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Info Stok */}
        <div className="rounded-full border border-white px-6 py-3 mb-8">
          <p className="text-sm">
            ⚡ Only 50 Left in Stock – Grab Yours Before They’re Gone!
          </p>
        </div>

        {/* Tombol Add to Cart */}
        <button className="w-full max-w-2xl bg-primary-goldenrod text-white font-bold text-lg py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
          Add to Cart
        </button>

        {/* Footer Ulasan */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">10,000+ 5-Star Reviews</h3>
          <p className="text-gray-300 text-base font-normal pt-4">
            See why families are loving Bigens!
          </p>
        </div>
      </div>
      <TestimonialCarousel />
    </section>
  );
}
