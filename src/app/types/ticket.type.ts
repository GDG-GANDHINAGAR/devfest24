export type TicketType = {
  title: string;
  points: string[];
  soldOut: boolean;
  link: string;
  price: {
    footnote: string;
    base: string;
    action: string;
  };
};
