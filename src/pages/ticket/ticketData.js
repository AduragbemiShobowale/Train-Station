const ticketData = [
    {
      _id: "67d1f0a703dc9425c48696ad",
      train: {
        trainNumber: "AK-001",
        route: "Lagos - Ibadan Morning Train",
        departure: {
          station: "Mobolaji Johnson Station",
          time: "07:57",
          date: "28-Jan-2025",
          location: "Ebutte Metta"
        },
        arrival: {
          station: "Mobolaji Johnson Station",
          time: "08:21",
          date: "28-Jan-2025",
          location: "Ebutte Metta"
        }
      },
      classType: "First Class",
      coach: "CO8",
      seats: ["1A"],
      passengers: [
        {
          type: "Adult",
          name: "Oluwaseun Adedayo",
          nin: "12345678901",
          phone: "08028759134"
        }
      ],
      totalPrice: 10400,
      status: "Active",
      PNRNo: "5R2WSIX786"
    },
    {
      _id: "67d1f0a703dc9425c48696ae",
      train: {
        trainNumber: "AK-002",
        route: "Abuja - Kaduna Evening Train",
        departure: {
          station: "Idumagbo",
          time: "16:30",
          date: "30-Jan-2025",
          location: "Abuja"
        },
        arrival: {
          station: "Rigasa Station",
          time: "18:45",
          date: "30-Jan-2025",
          location: "Kaduna"
        }
      },
      classType: "Business Class",
      coach: "CO3",
      seats: ["5B"],
      passengers: [
        {
          type: "Adult",
          name: "John Doe",
          nin: "98765432101",
          phone: "08123456789"
        }
      ],
      totalPrice: 7500,
      status: "confirmed",
      PNRNo: "NRC2503150"
    },
    {
      _id: "67d1f0a703dc9425c48696af",
      train: {
        trainNumber: "AK-003",
        route: "Port Harcourt - Enugu",
        departure: {
          station: "PH Terminal",
          time: "09:00",
          date: "01-Feb-2025",
          location: "Port Harcourt"
        },
        arrival: {
          station: "Enugu Terminal",
          time: "12:15",
          date: "01-Feb-2025",
          location: "Enugu"
        }
      },
      classType: "Economy Class",
      coach: "CO5",
      seats: ["10C"],
      passengers: [
        {
          type: "Adult",
          name: "Jane Doe",
          nin: "12312312345",
          phone: "07098765432"
        }
      ],
      totalPrice: 5000,
      status: "confirmed",
      PNRNo: "NRC2503503"
    }
  ];
  
  export default ticketData;
  