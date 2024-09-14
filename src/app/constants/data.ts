import {Testimonial} from "../types/testimonials";
import {Ticket} from "../types/ticket";

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
    job: 'Some Post, company',
    subJob: 'TFUG SURAT',
    outSide: 'It’s especially rewarding when a fellow community member recognizes Devfest Gandhinagar’s attention to detail,\n impressive scale, and dedication to attendee experience!'
  }
}
export const TICKETS: Ticket[] = [
  {
    title: 'Student Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conferences',
      'Lunches, Tea/coffee & snacks'
    ],
    soldOut: false,
    price: {
      footnote: 'limited, until sold out',
      base: '₹500',
      action: '+GST'
    }
  },
  {
    title: 'Professional Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conferences',
      'Lunches, Tea/coffee & snacks'
    ],
    soldOut: false,
    price: {
      footnote: 'limited, until sold out',
      base: '₹500',
      action: '+GST'
    }
  },
  {
    title: 'Professional Ticket + Mock Interview',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conferences',
      'Lunches, Tea/coffee & snacks',
      'Access to mock interview panel',
    ],
    soldOut: false,
    price: {
      footnote: 'limited, until sold out',
      base: '₹750',
      action: '+GST'
    }
  },
  {
    title: 'Supporter Ticket',
    points: [
      'Full-access to Sessions, Oct 20',
      'Talks, Keynotes, Panels, Conferences',
      'Lunches, Tea/coffee & snacks',
      'Access to mock interview panel',
    ],
    soldOut: false,
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
      'Talks, Keynotes, Panels, Conferences',
      'Lunches, Tea/coffee & snacks',
      'Access to mock interview panel',
      'Networking Dinner with speakers & organizers',
    ],
    soldOut: false,
    price: {
      footnote: 'limited, until sold out',
      base: '₹3000',
      action: '+GST'
    }
  }
];

