export type List = {
  id: string;
  title: string;
  date: Date;
  status: ListStatus;
};

export type ListStatus = 'need' | 'done';
