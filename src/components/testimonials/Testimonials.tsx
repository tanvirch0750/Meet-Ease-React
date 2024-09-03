import React from 'react';
import CustomerImg from '../../assets/customer-4.jpg';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      imgSrc: CustomerImg,
      altText: 'photo of customer Dave Bryson',
      text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
      name: 'Dave Bryson',
    },
    {
      imgSrc: CustomerImg,
      altText: 'photo of customer Ben Hadley',
      text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      name: 'Ben Hadley',
    },
    {
      imgSrc: CustomerImg,
      altText: 'photo of customer Steve Miller',
      text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      name: 'Steve Miller',
    },
    {
      imgSrc: CustomerImg,
      altText: 'photo of customer Hannah Smith',
      text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
      name: 'Hannah Smith',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZXRpbmclMjByb29tfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZXRpbmclMjByb29tfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1681487144031-d502ea9abefc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
    'https://img.freepik.com/free-photo/luxury-nightclub-features-modern-decor-lighting-equipment-generated-by-ai_188544-45394.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/young-man-making-presentation-virtual-classroom_23-2149200209.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://plus.unsplash.com/premium_photo-1663013625960-b54f861e4074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
    'https://img.freepik.com/free-photo/serious-male-coach-giving-presentation-flipchart-business-colleagues_1163-4783.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/speaker-giving-presentation-meeting-room_155003-26343.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/group-entrepreneurs-having-business-meeting-communicating-with-their-colleague-via-video-call-office_637285-6965.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/happy-businesswoman-giving-presentation-her-partners-business-meeting_23-2147826533.jpg?size=626&ext=jpg&ga=GA1.1.911219905.1717681244&semt=ais_hybrid',
  ];

  return (
    <section
      className=" bg-gray-100 py-[40px] grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center"
      id="testimonials"
    >
      <div className="px-8 lg:px-24 py-12 lg:py-24">
        <span className=" text-lg uppercase tracking-widest font-bold text-gray-700">
          Testimonials
        </span>
        <h2 className="text-2xl mt-2 font-body lg:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text">
          Once you try it, you can't go back
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.altText}
              className="text-center md:text-left"
            >
              <img
                src={testimonial.imgSrc}
                alt={`photo of customer ${testimonial.name}`}
                className="w-16 h-16 rounded-full mb-4 mx-auto md:mx-0"
              />
              <blockquote className="text-[16px] text-gray-800 leading-relaxed mb-2">
                {testimonial.text}
              </blockquote>
              <p className="text-lg text-emerald-500 font-semibold">
                &mdash; {testimonial.name}
              </p>
            </figure>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 lg:p-8">
        {galleryImages.map((image, index) => (
          <figure key={index} className="overflow-hidden">
            <img
              src={image}
              alt="beautifully arranged food"
              className="block w-full transition-transform duration-300 transform hover:scale-110 hover:brightness-90 h-[190px]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
