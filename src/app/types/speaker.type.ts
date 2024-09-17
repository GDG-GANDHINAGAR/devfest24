export type SpeakerData = {
  img: string;
  name: string;
  jobTitle: string;
  company: string;
  location: string;
  testimonials: string;
  socials?: {
    link: string
    icon: string
  }[]; // Optional property
}
