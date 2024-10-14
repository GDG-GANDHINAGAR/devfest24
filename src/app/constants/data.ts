import {Testimonial} from "../types/testimonials.type";
import {TicketType} from "../types/ticket.type";
import {SpeakerData} from "../types/speaker.type";

export const HEADER_TEXT = {
  caption: 'Welcome to the',
  boxes: [
    {title: 'Attendees', value: '600+'},
    {title: 'Sessions', value: '10+'},
    {title: 'Master Classes', value: '2'},
    {title: 'Experts', value: '30+'},
    {title: 'communities', value: '10+'},
    {title: 'Technologies', value: '15+'},
  ]
}
export const TESTIMONIALS: { [key: string]: Testimonial } = {
  jt: {
    name: 'Jay Thakkar,',
    text: 'Remarkable scope, exceptional focus on experience',
    image: 'image/jt.jpg',
    job: 'Machine Learning Associate, Binoloop Inc',
    subJob: 'TFUG SURAT',
    outSide: 'It’s especially rewarding when a fellow community member recognizes Devfest Gandhinagar’s attention to detail,\n impressive scale, and dedication to attendee experience!'
  }
}

export const TICKETS: TicketType[] = [
  {
    title: 'Student Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks'
    ],
    soldOut: true,
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=22774|1',
    price: {
      footnote: 'limited, until sold out',
      base: '₹600',
      action: '+GST'
    }
  },
  {
    title: 'Professional Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks'
    ],
    soldOut: true,
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=22774|1',
    price: {
      footnote: 'limited, until sold out',
      base: '₹600',
      action: '+GST'
    }
  },
  {
    title: 'Ticket + Mock Interview',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks',
      'Access to mock interview panel',
    ],
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=22773|1',
    soldOut: true,
    price: {
      footnote: 'limited, until sold out',
      base: '₹750',
      action: '+GST'
    }
  },
  {
    title: 'Workshop Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks',
      'Access to Flutter Workshop',
      'Access to AI/ML Workshop',
      'Workshop Certificate',
    ],
    soldOut: true,
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=23969|1',
    price: {
      footnote: 'limited, until sold out',
      base: '₹1500',
      action: '+GST'
    }
  },
  {
    title: 'Supporter Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks',
      'Access to mock interview panel',
    ],
    soldOut: false,
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=22774|1',
    price: {
      footnote: 'limited, until sold out',
      base: '₹1000',
      action: '+GST'
    }
  },
  {
    title: 'Networking Dinner Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conference',
      'Lunch, Tea/Coffee & Snacks',
      'Access to mock interview panel',
      'Networking Dinner with speakers & organizers',
    ],
    link: 'https://konfhub.com/checkout/devfest-gnr-24?ticketId=22775|1',
    soldOut: false,
    price: {
      footnote: 'limited, until sold out',
      base: '₹3000',
      action: '+GST'
    }
  }
];

export const PAST_SPEAKERS: SpeakerData[] = [
  {
    img: 'speakers/ashokv.jpg',
    name: 'Ahsok Vishwakarma',
    jobTitle: 'CTO',
    company: 'Impulsive Web',
    location: 'Noida',
    testimonials: "Incredible energy! A must-attend for developers in Gandhinagar.",
    socials: [
      {link: 'https://twitter.com/avishwakarmadev', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/avishwakarmadev/', icon: 'icons/lin.svg'},
    ]
  },
  {
    img: 'speakers/dj.jpg',
    name: 'Dhananjay Kumar',
    jobTitle: 'Founder',
    company: 'Nomadcoder',
    location: 'Gurgaon',
    testimonials: "Innovative talks and inspiring speakers! Loved the Devfest experience.",
    socials: [
      {link: 'https://twitter.com/debug_mode', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/dhananjaykumar07/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/ayush.jpg',
    name: 'Ayush Shekhar',
    jobTitle: 'Solutions Architect',
    company: 'FlutterFlow',
    location: 'New Delhi',
    testimonials: "Great networking and insightful sessions at Devfest Gandhinagar!",
    socials: [
      {link: 'https://twitter.com/ayushshekhar17', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/ayushshekhar/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/paresh.jpg',
    name: 'Paresh Mayani',
    jobTitle: 'Co-Founder',
    company: 'SolGuruz',
    location: 'Ahmedabad',
    testimonials: "Devfest Gandhinagar exceeded expectations—informative and fun!",
    socials: [
      {link: 'https://twitter.com/pareshmayani', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/pareshmayani/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/bhavik.jpg',
    name: 'Bhavik Makwana',
    jobTitle: 'CSE',
    company: 'FlutterFlow',
    location: 'Ahmedabad',
    testimonials: "Fantastic event! Learned so much from experts in tech.",
    socials: [
      {link: 'https://twitter.com/ibhavikmakwana', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/ibhavikmakwana/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/sayak.jpg',
    name: 'Sayak Paul',
    jobTitle: 'ML Engineer',
    company: 'Hugging Face',
    location: 'Kolkata',
    testimonials: "An inspiring day of learning and growth. Devfest Gandhinagar rocks!",
    socials: [
      {link: 'https://twitter.com/RisingSayak', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/sayak-paul/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/pankaj.jpg',
    name: 'Pankaj Parkar',
    jobTitle: 'Principal Application Developer',
    company: 'Aon',
    location: 'Singapore',
    testimonials: "Top-notch speakers and cutting-edge topics! Amazing Devfest!",
    socials: [
      {link: 'https://twitter.com/pankajparkar', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/pankajparkar/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/shubham.jpg',
    name: 'Shubham Pachori',
    jobTitle: 'Head of product',
    company: 'shipmnts',
    location: 'Ahmedabad',
    testimonials: "Devfest Gandhinagar: a perfect mix of learning and networking.",
    socials: [
      {link: 'https://twitter.com/spachori94', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/shubham-pachori-b5703a86/', icon: 'icons/lin.svg'},
    ]
  }, {
    img: 'speakers/dhrumil.jpg',
    name: 'Dhrumil Shah',
    jobTitle: 'Lead Architect',
    company: 'Tata Digital',
    location: 'Ahmedabad',
    testimonials: "Engaging and well-organized! Looking forward to the next one.",
    socials: [
      {link: 'https://twitter.com/dhuma1981', icon: 'icons/x.svg'},
      {link: 'https://www.linkedin.com/in/dhuma1981/', icon: 'icons/lin.svg'},
    ]
  },
]

export const PHOTOS = [
  'photos/1.JPG',
  'photos/2.JPG',
  'photos/3.JPG',
  'photos/4.JPG',
]

export const TECHS =
  [
    {
      name: "Accessibility",
      link: "https://www.google.com/accessibility/",
      logo: "https://io.google/2022/app/images/accessibility-logo.svg",
    },
    {
      name: "Android",
      link: "https://developer.android.com/",
      logo: "https://io.google/2022/app/images/android-logo.svg",
    },
    {
      name: "ARCore",
      link: "https://developers.google.com/ar",
      logo: "https://io.google/2022/app/images/arcore-logo.svg",
    },
    {
      name: "Chrome OS",
      link: "https://chromeos.dev/en",
      logo: "https://io.google/2022/app/images/chrome-logo.svg",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      logo: "https://io.google/2022/app/images/firebase-logo.svg",
    },
    {
      name: "Angular",
      link: "https://angular.io/",
      logo: "https://angular.io/assets/images/logos/angular/angular.svg",
    },
    {
      name: "Flutter",
      link: "https://flutter.dev/",
      logo: "https://io.google/2022/app/images/flutter-logo.svg",
    },
    {
      name: "Google Assistant & Smart Home",
      link: "https://developers.google.com/assistant",
      logo: "https://io.google/2022/app/images/googleassistant-logo.svg",
    },
    {
      name: "Google Cloud",
      link: "https://cloud.google.com/",
      logo: "https://io.google/2022/app/images/googlecloud-logo.svg",
    },
    {
      name: "Google Maps",
      link: "https://developers.google.com/maps",
      logo: "https://io.google/2022/app/images/googlemaps-logo.svg",
    },
    {
      name: "Google Pay & Google Wallet",
      link: "https://developers.google.com/wallet",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDYwQzAgMjYuODYyOSAyNi44NjI5IDAgNjAgMFYwQzkzLjEzNzEgMCAxMjAgMjYuODYyOSAxMjAgNjBWNjBDMTIwIDkzLjEzNzEgOTMuMTM3MSAxMjAgNjAgMTIwVjEyMEMyNi44NjI5IDEyMCAwIDkzLjEzNzEgMCA2MFY2MFoiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZD0iTTg4IDUzLjczMzNIMzJWNDQuODY2N0MzMiAzOS45NzEzIDM2LjA0NiAzNiA0MS4wMyAzNkg3OC45NjUzQzgzLjk1ODcgMzYgODggMzkuOTcxMyA4OCA0NC44NjY3VjUzLjczMzNaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGQ9Ik04OCA2MS4yMDAxSDMyVjUyLjMzMzVDMzIgNDcuNDM4MSAzNi4wNDYgNDMuNDY2OCA0MS4wMyA0My40NjY4SDc4Ljk2NTNDODMuOTU4NyA0My40NjY4IDg4IDQ3LjQzODEgODggNTIuMzMzNVY2MS4yMDAxWiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNODggNjguNjY2N0gzMlY1OS44QzMyIDU0LjkwNDcgMzYuMDQ2IDUwLjkzMzMgNDEuMDMgNTAuOTMzM0g3OC45NjUzQzgzLjk1ODcgNTAuOTMzMyA4OCA1NC45MDQ3IDg4IDU5LjhWNjguNjY2N1oiIGZpbGw9IiNFQTQzMzUiLz4KPHBhdGggZD0iTTMyIDU1Ljk2ODhMNjcuNTU1MyA2NC4yMDU0QzcxLjc2OTMgNjUuMTgwOCA3Ni4yMTIgNjQuMjc1NCA3OS42NjA3IDYxLjczNjhMODggNTUuNjAwMVY3NC44NTAxQzg4IDc5LjY4MDEgODMuOTU0IDgzLjYwMDEgNzguOTcgODMuNjAwMUg0MS4wMzQ3QzM2LjA0NiA4My42MDAxIDMyIDc5LjY4MDEgMzIgNzQuODUwMVY1NS45Njg4WiIgZmlsbD0iIzQyODVGNCIvPgo8L3N2Zz4K",
    },
    {
      name: "Google Play",
      link: "https://play.google.com/console/about/",
      logo: "https://io.google/2022/app/images/googleplay-logo.svg",
    },
    {
      name: "Material Design",
      link: "https://material.io/design",
      logo: "https://io.google/2022/app/images/materialdesign-logo.svg",
    },
    {
      name: "TensorFlow",
      link: "https://www.tensorflow.org/",
      logo: "https://io.google/2022/app/images/machinelearning-logo.svg",
    },
    {
      name: "Web",
      link: "https://developers.google.com/web",
      logo: "https://io.google/2022/app/images/web-logo.svg",
    },
  ]
export const FOOTER_LINKS = [
  {
    text: 'About GDG Program',
    isInternal: false,
    path: 'https://developers.google.com/community/gdg'
  },
  {
    text: 'About WTM Program',
    isInternal: false,
    path: 'https://developers.google.com/womentechmakers'
  },
  {
    text: 'Community Guidelines',
    isInternal: false,
    path: 'https://developers.google.com/community-guidelines'
  },
]

export const SPONSORS = {
  title: [
    {
      title: 'Google for Developers',
      link: 'https://developers.google.com/',
      photo: 'sponsors/google_for _dev.svg'
    },
  ],
  diamond: [
    {
      title: 'Flutter Flow',
      link: 'https://www.flutterflow.io/',
      photo: 'sponsors/flutter_flow.svg'
    },
  ],
  venue: [
    {
      title: 'SmartSense Consulting Solutions',
      link: 'https://smartsensesolutions.com/',
      photo: 'sponsors/smart_sense.svg'
    },
    {
      title: 'BOSC Tech Labs Private Limited',
      link: 'https://bosctechlabs.com//',
      photo: 'sponsors/bosc.svg'
    },
    {
      title: 'Sai Branding',
      link: 'https://www.saibranding.com/',
      photo: 'sponsors/sai.svg'
    },
  ],
  ticketing: [
    {
      title: 'Konfhub',
      link: 'https://konfhub.com/',
      photo: 'sponsors/konf_hub.svg'
    }
  ]
}

const team = []
