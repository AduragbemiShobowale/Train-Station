const trainSchedules = [
  {
    trainNumber: "LL1",
    route: "Lagos - Ibadan",
    timeOfDay: "Morning Train",
    departure: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "07:57",
      date: "30 - Jan - 2025",
    },
    arrival: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "08:21",
      date: "30 - Jan - 2025",
    },
    duration: "0 hrs 24 mins",
    classes: [
      {
        type: "First Class",
        priceAdult: "₦6000",
        priceChild: "₦4500",
        reserved: 18,
      },
      {
        type: "Business Class",
        priceAdult: "₦5000",
        priceChild: "₦4000",
        reserved: 12,
      },
      {
        type: "Standard Class",
        priceAdult: "₦3000",
        priceChild: "₦2500",
        reserved: 8,
      },
    ],
  },
  {
    trainNumber: "LL2",
    route: "Lagos - Ibadan",
    timeOfDay: "Afternoon Train", // Added property
    departure: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "13:30",
      date: "30 - Jan - 2025",
    },
    arrival: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "13:54",
      date: "30 - Jan - 2025",
    },
    duration: "0 hrs 24 mins",
    classes: [
      {
        type: "First Class",
        priceAdult: "₦6000",
        priceChild: "₦4500",
        reserved: 15,
      },
      {
        type: "Business Class",
        priceAdult: "₦5000",
        priceChild: "₦4000",
        reserved: 10,
      },
      {
        type: "Standard Class",
        priceAdult: "₦3000",
        priceChild: "₦2500",
        reserved: 6,
      },
    ],
  },
  {
    trainNumber: "LL3",
    route: "Lagos - Ibadan",
    timeOfDay: "Evening Train", // Added property
    departure: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "18:45",
      date: "30 - Jan - 2025",
    },
    arrival: {
      station: "Mobolaji Johnson Station",
      street: "Ebute Metta",
      year: "2025",
      time: "19:09",
      date: "30 - Jan - 2025",
    },
    duration: "0 hrs 24 mins",
    classes: [
      {
        type: "First Class",
        priceAdult: "₦6000",
        priceChild: "₦4500",
        reserved: 20,
      },
      {
        type: "Business Class",
        priceAdult: "₦5000",
        priceChild: "₦4000",
        reserved: 14,
      },
      {
        type: "Standard Class",
        priceAdult: "₦3000",
        priceChild: "₦2500",
        reserved: 9,
      },
    ],
  },
];

export default trainSchedules;
