export type Ticket = {
  title: string;
  points: string[];
  soldOut: boolean;
  price: {
    footnote: string;
    base: string;
    action: string;
  };
};
