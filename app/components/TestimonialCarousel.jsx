// app/components/TestimonialCarousel.jsx
import {useState, useEffect, useCallback} from 'react';

const testimonials = [
  {
    quote:
      "The Bounce Ball has been a game-changer for family playtime – the kids can't get enough of it!",
    author: 'Mike',
    role: 'Parent',
    avatar: '/images/featuredproduct/avatar-sarah.png', // Ganti dengan path avatar Anda
  },
  {
    quote:
      "An amazing product that brings so much joy. It's durable, vibrant, and perfect for outdoor fun.",
    author: 'Sarah',
    role: 'Teacher',
    avatar: '/images/testimonials/avatar2.png', // Ganti dengan path avatar Anda
  },
  {
    quote:
      "Brings back so many childhood memories! The quality is fantastic, and my children love it just as much as I did.",
    author: 'David',
    role: '90s Kid',
    avatar: '/images/testimonials/avatar3.png', // Ganti dengan path avatar Anda
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [nextSlide]);

  const getTestimonialAtIndex = (index) => {
    if (index < 0) return testimonials[testimonials.length + index];
    if (index >= testimonials.length) return testimonials[index - testimonials.length];
    return testimonials[index];
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary-royal py-16">
      <div className="w-full relative">
        {/* Previous testimonial (left) - memudar */}
        <div className="absolute left-0 top-0 h-full flex items-center justify-center opacity-30 pointer-events-none transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-xl font-normal max-w-xl mx-auto">
              "{getTestimonialAtIndex(activeIndex - 1).quote}"
            </p>
            <div className="flex items-center mt-8">
              <img
                src={getTestimonialAtIndex(activeIndex - 1).avatar}
                alt={getTestimonialAtIndex(activeIndex - 1).author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <p className="font-bold text-base">{getTestimonialAtIndex(activeIndex - 1).author}</p>
                <p className="text-gray-300 text-sm">{getTestimonialAtIndex(activeIndex - 1).role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main testimonial (center) - tidak memudar */}
        <div className="flex flex-col items-center justify-center text-center text-white px-4 mx-auto max-w-2xl transition-all duration-500 ease-in-out">
          <p className="text-xl font-normal max-w-xl mx-auto">
            "{testimonials[activeIndex].quote}"
          </p>
          <div className="flex items-center mt-8">
            <img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4 text-left">
              <p className="font-bold text-base">{testimonials[activeIndex].author}</p>
              <p className="text-gray-300 text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Next testimonial (right) - memudar */}
        <div className="absolute right-0 top-0 h-full flex items-center justify-center opacity-30 pointer-events-none transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-xl font-normal max-w-xl mx-auto">
              "{getTestimonialAtIndex(activeIndex + 1).quote}"
            </p>
            <div className="flex items-center mt-8">
              <img
                src={getTestimonialAtIndex(activeIndex + 1).avatar}
                alt={getTestimonialAtIndex(activeIndex + 1).author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <p className="font-bold text-base">{getTestimonialAtIndex(activeIndex + 1).author}</p>
                <p className="text-gray-300 text-sm">{getTestimonialAtIndex(activeIndex + 1).role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-primary-snow-white p-1 rounded-full">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === index ? 'bg-primary-rich-black' : 'bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
