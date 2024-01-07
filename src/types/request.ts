export type AnnouncementRequest = {
  id?: number,
  title: string,
  content: string,
  photo?: File,
  preservePhoto: boolean,
};

export type PhotoRequest = {
  data: Buffer;
  type: string;
}

export type PaginationRequest = {
  sort_column?: string;
  sort_type?: 'ASC' | 'DESC';
  search_column?: string[];
  search_value?: string[];
  page?: number | string;
  limit?: number | string;
};

export type ProductRequest = {
  name: string;
  description: string;
  stock: number;
  price: number;
  max_quantity: number;
  variations: string;
}

export type EventRequest = {
  id?: number;
  title: string;
  description: string;
  venue: string;
  date: string;
  start_time: string;
  end_time: string;
  thumbnail?: File
}