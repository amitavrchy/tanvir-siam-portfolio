'use client';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Dr. Rafiq Ahmed',
    title: 'Professor, Green University',
    feedback:
      "Tanvir is a dedicated and talented individual. His commitment to research and engineering is remarkable.",
  },
  {
    name: 'Engr. Sharmin Akter',
    title: 'Supervisor, DESCO Internship',
    feedback:
      "Tanvir showed great technical understanding and enthusiasm during his internship. A valuable team member.",
  },
  {
    name: 'Mr. Jahid Hossain',
    title: 'Project Manager, PRAN RFL Group',
    feedback:
      "A quick learner and problem-solver. Tanvir contributed meaningfully to our production and automation team.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false, // we use custom arrows
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <MessageCircle size={32} className="text-teal-400" />
          Testimonials
        </h2>

        {/* Slider Controls */}
        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 rounded-full bg-gray-800 hover:bg-teal-600 transition"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 rounded-full bg-gray-800 hover:bg-teal-600 transition"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="px-6 text-center">
              <p className="text-lg text-gray-300 italic leading-relaxed mb-6 max-w-2xl mx-auto">
                “{testimonial.feedback}”
              </p>
              <h3 className="text-teal-400 font-semibold text-xl">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
