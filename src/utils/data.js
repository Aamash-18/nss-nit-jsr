
export const events = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "2025-03-15",
    category: "past",
    image: "/Gallery_Images/Blood_Donation_Camp/image1.jpg",
    description:
      "Join us for our annual blood donation camp in collaboration with the Red Cross Society. Your small contribution can save lives.",
    location: "NIT Jamshedpur Campus",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    date: "2025-04-22",
    category: "past",
    image: "/Gallery_Images/Tree_Plantation_Drive/image1.jpg",
    description:
      "Help us make our planet greener by participating in our tree plantation drive. We aim to plant 500 trees in a day.",
    location: "Jubilee Park, Jamshedpur",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: 3,
    title: "Health Awareness Workshop",
    date: "2025-03-02",
    category: "past",
    image: "/Gallery_Images/Health_Awareness_Camp/image5.jpg",
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
    image: "/Gallery_Images/Cleanliness_Drive/image1.jpg",
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
    image: "/Gallery_Images/Village_Outreach/image1.jpg",
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
    image: "/Gallery_Images/Health_Awareness_Camp/image1.jpg",
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
    thumbnailSrc: "/Gallery_Images/Blood_Donation_Camp/image1.jpg",
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
      "/Gallery_Images/Tree_Plantation_Drive/image1.jpg",
    category: "environment",
    description:
      "Volunteers planting trees as part of the green initiative to combat climate change and promote sustainability.",
    date: "April 22, 2025",
    location: "City Park",
    imageCount: 5,
    featured: true,
  },
  {
    id: 3,
    eventId: "educational-workshop",
    title: "Educational Workshop",
    thumbnailSrc:
      "/Gallery_Images/Educational_Workshop/image1.jpg",
    category: "education",
    description:
      "Teaching basic computer skills to underprivileged children, empowering them with digital literacy for the future.",
    date: "February 10, 2025",
    location: "Community Center",
    imageCount: 9,
    featured: false,
  },
  {
    id: 4,
    eventId: "cleanliness-drive",
    title: "Cleanliness Drive",
    thumbnailSrc: "/Gallery_Images/Cleanliness_Drive/image1.jpg",
    category: "environment",
    description:
      "NSS volunteers cleaning the local beach area and raising awareness about plastic pollution and waste management.",
    date: "January 8, 2025",
    location: "Silver Beach",
    imageCount: 10,
    featured: false,
  },
  {
    id: 5,
    eventId: "health-awareness-camp",
    title: "Health Awareness Camp",
    thumbnailSrc:
      "/Gallery_Images/Health_Awareness_Camp/image1.jpg",
    category: "health",
    description:
      "Free health check-up camp organized in a rural area, providing essential medical services to underserved communities.",
    date: "March 2, 2025",
    location: "Rural Health Center",
    imageCount: 6,
    featured: true,
  },
  {
    id: 6,
    eventId: "cultural-program",
    title: "Cultural Program",
    thumbnailSrc: "/Gallery_Images/Cultural_Program/image1.jpg",
    category: "events",
    description:
      "Cultural performance during the NSS Annual Day celebration, showcasing diverse talents and traditions.",
    date: "December 12, 2024",
    location: "University Auditorium",
    imageCount: 6,
    featured: true,
  },
  {
    id: 7,
    eventId: "yoga-session",
    title: "Yoga Session",
    thumbnailSrc: "/Gallery_Images/Yoga_Session/image1.jpg",
    category: "health",
    description:
      "Morning yoga session conducted for the community, promoting physical and mental wellbeing through ancient practices.",
    date: "January 21, 2025",
    location: "Community Garden",
    imageCount: 5,
    featured: false,
  },
  {
    id: 8,
    eventId: "awareness-rally",
    title: "Awareness Rally",
    thumbnailSrc: "/Gallery_Images/Awareness_Rally/image1.jpg",
    category: "events",
    description:
      "Rally organized to spread awareness about social issues, mobilizing community support for positive change.",
    date: "November 30, 2024",
    location: "Downtown City",
    imageCount: 8,
    featured: false,
  },
  {
    id: 9,
    eventId: "village-outreach",
    title: "Village Outreach",
    thumbnailSrc: "/Gallery_Images/Village_Outreach/image1.jpg",
    category: "education",
    description:
      "Volunteers teaching children in a nearby village, bridging educational gaps and inspiring young minds.",
    date: "February 28, 2025",
    location: "Greenfield Village",
    imageCount: 7,
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
        src: "/Gallery_Images/Blood_Donation_Camp/image1.jpg",
        alt: "Students donating blood",
        width: 1200,
        height: 800
      },
      {
        id: 2,
        src: "/Gallery_Images/Blood_Donation_Camp/image2.jpg",
        alt: "Medical staff collecting blood samples",
        width: 800,
        height: 1200
      },
      {
        id: 3,
        src: "/Gallery_Images/Blood_Donation_Camp/image3.jpg",
        alt: "Volunteers organizing the camp",
        width: 1200,
        height: 900
      },
      {
        id: 4,
        src: "/Gallery_Images/Blood_Donation_Camp/image4.jpg",
        alt: "Student receiving post-donation care",
        width: 900,
        height: 1200
      },
      {
        id: 5,
        src: "/Gallery_Images/Blood_Donation_Camp/image5.jpg",
        alt: "Camp registration desk",
        width: 1200,
        height: 800
      },
      {
        id: 6,
        src: "/Gallery_Images/Blood_Donation_Camp/image6.jpg",
        alt: "Doctor explaining the importance of blood donation",
        width: 800,
        height: 800
      },
      {
        id: 7,
        src: "/Gallery_Images/Blood_Donation_Camp/image7.jpg",
        alt: "Blood donation awareness posters",
        width: 1200,
        height: 900
      },
      {
        id: 8,
        src: "/Gallery_Images/Blood_Donation_Camp/image8.jpg",
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
    description: "Volunteers planting trees as part of the green initiative to combat climate changes and promote sustainability. Our team planted over 200 native saplings that will help restore the local ecosystem and provide a green cover for future generations.",
    images: [
      {
        id: 1,
        src: "/Gallery_Images/Tree_Plantation_Drive/image1.jpg",
        alt: "Volunteers planting saplings",
        width: 1200,
        height: 800
      },
      {
        id: 2,
        src: "/Gallery_Images/Tree_Plantation_Drive/image2.jpg",
        alt: "Children learning about tree planting",
        width: 800,
        height: 1200
      },
      {
        id: 3,
        src: "/Gallery_Images/Tree_Plantation_Drive/image3.jpg",
        alt: "Team preparing the soil",
        width: 1200,
        height: 900
      },
      {
        id: 4,
        src: "/Gallery_Images/Tree_Plantation_Drive/image4.jpg",
        alt: "Watering the newly planted trees",
        width: 900,
        height: 1200
      },
      {
        id: 5,
        src: "/Gallery_Images/Tree_Plantation_Drive/image5.jpg",
        alt: "Group photo with tree saplings",
        width: 1600,
        height: 900
      }
    ]
  },
  "educational-workshop": {
    "id": 2,
    "eventId": "educational-workshop",
    "title": "Educational Workshop",
    "date": "February 10, 2025",
    "location": "University Campus",
    "category": "education",
    "description": "Teaching basic computer skills to underprivileged children, empowering them with essential digital literacy.The workshop bridged the digital divide by teaching basic computer skills like browsing, word processing, and internet use. Volunteers mentored participants, boosting their digital confidence.",
    "images": [
      {
        "id": 1,
        "src": "/Gallery_Images/Educational_Workshop/image1.jpg",
        "alt": "Participantions from different students and volunteers in learning digital skills",
        "width": 1200,
        "height": 800
      },
      {
        "id": 2,
        "src": "/Gallery_Images/Educational_Workshop/image2.jpg",
        "alt": "Faculty felicitated with a plaque for contribution to the workshop",
        "width": 800,
        "height": 1200
      },
      {
        "id": 3,
        "src": "/Gallery_Images/Educational_Workshop/image3.jpg",
        "alt": "Speaker explaining computer concepts on stage",
        "width": 1200,
        "height": 900
      },
      {
        "id": 4,
        "src": "/Gallery_Images/Educational_Workshop/image4.jpg",
        "alt": "Participants listening attentively to the speaker",
        "width": 900,
        "height": 1200
      },
      {
        "id": 5,
        "src": "/Gallery_Images/Educational_Workshop/image5.jpg",
        "alt": "Volunteers and students getting certificates of participation",
        "width": 1200,
        "height": 800
      },
      {
        "id": 6,
        "src": "/Gallery_Images/Educational_Workshop/image6.jpg",
        "alt": "Audience seated in a large hall participating in the session",
        "width": 800,
        "height": 800
      },
      {
        "id": 7,
        "src": "/Gallery_Images/Educational_Workshop/image7.jpg",
        "alt": "Group of volunteers and attendees posing for a picture",
        "width": 1200,
        "height": 900
      },
      {
        "id": 8,
        "src": "/Gallery_Images/Educational_Workshop/image8.jpg",
        "alt": "Group photo of all participants and organizers in the hall",
        "width": 1600,
        "height": 900
      },
      {
        "id": 9,
        "src": "/Gallery_Images/Educational_Workshop/image9.jpg",
        "alt": "Guests were honored with tokens of appreciation for attending the event.",
        "width": 1600,
        "height": 900
      }
    ]
  },
  "cleanliness-drive": {
    id: 4,
    eventId: "cleanliness-drive",
    title: "Cleanliness Drive",
    date: "January 8, 2025",
    location: "NIT College Campus",
    category: "environment",
    description: "NSS volunteers cleaning the NIT college campus and raising awareness about plastic pollution.The drive successfully promoted cleanliness and hygiene on campus. Informational banners were also used to spread the message of sustainability and cleanliness.",
    images: [
      {
        id: 1,
        src: "/Gallery_Images/Cleanliness_Drive/image1.jpg",
        alt: "Group photo of volunteers after the successful completion of the cleanliness drive.",
        width: 1200,
        height: 800
      },
      {
        id: 2,
        src: "/Gallery_Images/Cleanliness_Drive/image2.jpg",
        alt: "Students holding awareness banners",
        width: 800,
        height: 1200
      },
      {
        id: 3,
        src: "/Gallery_Images/Cleanliness_Drive/image3.jpg",
        alt: "Collected waste segregated for recycling",
        width: 1200,
        height: 900
      },
      {
        id: 4,
        src: "/Gallery_Images/Cleanliness_Drive/image4.jpg",
        alt: "Group of volunteers in action",
        width: 900,
        height: 1200
      },
      {
        id: 5,
        src: "/Gallery_Images/Cleanliness_Drive/image5.jpg",
        alt: "Group photo after the drive",
        width: 1600,
        height: 900
      },
      {
        id: 6,
        src: "/Gallery_Images/Cleanliness_Drive/image6.jpg",
        alt: "Volunteers segregating plastic waste",
        width: 1200,
        height: 900
      },
      {
        id: 7,
        src: "/Gallery_Images/Cleanliness_Drive/image7.jpg",
        alt: "Volunteers collecting waste near hostel blocks",
        width: 1200,
        height: 900
      },
      {
        id: 8,
        src: "/Gallery_Images/Cleanliness_Drive/image8.jpg",
        alt: "Plastic waste collected in sacks",
        width: 900,
        height: 1200
      },
      {
        id: 9,
        src: "/Gallery_Images/Cleanliness_Drive/image9.jpg",
        alt: "Volunteers cleaning garden areas in the college",
        width: 1600,
        height: 900
      },
      {
        id: 10,
        src: "/Gallery_Images/Cleanliness_Drive/image10.jpg",
        alt: "Volunteers cleaning every corner of the college",
        width: 1600,
        height: 900
      }
    ]
  },
  "health-awareness-camp": {
    id: 5,
    eventId: "health-awareness-camp",
    title: "Health Awareness Camp",
    date: "March 2, 2025",
    location: "NIT college campus",
    category: "health",
    description: "Free health check-up camp organized in a rural area, providing essential medical services to underserved communities. The camp featured screenings for BP, sugar, and vision, along with awareness sessions on hygiene and nutrition. Volunteers and medical staff ensured smooth coordination and distributed medicines and pamphlets",
    images: [
      {
        id: 1,
        src: "/Gallery_Images/Health_Awareness_Camp/image1.jpg",
        alt: "Doctors conducting health check-ups",
        width: 1200,
        height: 800
      },
      {
        id: 2,
        src: "/Gallery_Images/Health_Awareness_Camp/image2.jpg",
        alt: "Eye check up of students and elderly",
        width: 800,
        height: 1200
      },
      {
        id: 3,
        src: "/Gallery_Images/Health_Awareness_Camp/image3.jpg",
        alt: "Medical staff collecting blood samples",
        width: 1200,
        height: 900
      },
      {
        id: 4,
        src: "/Gallery_Images/Health_Awareness_Camp/image4.jpg",
        alt: "Health awareness posters and banners displayed",
        width: 900,
        height: 1200
      },
      {
        id: 5,
        src: "/Gallery_Images/Health_Awareness_Camp/image5.jpg",
        alt: "Volunteers guiding villagers at the venue",
        width: 1600,
        height: 900
      },
      {
        id: 6,
        src: "/Gallery_Images/Health_Awareness_Camp/image6.jpg",
        alt: "Group photo with doctors and volunteers",
        width: 1600,
        height: 900
      }
    ]
  },
  "cultural-program": {
    "id": 6,
    "eventId": "cultural-program",
    "title": "Cultural Program",
    "date": "December 12, 2024",
    "location": "NIT college",
    "category": "event",
    "description": "Cultural performance during the NSS Annual Day celebration, showcasing diverse traditions and artistic expressions. The program featured a range of performances, from traditional dances to modern music, celebrating the rich cultural heritage of the community. The event provided a platform for students to showcase their talents and foster a sense of unity and pride.",
    "images": [
      {
        "id": 1,
        "src": "/Gallery_Images/Cultural_Program/image1.jpg",
        "alt": "Students performing traditional dance and skit",
        "width": 1200,
        "height": 800
      },
      {
        "id": 2,
        "src": "/Gallery_Images/Cultural_Program/image2.jpg",
        "alt": "Group photo of all the students and performers",
        "width": 800,
        "height": 1200
      },
      {
        "id": 3,
        "src": "/Gallery_Images/Cultural_Program/image3.jpg",
        "alt": "Students outside from nit college were called to perform in the cultural program",
        "width": 1200,
        "height": 900
      },
      {
        "id": 4,
        "src": "/Gallery_Images/Cultural_Program/image4.jpg",
        "alt": "Students performing their regional traditional dance during the cultural program",
        "width": 900,
        "height": 1200
      },
      {
        "id": 5,
        "src": "/Gallery_Images/Cultural_Program/image5.jpg",
        "alt": "Group photo of all the performers and the volunteers",
        "width": 1200,
        "height": 800
      },
      {
        "id": 6,
        "src": "/Gallery_Images/Cultural_Program/image6.jpg",
        "alt": "Students showcasing vibrant attire and heritage through their dance",
        "width": 1600,
        "height": 900
      }
    ]
  },
  "yoga-session": {
    "id": 7,
    "eventId": "yoga-session",
    "title": "Yoga Session",
    "date": "January 21, 2025",
    "location": "NIT College Campus",
    "category": "health",
    "description": "Morning yoga session conducted for the community, promoting physical and mental well-being. The session encouraged students, faculty, and residents to adopt yoga in daily life. Participants practiced yoga poses and breathing exercises, promoting flexibility, strength, and stress relief.",
    "images": [
      {
        "id": 1,
        "src": "/Gallery_Images/Yoga_Session/image1.jpg",
        "alt": "Participants performing yoga poses in the morning",
        "width": 1200,
        "height": 800
      },
      {
        "id": 2,
        "src": "/Gallery_Images/Yoga_Session/image2.jpg",
        "alt": "Instructor guiding the group through a yoga session",
        "width": 800,
        "height": 1200
      },
      {
        "id": 3,
        "src": "/Gallery_Images/Yoga_Session/image3.jpg",
        "alt": "Group practicing yoga under the indtructor supervision",
        "width": 1200,
        "height": 900
      },
      {
        "id": 4,
        "src": "/Gallery_Images/Yoga_Session/image4.jpg",
        "alt": "The participants deeply engaged in yoga practice",
        "width": 900,
        "height": 1200
      },
      {
        "id": 5,
        "src": "/Gallery_Images/Yoga_Session/image5.jpg",
        "alt": "Close-up of a participant practicing yoga poses",
        "width": 1600,
        "height": 900
      },
    ]
  },
  "awareness-rally": {
    "id": 8,
    "eventId": "awareness-rally",
    "title": "Awareness Rally",
    "date": "November 30, 2024",
    "location": "NIT Campus",
    "category": "event",
    "description": "Rally organized to spread awareness about social issues, mobilizing community support for causes such as gender equality, education, and environmental conservation. Students and faculty participated enthusiastically, holding informative placards and chanting slogans to engage the public. The rally aimed to inspire civic responsibility and create a positive impact through collective action and advocacy.",
    "images": [
      {
        "id": 1,
        "src": "/Gallery_Images/Awareness_Rally/image1.jpg",
        "alt": "Volunteers and students marching with awareness placards",
        "width": 1200,
        "height": 800
      },
      {
        "id": 2,
        "src": "/Gallery_Images/Awareness_Rally/image2.jpg",
        "alt": "Participants chanting slogans during the rally",
        "width": 800,
        "height": 1200
      },
      {
        "id": 3,
        "src": "/Gallery_Images/Awareness_Rally/image3.jpg",
        "alt": "Students holding a large banner about social change",
        "width": 1200,
        "height": 900
      },
      {
        "id": 4,
        "src": "/Gallery_Images/Awareness_Rally/image4.jpg",
        "alt": "Faculty members joining the rally",
        "width": 900,
        "height": 1200
      },
      {
        "id": 5,
        "src": "/Gallery_Images/Awareness_Rally/image5.jpg",
        "alt": "Students creating awareness through posters",
        "width": 1600,
        "height": 900
      },
      {
        "id": 6,
        "src": "/Gallery_Images/Awareness_Rally/image6.jpg",
        "alt": "Participants holding signs supporting education and equality",
        "width": 1200,
        "height": 900
      },
      {
        "id": 7,
        "src": "/Gallery_Images/Awareness_Rally/image7.jpg",
        "alt": "Rally making its way through campus pathways",
        "width": 1200,
        "height": 900
      },
      {
        "id": 8,
        "src": "/Gallery_Images/Awareness_Rally/image8.jpg",
        "alt": "Group marching vigoroulsly to create awareness and change",
        "width": 1600,
        "height": 900
      }
    ]
  },
  "village-outreach": {
    "id": 9,
    "eventId": "village-outreach",
    "title": "Village Outreach",
    "date": "February 28, 2025",
    "location": "Nearby Village",
    "category": "education",
    "description": "Volunteers teaching children in a nearby village, bridging educational gaps and fostering community engagement.The outreach program focused on basic literacy, creative learning, and interactive sessions to make education enjoyable. Volunteers also conducted fun activities and provided essential resources like clothes to the villagers.",
    "images": [
      {
        "id": 1,
        "src": "/Gallery_Images/Village_Outreach/image1.jpg",
        "alt": "Volunteers distributing clothes and interacting with villagers",
        "width": 1200,
        "height": 800
      },
      {
        "id": 2,
        "src": "/Gallery_Images/Village_Outreach/image2.jpg",
        "alt": "Team handing out supplies to villagers",
        "width": 800,
        "height": 1200
      },
      {
        "id": 3,
        "src": "/Gallery_Images/Village_Outreach/image3.jpg",
        "alt": "Volunteer distributing snacks to children from a school bus",
        "width": 1200,
        "height": 900
      },
      {
        "id": 4,
        "src": "/Gallery_Images/Village_Outreach/image4.jpg",
        "alt": "Volunteer giving books to kids during outreach",
        "width": 900,
        "height": 1200
      },
      {
        "id": 5,
        "src": "/Gallery_Images/Village_Outreach/image5.jpg",
        "alt": "Group photo of volunteers standing with outreach supplies",
        "width": 1600,
        "height": 900
      },
      {
        "id": 6,
        "src": "/Gallery_Images/Village_Outreach/image6.jpg",
        "alt": "Volunteers distributing clothing items from the bus",
        "width": 1200,
        "height": 900
      },
      {
        "id": 7,
        "src": "/Gallery_Images/Village_Outreach/image7.jpg",
        "alt": "Volunteers engaging with children during resource distribution",
        "width": 1600,
        "height": 900
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
      image: "/core-team/gourab-bistu.webp",
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