import { routes } from "./routes"

export const events = [
  {
    when: "live",
    time: "08:00 AM",
    title: "Holy Hour of Intercession",
    description: "Participate in silent adoration and corporate prayer for healing requests.",
    startDate: "2026-07-29T08:00:00Z",
    endDate: "2026-07-29T09:00:00Z",
  },
  {
    when: "upcoming",
    time: "12:00 PM",
    title: "Rosary Prayer",
    description: "We pray the Sorrowful Mysteries of the Holy Rosary for the conversion of sinners and the salvation of souls.",
    startDate: "2026-07-30T12:00:00Z",
    endDate: "2026-07-30T13:00:00Z",
  },
  {
    when: "upcoming",
    time: "09:00 PM",
    title: "Station Of The Cross",
    description: "Praying the Stations of the Cross with deep reverence, reflecting on Christ's passion and mercy.",
    startDate: "2026-07-30T21:00:00Z",
    endDate: "2026-07-30T22:00:00Z",
  },
]


export const ministries = [
  {
    name: "Intercessory Ministry",
    description: "Intercessory Ministry JOSEPHINE BALIMA COORDINATOR Our Intercessory Ministry dedicates their time to pray for the organization and for the needy in the society. We meet every Tuesday @ 7:00PM ET to pray for people’s requests.",
    img: "/ministries/intercessory.jpg",
    desc: 'Standing in prayer for all',
    route: routes.ministryDetails("intercessory")
  },
  {
    name: "Youth Ministry",
    description: "Youth Ministry JANE NWAOGU COORDINATOR Our youth is the future of our organization. That is why we engage them in various activities that will help the society. Tel: +1 301-802-5687.",
    img: "/ministries/youth.jpg",
    desc: 'Forming young hearts in faith',
    route: routes.ministryDetails("youth")
  },
  {
    name: "Singing Ministry",
    description: "Singing Ministry JUDE .E. AKAGHA COORDINATOR To sing is to pray twice and our team sings out of the Lord with all our hearts for his goodness. The contact Tel: +1 443-248-1064 Volunteer: singingministry@hjamm.org",
    img: "/ministries/singing.jpg",
    desc: 'Sacred harmony & liturgical worship',
    route: routes.ministryDetails("singing")
  },
  {
    name: "Mission & Charity Ministry",
    description: "Singing Ministry JUDE .E. AKAGHA COORDINATOR To sing is to pray twice and our team sings out of the Lord with all our hearts for his goodness. The contact Tel: +1 443-248-1064 Volunteer: singingministry@hjamm.org",
    img: "/ministries/mission.jpg",
    desc: 'Global apostolic service',
    route: routes.ministryDetails("mission-charity")
  },
  {
    name: "Testimony Ministry",
    description: "We have had a lot of people come forward to profess the mercy and goodness of God in their lives. +1 410-935 - 2572.Send request for testimony on the prayer line to Testimony@hjamm.org",
    img: "/ministries/testimony.jpg",
    desc: 'Witnessing Gods grace & mercy',
    route: routes.ministryDetails("testimony")
  },
  {
    name: "Technology Ministry",
    description: "Technology Ministry manages the technical aspect and promotion through various media.Contact: Web- Admin, Video - Uploader Lead 1-438-504-2617",
    img: "/ministries/technology.jpg",
    desc: 'Digital stewardship & livestreams',
    route: routes.ministryDetails("technology")
  },
  {
    name: "Gethsemane Hour Ministry",
    description: "Gethsemane Hour Ministry is a ministry of HJMM that meets every Thursday night at 11:30pm to 3:30am. Contact: Leader Tel: – 1-718 - 304 - 3762",
    img: "/ministries/gethsemane.jpg",
    desc: 'Vigil of prayer and reparation',
    route: routes.ministryDetails("gesthsemane")
  },
  {
    name: "Rosary Ministry",
    description: "Gethsemane Hour Ministry is a ministry of HJMM that meets every Thursday night at 11:30pm to 3:30am. Contact: Leader Tel: – 1-718 - 304 - 3762",
    img: "/ministries/rosary.jpg",
    desc: 'Sacred Rosary prayer',
    route: routes.ministryDetails("rosary")
  },
]

export const announcements = [
  {
    type: "Upcoming Retreat",
    name: "2026 National Retreat",
    description: "A dedicated time for silence, reflection, and deepening your personal prayer life with the…",
    img: "/announcements/1.jpg",
    route: routes.eventsDetails("2026-national-retreat")
  },
  {
    type: "workshop news",
    name: "Out of Bondage: Into Alignment",
    description: "Out of Bondage: Into Alignment is one of our discipleship series we host every Saturday at...",
    img: "/announcements/2.jpg",
    route: routes.eventsDetails("out-of-bondage-into-alignment")
  },
  {
    type: "workshop news",
    name: "Christian Complacency & Spiritual Growth",
    description: "A dedicated time for silence, reflection, and deepening your personal prayer life with the…",
    img: "/announcements/3.jpg",
    route: routes.eventsDetails("christian-complacency-and-spiritual-growth")
  },
]

export const books = [
  {
    title: "The Warrior’s Weapon",
    author: "DR. UWAKWE C. CHUKWU",
    price: "$8.59",
    img: "/books/1.jpg",
    link: 'https://www.amazon.com/dp/B08795NW11?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_EPCAXBXKK199K29FNAMC&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_EPCAXBXKK199K29FNAMC&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_EPCAXBXKK199K29FNAMC&bestFormat=true&rsd=irMGDZo%2FbeJqTO%2F5Gsh2ayrMRc6XPfxj%2F6SWsYx9Bc41M%2BpPRpdqXNYJ4dl7R6QNTAy55K8nXuZQgAuLKvF4lhJ2kLBUmpMvxBQCGlSMdLAh&edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQGlETHFFjS7sRIZDIP9XSeoAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMyJHmUptCS8Fh%2B863AgEQgDvEHm6F38GzVXuhPfryvIhp1KZsZc6MSHkIgWDV0S9D56klQe9%2FRDzTMNMNFtJpvjuMIPz3R9aEEYejIA%3D%3D',
    route: routes.bookDetails("the-warriors-weapon")
  },
  {
    title: "The Invisible War - Vol 1",
    author: "DR. UWAKWE C. CHUKWU",
    price: "$ 19.98",
    img: "/books/2.png",
    link: 'https://www.amazon.com/dp/1646063333?ref=cm_sw_r_ffobk_cso_cp_apin_dp_Q8DY85A13AKGABEBJ6AP&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_Q8DY85A13AKGABEBJ6AP&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_Q8DY85A13AKGABEBJ6AP&bestFormat=true&rsd=GQy9eEGCGJFW0J7uTgkxZzxPz0hHj2mMdgx2vTfNgD%2BoxiLlyg9jrnQLL%2BW0FHPEAfRhK%2Bfx2XxK9Zm4VN9tJL1mdIgUkWRucFsHUzYqS3ba&edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQGrhrLiftWyhvItuPACwz63AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiCV8qnDkk9A6MVxmAgEQgDuYXoLsPoGGKrF%2BcyRGo%2F1d60%2FooidkLyX1jB5QJxkAz%2F7aH2V42xISuaetoNORCkU6DShKyBEkuvZA0g%3D%3D',
    route: routes.bookDetails("the-invisible-war-vol-1")
  },
  {
    title: "The Invisible War - Vol 2",
    author: "DR. UWAKWE C. CHUKWU",
    price: "$ 19.98",
    img: "/books/3.jpg",
    link: 'https://www.amazon.com/dp/1646063341?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_QKAQX3SFNMV0HW9850ZS&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_QKAQX3SFNMV0HW9850ZS&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_QKAQX3SFNMV0HW9850ZS&bestFormat=true&rsd=4FRdZhE6CohtX8u%2Bfru8h7VwIWOEWwjAV8vFWE1sliymA5wgFGKzYO3NZJ0gJ9z%2F%2BL2KQgBGJoR4fALHk7cQww8N9R%2FWoPl1VWDIu8Z0%2FSWq&edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQGEiCrLTc6oyd37RlWr6qjUAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMHIbRWHE6kh0LJ71vAgEQgDsHvsRvpY8W%2FAuL4aOCBakx8eKP2uBFU4%2Br6tDwOfOz%2FNhRwuyK4YDl4krUKOLoxihGLwedEkKU%2B8FtGg%3D%3D',
    route: routes.bookDetails("the-invisible-war-vol-2")
  },
  {
    title: "War Against Python & Snake Spirit",
    author: "DR. UWAKWE C. CHUKWU",
    price: "$ 24.00",
    img: "/books/4.png",
    link: 'https://www.amazon.com/War-Against-PYTHON-Snake-Spirits-ebook/dp/B07F5WGRDM/ref=sr_1_1?crid=3CYYYB2D087DN&s=books&sprefix=war+against+python+%26+snake+spirit%2Cstripbooks-intl-ship%2C515&sr=1-1',
    route: routes.bookDetails("war-against-python-snake-spirit")
  },
]

export const allEvents = [
  {
    online: true,
    type: 'workshop',
    location: 'Youtube & facebook live',
    name: "Sacred Music & Chant Workshop",
    description: "A deep dive into the Gregorian traditions and polyphony that elevate the soul toward the…",
    date: "April 12, 2024",
    img: "/missionBg.png",
    route: routes.eventsDetails("sacred-music-and-chant-workshop")
  },
  {
    online: false,
    type: 'convention',
    location: 'NATIONAL SHRINE AUDITORIUM',
    name: "Hearts Ablaze National Convention",
    description: "A weekend gathering of regional prayer centers for powerful testimony, teaching, and corporate",
    date: "May 24 – 26, 2024",
    img: "/missionBg.png",
    route: routes.eventsDetails("hearts-ablaze-national-convention")
  },
  {
    online: false,
    type: 'retreat',
    location: 'SILENT VALLEY RETREAT CENTER',
    name: "The Way of the Immaculate Heart",
    description: "A weekend dedicated to Marian consecration and understanding the profound role of Mary in",
    date: "June 07 – 09, 2024",
    img: "/missionBg.png",
    route: routes.eventsDetails("the-way-of-the-immaculate-heart")
  },
  {
    online: false,
    type: 'youth',
    location: 'DIGITAL CAMPUS HUB',
    name: "Generatio Nova Summer Ignite",
    description: " Empowering the next generation to be bold witnesses for Christ through fellowship and…",
    date: "July 15 – 20, 2024",
    img: "/missionBg.png",
    route: routes.eventsDetails("generatio-nova-summer-ignite")
  },

]


export const retreatSchedule = [
  {
    time: "06:00 AM",
    namee: "Morning Prayer & Eucharist",
    description: "Opening the day with the sacrifice of the Mass and the Liturgy of the Hours.",
    duration: "45 minutes",
  },
  {
    time: "07:00 AM",
    namee: "Breakfast",
    description: "Shared meal in contemplative silence.",
    duration: "45 minutes",
  },
  {
    time: "09:00 AM",
    namee: "Opening Session: The Wounded Heart",
    description: "First conference by Rev Fr. Ethelbert ude on identifying the spiritual wounds we carry into the desert.",
    duration: "2 hour",
  },
  {
    time: "12:00 PM",
    namee: "Lunch & Rest",
    description: "Main meal followed by mandatory periods of personal rest.",
    duration: "1.5 hour",
  },
  {
    time: "02:00 PM",
    namee: "Guided Meditation: Sorrowful Mysteries",
    description: "Contemplative walk through the woods while meditating on the mysteries of the Rosary.",
    duration: "1.5 hour",
  },
  {
    time: "06:00 PM",
    namee: "Dinner",
    description: "",
    duration: "1 hour",
  },
  {
    time: "08:00 PM",
    namee: "Evening Reflection & Silent Prayer",
    description: "Examination of conscience and adoration before the Blessed Sacrament.",
    duration: "1 hour",
  },
]

export const gallery = [
  {
    day: "2015 Day 3",
    title: 'Sunday Mass Celebration',
    images: [],
    coverImg: '/gallery/cover1.jpg'
  },
  {
    day: "2015 Day 3",
    title: 'Conclusion',
    images: [],
    coverImg: '/gallery/cover2.jpg'
  },
  {
    day: "2015 Day 2",
    title: 'Ministration & Worship',
    images: [],
    coverImg: '/gallery/cover3.jpg'
  },
]

export const ministers = [
  {
    name: "Bro. Uwakwe Chukwu",
    role: "Vision Bearer",
    img: "/ministers/1.jpg",
  },
  {
    name: "Sis. Chinyere Uwakwe",
    role: "co vision bearer",
    img: "/ministers/2.png",
  },
  {
    name: "Rev Fr. Cletus Imo",
    role: "spiritual director",
    img: "/ministers/3.png",
  },
  {
    name: "Bro. Dr Cally Nwanyanwu",
    role: "BOD CHAIRMAN",
    img: "/ministers/4.png",
  },
  {
    name: "Sis. Assumpta Lange",
    role: "program director",
    img: "/ministers/5.png",
  },
  {
    name: "Bro. Valentine Mbinglo",
    role: "NATIONAL RETREAT CHAIRMAN",
    img: "/ministers/6.png",
  },
  {
    name: "Bro. Kingsley",
    role: "hjm think tank lead",
    img: "/ministers/7.png",
  },
  {
    name: "Sis. Chinwe Ejikeme",
    role: "finance director",
    img: "/ministers/8.png",
  },
  {
    name: "Sis. Kelechi Amaechi",
    role: "SINGING MINISTRY LEADER",
    img: "/ministers/9.png",
  },
  {
    name: "Sis. Josephine Balima",
    role: "intercessory lead",
    img: "/ministers/10.png",
  },
  {
    name: "Bro. Emmanuel",
    role: "technology lead",
    img: "/ministers/11.png",
  },

]