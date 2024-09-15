export type TicketType = {
  title: string;
  points: string[];
  soldOut: boolean;
  price: {
    footnote: string;
    base: string;
    action: string;
  };
};
