
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
    link:"blood-donation-camp",
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
    link:"tree-plantation-drive",
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
    link:"health-awareness-camp",
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
    link:"cleanliness-drive",
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
    link:"educational-workshop",
  },
  {
    id: 6,
    title: "Health Awareness Campaign",
    date: "2024-10-05",
    category: "past",
    image: "/Gallery_Images/Health_Awareness_Camp/image1.jpg",
    description:
      "A campaign to spread awareness about COVID-19 prevention measures and distribute masks and sanitizers.",
    location: "Various locations in Jamshedpur",
    time: "All Day",
    link:"health-awareness-camp",
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
      name: 'Dr Jayendra Kumar',
      position: 'Professor Incharge',
      image: '/core-team/dr-jayendra-kumar.webp',
      department: 'Electronics and Communication Engineering',
      email: 'rajesh.kumar@nitjsr.ac.in',
      description: 'Dr. Rajesh Kumar has been leading the NSS unit at NIT Jamshedpur for the past 5 years. Under his guidance, the unit has achieved numerous milestones and recognition.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Shifan Akram ',
      position: 'President ',
      image: '/core-team/shifan-akram.webp',
      department: 'B.Tech, Civil engineering ',
      email: 'shifanakram35@gmail.com',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shifan-akram-343326264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Shyamali Rupam',
      position: 'Vice President',
      image: '/core-team/Shyamli Rupam.webp',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'rupamshy2307@gmail.com',
      description: 'Shyamali is responsible for overall coordination of NSS activities and leads the team of volunteers. She has been an active NSS volunteer since her first year.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 9,
      name: 'Gourab Bistu',
      position: 'Web Head',
      image: "/core-team/gourab-bistu.webp",
      department: 'Master of Computer Applications',
      email: 'gourabbistu@gmail.com',
      description: 'Gourab leads the web development team, ensuring digital presence and technical resources for NSS initiatives.',
      social: {
        linkedin: 'https://www.linkedin.com/in/gourabbistu/',
        twitter: '#',
        instagram: '#'
      }
    },
     {
      id: 5,
      name: 'Neeraj Bhatt',
      position: 'EM Head',
      image: '/core-team/Neeraj.webp',
      department: 'B.Tech, Master of Computer Applications',
      email: 'neeraj.bhatt099@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/neerajbhatt099/',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'Doddy Mourya',
      position: 'EM Head',
      image: '/core-team/Mourya.webp',
      department: 'B.Tech, \Metallurgical and materials engineering ',
      email: 'mourya.doddi45@gmail.com',
      description: 'Doddy co-leads the Event Management division and specializes in coordinating large-scale community service projects.',
      social: {
        linkedin: 'https://www.linkedin.com/in/doddi-mourya-6b708727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 7,
      name: 'Pratyush Kumar',
      position: 'Creative Head',
      image: '/core-team/pratyush kumar.webp',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'pratyush.dms30@gmail.com',
      description: 'Pratyush oversees all creative aspects of NSS campaigns and events, bringing innovation to social service initiatives.',
      social: {
        linkedin: 'https://www.linkedin.com/in/pratyush-kumar-gupta-05a492259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 8,
      name: 'Utkarsh Shukla',
      position: 'Content Head',
      image: '/core-team/Utkarsh Shukla.webp',
      department: 'B.Tech, Production & Industrial Engineering ',
      email: 'shuklautkarsh1027@gmail.com',
      description: 'Utkarsh manages content creation and messaging strategy for all NSS communications and outreach materials.',
      social: {
        linkedin: 'https://www.linkedin.com/in/utkarsh-shukla-bb1a01257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 10,
      name: 'Rupam Kumari',
      position: 'PR Head',
      image: '/core-team/IMG-20250327-WA0004.webp',
      department: 'B.Tech, production and industrial engineering',
      email: 'rumdaza@gmail.com',
      description: 'Rupam manages public relations and external communications for NSS, building partnerships with community stakeholders.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rupam-kumari-64775b271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 11,
      name: 'Kajal Shaw',
      position: 'PR Head',
      image: '/core-team/Kajal Shaw.webp',
      department: 'B.Tech, Civil Engineering ',
      email: '2022ugce067@gmail.com',
      description: 'Kajal co-leads the public relations team, focusing on media engagement and institutional partnerships.',
      social: {
        linkedin: 'https://www.linkedin.com/in/kajal-shaw-94778a271',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 12,
      name: 'Rinki Kumari',
      position: 'Media Head',
      image: '/core-team/Rinki Kumari .webp',
      department: 'B.Tech,Civil engineering ',
      email: 'rinkyie321@gmail.com',
      description: 'Rinki manages all media content and documentation of NSS activities, creating compelling visual narratives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 13,
      name: 'Sushant Kachhap',
      position: 'Media Head',
      image: '/core-team/Sushant Kachhap .webp',
      department: 'B.Tech, Computer Science and Engineering',
      email: 'sushantkachhap68@gmail.com',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sushant-kachhap-4153b1266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 14,
      name: 'Basundhara Singhdeo ',
      position: 'Strategic and Planning Head',
      image: '/core-team/bhasundra.webp',
      department: 'B.Tech, Electronics and Communication Engineering',
      email: 'singhdeobasundhara@gmail.comn',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: 'https://www.linkedin.com/in/basundhara-singhdeo-b5a74925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 15,
      name: 'Bhavesh Gupta',
      position: 'PG Representative',
      image: '/core-team/bhavesh gupta.webp',
      department: 'B.Tech, Master of Computer Applications',
      email: 'bhaveshguptanit@gmail.com',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: 'https://www.linkedin.com/in/bhavesh-gupta-894141337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 16,
      name: 'Santosh Kumar Sahani',
      position: 'PG Representative',
      image: '/core-team/Santosh Kumar Sahani.webp',
      department: 'B.Tech, Master of Computer Applications',
      email: 'sks.vssems@gmail.com',
      description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
      social: {
        linkedin: 'https://www.linkedin.com/in/santosh-kumar-sahani-13702828a/',
        twitter: '#',
        instagram: '#'
      }
    },
    
  ],
  core: [
    {
      id: 17,
      name: 'Saransh',
      position: 'General Secretary',
      image: '/core-team/Saransh.webp',
      department: 'B.Tech,Production & Industrial Engineering',
      email: 'saransh7505@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'http://www.linkedin.com/in/saransh754',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 18,
      name: 'NIRMAL NIRANJAN PATIL',
      position: 'General Secretary',
      image: '/core-team/Nirmal (1)_page-0001.jpg',
      department: 'B.Tech,Mechanical Engineering',
      email: 'nirnalpatil9@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/nirmal-niranjan-patil-ab274a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 19,
      name: 'Sumant Nanda ',
      position: 'Joint Secretary ',
      image: '/core-team/Sumant Nanda .webp',
      department: 'B.Tech,Electrical Engineering ',
      email: 'sumantnandadi09@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sumant-nanda-a2578a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 20,
      name: 'Ekangsh Sah',
      position: 'Joint Secretary',
      image: '/core-team/Ekangsh Sah(1).webp',
      department: 'B.Tech,Production & Industrial Engineering',
      email: 'sekangsh@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'http://www.linkedin.com/in/ekangsh-sah-14a84428a',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 21,
      name: 'Ayush Das',
      position: 'Joint Secretary',
      image: '/core-team/Ayush 1.webp',
      department: 'B.Tech,Master of Computer Applications',
      email: 'ayushdas7354@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'http://www.linkedin.com/in/ayushdas84',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 20,
      name: 'Ritika Rani',
      position: 'Joint Secretary',
      image: '/core-team/Ritika Rani.webp',
      department: 'B.Tech,Mechanical Engineering',
      email: 'ritika130482@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/ritika-rani-7302a5298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 22,
      name: 'Kriti Srivastava ',
      position: 'Joint Secretary',
      image: '/core-team/Kriti.webp',
      department: 'B.Tech,Civil Engineering ',
      email: 'srikritivastava11@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/kriti-srivastava-0707a128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 23,
      name: 'Saksham Shubh',
      position: 'Joint Secretary',
      image: '/core-team/Saksham Shubh.webp',
      department: 'B.Tech,Production & Industrial Engineering ',
      email: 'sakshamshubh04@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 23,
      name: 'MRINAL AYUSH RAJ',
      position: 'Joint Secretary',
      image: '/core-team/MRINAL AYUSH RAJ.webp',
      department: 'B.Tech,MECHANICAL ENGINEERING',
      email: 'mrinalayush1437@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/mrinal-ayush-raj-65300527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 24,
      name: 'Pranay Parasana ',
      position: 'Joint Secretary',
      image: '/core-team/Pranay prasana.webp',
      department: 'B.Tech,Metallurgical and Materials Engineering ',
      email: 'pranay.raja.25@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/pranay-parasana-744867258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 25,
      name: 'Aman kumar ',
      position: 'Joint Secretary',
      image: '/core-team/Aman kumar .webp',
      department: 'B.Tech,Master of Computer Applications ',
      email: 'rajamanofficial1@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/aman-kumar-a2b425324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 26,
      name: 'AMAN KUMAR JHA ',
      position: 'Joint Secretary',
      image: '/core-team/Aman Jha.webp',
      department: 'B.Tech,Civil Engineering  ',
      email: 'aman.ac.5673@gmail.com',
      description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'http://www.linkedin.com/in/aman-kumar-jha-13211027b',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 27,
      name: 'RAVI RANJAN',
      position: 'Joint Secretary',
      image: '/core-team/Ravi.webp',
      department: 'B.Tech,Engineering and Computational mechanics  ',
      email: 'itsme9508674540@gmail.com',
      description: 'Ravi leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
      social: {
        linkedin: 'https://www.linkedin.com/in/ravi-ranjan-3063862a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '#',
        instagram: '#'
      }
    },
  ],
  volunteers: [
    {
      id: 28,
      name: 'MAYANK SAHOO',
      position: 'Volunteer',
      image: '/core-team/4.jpg',
      department: 'B.Tech, Production Engineering',
      email: '',
      description: 'Mayank is an enthusiastic volunteer who actively participates in all NSS activities. He is particularly interested in environmental conservation projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 29,
      name: 'KRISHNA KUMAR CHOUDHARY',
      position: 'Volunteer',
      image: '/core-team/6.jpg',
      department: 'B.Tech, Computer Science',
      email: '',
      description: 'Krishna is passionate about teaching and regularly conducts educational workshops for underprivileged children as part of NSS activities.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 30,
      name: 'ISHIKA GUPTA',
      position: 'Volunteer',
      image: '/core-team/5.jpg',
      department: 'B.Tech, Mechanical Engineering',
      email: '',
      description: 'Ishika is skilled in organizing health camps and awareness programs. He has been instrumental in the success of several health-related initiatives.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
   
  ],
};

export const projectData = {
  all: {
    volunteers: 3842,
    events: 197,
    hours: 28564,
    projects: [
      { id: 1, title: "Blood Donation Camp", location: "Lecture Hall Complex, NIT Jamshedpur", category: "Health", people: 250, impact: "promoted awareness on blood donation", lat: 22.77, lng: 86.17 },
      { id: 2, title: "Session on Farm Animals and Us", location: "NIT Jamshedpur Campus", category: "Environment", people: 100, impact: "Raised awareness on animal exploitation and promoted ethical consumption", lat: 22.78, lng: 86.18 },
      { id: 3, title: "Blood Donation Camp organized by Shri Shanidev Bhakt Mandali Trust", location: "Near Aaieda Campus, Adityapur, Jamshedpur", category: "Health", people: 300, impact: "Targeted 1500 blood units with strong NSS volunteer support", lat: 22.79, lng: 86.19 },
      { id: 4, title: "Sandhya Pheri - Voter Awareness Rally", location: "NIT Jamshedpur Campus", category: "Education", people: 250, impact: "Promoted youth awareness and responsibility towards voting rights", lat: 22.80, lng: 86.20 },
      { id: 5, title: "Panel Discussion on No-Tobacco Day", location: "Online", category: "Health", people: 100, impact: "Raised awareness on tobacco risks and prevention strategies", lat: 22.81, lng: 86.21 },
      { id: 6, title: "Cleanliness Drive - Swachhta Pakhwada", location: "NIT Jamshedpur", category: "Environment", people: 100, impact: "Promoted cleanliness and waste segregation", lat: 22.82, lng: 86.22 },
      { id: 7, title: "Cloth Donation", location: "NIT Jamshedpur", category: "Social", people: 200, impact: "Collected and distributed over 1000 clothes to support those in need", lat: 22.78, lng: 86.20 },
      { id: 8, title: "Tiranga Yatra", location: "NIT Jamshedpur", category: "Social", people: 150, impact: "Promoted national pride and unity", lat: 22.79, lng: 86.21 },
      { id: 9, title: "Debate Competition", location: "Seminar Hall, NIT Jamshedpur", category: "Education", people: 120, impact: "Encouraged critical thinking and social responsibility", lat: 22.80, lng: 86.18 },
      { id: 10, title: "World Bicycle Day Rally", location: "NIT Jamshedpur Campus", category: "Health", people: 250, impact: "Promoted cycling for health and raised awareness", lat: 22.81, lng: 86.19 },
      { id: 11, title: "Oath Taking Ceremony on World Environment Day", location: "NIT Jamshedpur Campus", category: "Environment", people: 200, impact: "Promoted environmental conservation and sustainability", lat: 22.82, lng: 86.20 },
      { id: 12, title: "World Science Day Seminar", location: "NIT Jamshedpur", category: "Education", people: 150, impact: "Promoted scientific knowledge and its importance in society", lat: 22.77, lng: 86.18 },
      { id: 13, title: "International Yoga Day", location: "Online", category: "Health", people: 120, impact: "Promoted mindfulness and yoga practices for mental and physical well-being", lat: 22.78, lng: 86.19 },
      { id: 14, title: "Doctors' Day Celebration", location: "NIT Jamshedpur Campus", category: "Health", people: 100, impact: "Honored medical professionals and raised awareness about healthcare", lat: 22.79, lng: 86.20 },
      { id: 15, title: "Plantation Drive", location: "NIT Jamshedpur Campus", category: "Environment", people: 200, impact: "Promoted environmental sustainability through tree planting", lat: 22.80, lng: 86.21 },
      { id: 16, title: "Social Awareness by School Visit", location: "Local Schools, Adityapur", category: "Social", people: 80, impact: "Raised awareness on social issues among school children", lat: 22.81, lng: 86.22 },
      { id: 17, title: "Udgam", location: "NIT Jamshedpur Campus", category: "Education", people: 70, impact: "Engaged school students in campus activities and inspired them towards academic and extracurricular excellence", lat: 22.77, lng: 86.19 },
      { id: 18, title: "Raksha Bandhan with Security Guard and Rakhi for Army", location: "NIT Jamshedpur", category: "Social", people: 50, impact: "Fostered bonds of respect and gratitude between students and security guards", lat: 22.78, lng: 86.21 },
      { id: 19, title: "Fit India Freedom Run", location: "NIT Jamshedpur", category: "Health", people: 150, impact: "Encouraged physical fitness and national pride through an inclusive run", lat: 22.79, lng: 86.22 },
      { id: 20, title: "Amrit Kalash Yatra", location: "NIT Jamshedpur", category: "Social", people: 200, impact: "Celebrated India's heritage and promoted community participation in national celebrations", lat: 22.80, lng: 86.17 },
      { id: 21, title: "Swachhata hi Sewa Cleanliness Drive", location: "NIT Jamshedpur", category: "Environment", people: 120, impact: "Encouraged cleanliness and environmental responsibility", lat: 22.81, lng: 86.18 },
      { id: 22, title: "Mental Health Awareness", location: "Bistupur", category: "Health", people: 203, impact: "25 workshops conducted", lat: 22.82, lng: 86.22 }
    ]
  },
  "2024": {
    volunteers: 1842,
    events: 97,
    hours: 14564,
    projects: [
      { id: 1, title: "Blood Donation Camp", location: "Lecture Hall Complex, NIT Jamshedpur", category: "Health", people: 250, impact: "promoted awareness on blood donation", lat: 22.77, lng: 86.17 },
      { id: 2, title: "Session on Farm Animals and Us", location: "NIT Jamshedpur Campus", category: "Environment", people: 100, impact: "Raised awareness on animal exploitation and promoted ethical consumption", lat: 22.78, lng: 86.18 },
      { id: 3, title: "Blood Donation Camp organized by Shri Shanidev Bhakt Mandali Trust", location: "Near Aaieda Campus, Adityapur, Jamshedpur", category: "Health", people: 300, impact: "Targeted 1500 blood units with strong NSS volunteer support", lat: 22.79, lng: 86.19 },
      { id: 4, title: "Sandhya Pheri - Voter Awareness Rally", location: "NIT Jamshedpur Campus", category: "Social", people: 250, impact: "Promoted youth awareness and responsibility towards voting rights", lat: 22.80, lng: 86.20 },
      { id: 5, title: "Panel Discussion on No-Tobacco Day", location: "Online", category: "Health", people: 100, impact: "Raised awareness on tobacco risks and prevention strategies", lat: 22.81, lng: 86.21 },
      { id: 6, title: "Cleanliness Drive - Swachhta Pakhwada", location: "NIT Jamshedpur", category: "Environment", people: 100, impact: "Promoted cleanliness and waste segregation", lat: 22.82, lng: 86.22 },
      { id: 7, title: "Cloth Donation", location: "NIT Jamshedpur", category: "Social", people: 200, impact: "Collected and distributed over 1000 clothes to support those in need", lat: 22.78, lng: 86.20 },
      { id: 8, title: "Tiranga Yatra", location: "NIT Jamshedpur", category: "Social", people: 150, impact: "Promoted national pride and unity", lat: 22.79, lng: 86.21 }
    ]
  },
  "2023": {
    volunteers: 2000,
    events: 100,
    hours: 14000,
    projects: [
      { id: 9, title: "Debate Competition", location: "Seminar Hall, NIT Jamshedpur", category: "Education", people: 120, impact: "Encouraged critical thinking and social responsibility", lat: 22.80, lng: 86.18 },
      { id: 10, title: "World Bicycle Day Rally", location: "NIT Jamshedpur Campus", category: "Health", people: 250, impact: "Promoted cycling for health and raised awareness", lat: 22.81, lng: 86.19 },
      { id: 11, title: "Oath Taking Ceremony on World Environment Day", location: "NIT Jamshedpur Campus", category: "Environment", people: 200, impact: "Promoted environmental conservation and sustainability", lat: 22.82, lng: 86.20 },
      { id: 12, title: "World Science Day Seminar", location: "NIT Jamshedpur", category: "Education", people: 150, impact: "Promoted scientific knowledge and its importance in society", lat: 22.77, lng: 86.18 },
      { id: 13, title: "International Yoga Day", location: "Online", category: "Health", people: 120, impact: "Promoted mindfulness and yoga practices for mental and physical well-being", lat: 22.78, lng: 86.19 },
      { id: 14, title: "Doctors' Day Celebration", location: "NIT Jamshedpur Campus", category: "Health", people: 100, impact: "Honored medical professionals and raised awareness about healthcare", lat: 22.79, lng: 86.20 },
      { id: 15, title: "Plantation Drive", location: "NIT Jamshedpur Campus", category: "Environment", people: 200, impact: "Promoted environmental sustainability through tree planting", lat: 22.80, lng: 86.21 },
      { id: 16, title: "Social Awareness by School Visit", location: "Local Schools, Adityapur", category: "Social", people: 80, impact: "Raised awareness on social issues among school children", lat: 22.81, lng: 86.22 },
      { id: 17, title: "Udgam", location: "NIT Jamshedpur Campus", category: "Education", people: 70, impact: "Engaged school students in campus activities and inspired them towards academic and extracurricular excellence", lat: 22.77, lng: 86.19 },
      { id: 18, title: "Raksha Bandhan with Security Guard and Rakhi for Army", location: "NIT Jamshedpur", category: "Social", people: 50, impact: "Fostered bonds of respect and gratitude between students and security guards", lat: 22.78, lng: 86.21 },
      { id: 19, title: "Fit India Freedom Run", location: "NIT Jamshedpur", category: "Health", people: 150, impact: "Encouraged physical fitness and national pride through an inclusive run", lat: 22.79, lng: 86.22 },
      { id: 20, title: "Amrit Kalash Yatra", location: "NIT Jamshedpur", category: "Social", people: 200, impact: "Celebrated India's heritage and promoted community participation in national celebrations", lat: 22.80, lng: 86.17 },
      { id: 21, title: "Swachhata hi Sewa Cleanliness Drive", location: "NIT Jamshedpur", category: "Environment", people: 120, impact: "Encouraged cleanliness and environmental responsibility", lat: 22.81, lng: 86.18 }
   ]
  },
  "2022": {
    volunteers: 1700,
    events: 90,
    hours: 13000,
    projects: [
      { id: 22, title: "Mental Health Awareness", location: "Bistupur", category: "Health", people: 203, impact: "25 workshops conducted", lat: 22.82, lng: 86.22 }
    ]
  }
};