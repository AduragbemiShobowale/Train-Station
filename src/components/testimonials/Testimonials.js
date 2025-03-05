const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    fullName: "Jane Doe",
    testimonial:
      "This service exceeded my expectations! Booking a train has never been easier.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    fullName: "John Smith",
    testimonial:
      "I love how seamless and user-friendly the platform is. Highly recommended!",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    fullName: "Michael Brown",
    testimonial:
      "I saved so much time booking my tickets online. Great platform!",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    fullName: "Emily Davis",
    testimonial:
      "Finally, a train booking service that works perfectly. No more long queues!",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    fullName: "James Wilson",
    testimonial:
      "Super easy to use, and the customer support is very responsive.",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    fullName: "Sophia Martinez",
    testimonial: "I love how fast and smooth the booking process is. 10/10!",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    fullName: "William Anderson",
    testimonial:
      "Reliable and efficient. The best train booking platform in Nigeria!",
  },
  {
    id: 9,
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    fullName: "Olivia Taylor",
    testimonial:
      "The website is easy to navigate, and train schedules are always accurate.",
  },
  {
    id: 10,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    fullName: "David Thomas",
    testimonial:
      "I’ve been using this platform for months, and I’ve never had any issues.",
  },
  {
    id: 11,
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    fullName: "Charlotte White",
    testimonial:
      "A game-changer for train travel in Nigeria. I highly recommend it!",
  },
  {
    id: 12,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    fullName: "Daniel Harris",
    testimonial: "Train booking made easy and hassle-free. Love it!",
  },
];

// Function to get all testimonials
export const getTestimonials = () => {
  return testimonials;
};

// Function to get a single testimonial by ID
export const getTestimonialById = (id) => {
  return testimonials.find((testimonial) => testimonial.id === id);
};
