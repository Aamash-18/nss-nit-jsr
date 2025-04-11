import gourabImg from "/core-team/gourab-bistu.webp";

export const events = [
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "2025-04-15",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "Join us for our annual blood donation camp in collaboration with the Red Cross Society. Your small contribution can save lives.",
      location: "NIT Jamshedpur Campus",
      time: "10:00 AM - 4:00 PM",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      date: "2025-05-05",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "Help us make our planet greener by participating in our tree plantation drive. We aim to plant 500 trees in a day.",
      location: "Jubilee Park, Jamshedpur",
      time: "9:00 AM - 1:00 PM",
    },
    {
      id: 3,
      title: "Health Awareness Workshop",
      date: "2025-06-10",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "A workshop on health awareness focusing on preventive measures and healthy lifestyle choices.",
      location: "Central Auditorium, NIT Jamshedpur",
      time: "2:00 PM - 5:00 PM",
    },
    {
      id: 4,
      title: "Cleanliness Drive",
      date: "2024-12-15",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "A successful cleanliness drive conducted in the nearby villages to promote hygiene and sanitation.",
      location: "Adityapur Village",
      time: "9:00 AM - 12:00 PM",
    },
    {
      id: 5,
      title: "Educational Outreach Program",
      date: "2024-11-20",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "An educational outreach program for underprivileged children, providing them with books, stationery, and basic education.",
      location: "Government School, Jamshedpur",
      time: "10:00 AM - 3:00 PM",
    },
    {
      id: 6,
      title: "COVID-19 Awareness Campaign",
      date: "2024-10-05",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "A campaign to spread awareness about COVID-19 prevention measures and distribute masks and sanitizers.",
      location: "Various locations in Jamshedpur",
      time: "All Day",
    },
  ];

export const galleryEvents = [
  {
    id: 1,
    eventId: "blood-donation-camp",
    title: "Blood Donation Camp",
    thumbnailSrc: "/src/assets/Gallery_Images/Blood_Donation_Camp/image1.jpg",
    category: "events",
    description:
      "Students participating in the annual blood donation camp, contributing to the community's health and wellbeing.",
    date: "March 15, 2025",
    location: "University Campus",
    imageCount: 8,
    featured: true,
  },
  {
    id: 2,
    eventId: "tree-plantation-drive",
    title: "Tree Plantation Drive",
    thumbnailSrc:
      "/src/assets/Gallery_Images/Tree_Plantation_Drive/image1.jpg",
    category: "environment",
    description:
      "Volunteers planting trees as part of the green initiative to combat climate change and promote sustainability.",
    date: "April 22, 2025",
    location: "City Park",
    imageCount: 12,
    featured: true,
  },
  {
    id: 3,
    eventId: "educational-workshop",
    title: "Educational Workshop",
    thumbnailSrc:
      "/src/assets/Gallery_Images/Educational_Workshop/image1.jpg",
    category: "education",
    description:
      "Teaching basic computer skills to underprivileged children, empowering them with digital literacy for the future.",
    date: "February 10, 2025",
    location: "Community Center",
    imageCount: 6,
    featured: false,
  },
  {
    id: 4,
    eventId: "cleanliness-drive",
    title: "Cleanliness Drive",
    thumbnailSrc: "/src/assets/Gallery_Images/Cleanliness_Drive/image1.jpg",
    category: "environment",
    description:
      "NSS volunteers cleaning the local beach area and raising awareness about plastic pollution and waste management.",
    date: "January 8, 2025",
    location: "Silver Beach",
    imageCount: 9,
    featured: false,
  },
  {
    id: 5,
    eventId: "health-awareness-camp",
    title: "Health Awareness Camp",
    thumbnailSrc:
      "/src/assets/Gallery_Images/Health_Awareness_Camp/image1.jpg",
    category: "health",
    description:
      "Free health check-up camp organized in a rural area, providing essential medical services to underserved communities.",
    date: "March 2, 2025",
    location: "Rural Health Center",
    imageCount: 10,
    featured: true,
  },
  {
    id: 6,
    eventId: "cultural-program",
    title: "Cultural Program",
    thumbnailSrc: "/src/assets/Gallery_Images/Cultural_Program/image1.jpg",
    category: "events",
    description:
      "Cultural performance during the NSS Annual Day celebration, showcasing diverse talents and traditions.",
    date: "December 12, 2024",
    location: "University Auditorium",
    imageCount: 15,
    featured: true,
  },
  {
    id: 7,
    eventId: "yoga-session",
    title: "Yoga Session",
    thumbnailSrc: "/src/assets/Gallery_Images/Yoga_Session/image1.jpg",
    category: "health",
    description:
      "Morning yoga session conducted for the community, promoting physical and mental wellbeing through ancient practices.",
    date: "January 21, 2025",
    location: "Community Garden",
    imageCount: 7,
    featured: false,
  },
  {
    id: 8,
    eventId: "awareness-rally",
    title: "Awareness Rally",
    thumbnailSrc: "/src/assets/Gallery_Images/Awareness_Rally/image1.jpg",
    category: "events",
    description:
      "Rally organized to spread awareness about social issues, mobilizing community support for positive change.",
    date: "November 30, 2024",
    location: "Downtown City",
    imageCount: 11,
    featured: false,
  },
  {
    id: 9,
    eventId: "village-outreach",
    title: "Village Outreach",
    thumbnailSrc: "/src/assets/Gallery_Images/Village_Outreach/image1.jpg",
    category: "education",
    description:
      "Volunteers teaching children in a nearby village, bridging educational gaps and inspiring young minds.",
    date: "February 28, 2025",
    location: "Greenfield Village",
    imageCount: 14,
    featured: true,
  },
];

export const galleryEventsDetailed = {
    "blood-donation-camp": {
      id: 1,
      eventId: "blood-donation-camp",
      title: "Blood Donation Camp",
      date: "March 15, 2025",
      location: "University Campus",
      category: "events",
      description: "Students participating in the annual blood donation camp, contributing to the community's health and wellbeing. Our student volunteers organized this camp in collaboration with the Red Cross, collecting over 100 units of blood that will help save numerous lives in our local hospitals.",
      images: [
        {
          id: 1,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image1.jpg",
          alt: "Students donating blood",
          width: 1200,
          height: 800
        },
        {
          id: 2,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image2.jpg",
          alt: "Medical staff collecting blood samples",
          width: 800,
          height: 1200
        },
        {
          id: 3,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image3.jpg",
          alt: "Volunteers organizing the camp",
          width: 1200,
          height: 900
        },
        {
          id: 4,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image4.jpg",
          alt: "Student receiving post-donation care",
          width: 900,
          height: 1200
        },
        {
          id: 5,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image5.jpg",
          alt: "Camp registration desk",
          width: 1200,
          height: 800
        },
        {
          id: 6,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image6.jpg",
          alt: "Doctor explaining the importance of blood donation",
          width: 800,
          height: 800
        },
        {
          id: 7,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image7.jpg",
          alt: "Blood donation awareness posters",
          width: 1200,
          height: 900
        },
        {
          id: 8,
          src: "/src/assets/Gallery_Images/Blood_Donation_Camp/image8.jpg",
          alt: "Group photo of donors and organizers",
          width: 1600,
          height: 900
        },
      ]
    },
    "tree-plantation-drive": {
      id: 2,
      eventId: "tree-plantation-drive",
      title: "Tree Plantation Drive",
      date: "April 22, 2025",
      location: "City Park",
      category: "environment",
      description: "Volunteers planting trees as part of the green initiative to combat climate change and promote sustainability. Our team planted over 200 native saplings that will help restore the local ecosystem and provide a green cover for future generations.",
      images: [
        {
          id: 1,
          src: "/src/assets/Gallery_Images/Tree_Plantation_Drive/image1.jpg",
          alt: "Volunteers planting saplings",
          width: 1200,
          height: 800
        },
        {
          id: 2,
          src: "/src/assets/Gallery_Images/Tree_Plantation_Drive/image2.jpg",
          alt: "Children learning about tree planting",
          width: 800,
          height: 1200
        },
        {
          id: 3,
          src: "/src/assets/Gallery_Images/Tree_Plantation_Drive/image3.jpg",
          alt: "Team preparing the soil",
          width: 1200,
          height: 900
        },
        {
          id: 4,
          src: "/src/assets/Gallery_Images/Tree_Plantation_Drive/image4.jpg",
          alt: "Watering the newly planted trees",
          width: 900,
          height: 1200
        },
        {
          id: 5,
          src: "/src/assets/Gallery_Images/Tree_Plantation_Drive/image5.jpg",
          alt: "Group photo with tree saplings",
          width: 1600,
          height: 900
        }
      ]
    },
    // Additional events would be defined here...
  };

export const teamMembers = {
  superCore: [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Program Officer',
      image: 'src/assets/core team images/Dr Rajesh Kumar.jpg',
      department: 'Department of Mechanical Engineering',
      email: 'rajesh.kumar@nitjsr.ac.in',
      description: 'Dr. Rajesh Kumar has been leading the NSS unit at NIT Jamshedpur for the past 5 years. Under his guidance, the unit has achieved numerous milestones and recognition.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Dr. Priya Singh',
      position: 'Faculty Coordinator',
      image: 'src/assets/core team images/Dr Priya Singh.jpg',
      department: 'Department of Computer Science',
      email: 'priya.singh@nitjsr.ac.in',
      description: 'Dr. Priya Singh is responsible for coordinating various activities and ensuring smooth functioning of the NSS unit. She has been associated with NSS for over 3 years.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Shyamali Rupam',
      position: 'Vice President',
      image: 'src/assets/core team images/Shyamli Rupam.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'shyamali.rupam@nitjsr.ac.in',
      description: 'Shyamali is responsible for overall coordination of NSS activities and leads the team of volunteers. She has been an active NSS volunteer since her first year.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
  ],
  core: [
    {
      id: 4,
      name: 'Neeraj Bhatt',
      position: 'EM Head',
      image: 'src/assets/core team images/Neeraj.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'neeraj.bhatt@nitjsr.ac.in',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Doddy Mourya',
      position: 'EM Head',
      image: 'src/assets/core team images/Doddy Mourya.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'doddy.mourya@nitjsr.ac.in',
      description: 'Doddy co-leads the Event Management division and specializes in coordinating large-scale community service projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'Pratyush Kumar',
      position: 'Creative Head',
      image: 'src/assets/core team images/Pratyush Kumar.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'pratyush.kumar@nitjsr.ac.in',
      description: 'Pratyush oversees all creative aspects of NSS campaigns and events, bringing innovation to social service initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 7,
      name: 'Utkarsh Shukla',
      position: 'Content Head',
      image: 'src/assets/core team images/Utkarsh Shukhla.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'utkarsh.shukla@nitjsr.ac.in',
      description: 'Utkarsh manages content creation and messaging strategy for all NSS communications and outreach materials.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 8,
      name: 'Gourab Bistu',
      position: 'Web Head',
      image: gourabImg,
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'gourab.bistu@nitjsr.ac.in',
      description: 'Gourab leads the web development team, ensuring digital presence and technical resources for NSS initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 9,
      name: 'Rupam Kumari',
      position: 'PR Head',
      image: 'src/assets/core team images/Rupam Kumari.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'rupam.kumari@nitjsr.ac.in',
      description: 'Rupam manages public relations and external communications for NSS, building partnerships with community stakeholders.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 10,
      name: 'Kajal Shaw',
      position: 'PR Head',
      image: 'src/assets/core team images/kajal shaw.jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'kajal.shaw@nitjsr.ac.in',
      description: 'Kajal co-leads the public relations team, focusing on media engagement and institutional partnerships.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 13,
      name: 'Rinki Kumari',
      position: 'Media Head',
      image: 'src/assets/core team images/Rinki kumari .jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'rinki.kumari@nitjsr.ac.in',
      description: 'Rinki manages all media content and documentation of NSS activities, creating compelling visual narratives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 14,
      name: 'Sushant Kachhap',
      position: 'Media Head',
      image: 'src/assets/core team images/Sushant Kachhap .jpg',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'sushant.kachhap@nitjsr.ac.in',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
  ],
  volunteers: [
    {
      id: 31,
      name: 'Rahul Verma',
      position: 'Volunteer',
      image: 'src/assets/volunteers/Rahul Verma.jpg',
      department: 'B.Tech, Mechanical Engineering',
      email: 'rahul.verma@nitjsr.ac.in',
      description: 'Rahul is an enthusiastic volunteer who actively participates in all NSS activities. He is particularly interested in environmental conservation projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 32,
      name: 'Neha Gupta',
      position: 'Volunteer',
      image: 'src/assets/volunteers/Neha Gupta.jpg',
      department: 'B.Tech, Computer Science',
      email: 'neha.gupta@nitjsr.ac.in',
      description: 'Neha is passionate about teaching and regularly conducts educational workshops for underprivileged children as part of NSS activities.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 33,
      name: 'Vikram Singh',
      position: 'Volunteer',
      image: 'src/assets/volunteers/Vikram Singh.jpg',
      department: 'B.Tech, Electronics Engineering',
      email: 'vikram.singh@nitjsr.ac.in',
      description: 'Vikram is skilled in organizing health camps and awareness programs. He has been instrumental in the success of several health-related initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 34,
      name: 'Ananya Reddy',
      position: 'Volunteer',
      image: 'src/assets/volunteers/Ananya Reddy.jpg',
      department: 'B.Tech, Chemical Engineering',
      email: 'ananya.reddy@nitjsr.ac.in',
      description: 'Ananya is dedicated to social service and has been actively involved in various community outreach programs organized by NSS.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
  ],
};