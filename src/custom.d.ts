type TagItem = {
  name: string;
  value: string;
};

type RecordItem = {
  type: string;
  tags: TagItem[];
  notes: string;
  amount: number;
  createdAt?: Date;
};
