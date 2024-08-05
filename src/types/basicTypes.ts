export type AppLayoutProps = Readonly<{ children: React.ReactNode }>;
export type AppPageProps<T = any, K = any> = { params?: T, searchParams?: K };

export type BasicUser = {
  name: string;
  img: string;
};

export type BasicService = {
  coverPhoto: string;
  title: string;
  estimatedPrice: string;
  charge: string;
  _id: string;
};


export type VideoOrImage = "video" | "image";

export type ServiceMedia = {
  src: string;
  type: VideoOrImage;
};

export type ActionResponse = {
  fieldErrors?: {
    [key:string]:string[]|undefined;
  };
  error?: string;
  success?: string;
  data?: any;
}

export type ApiResponse<T = any> = {
  status:200 | 201 | 404 | 400;
  data: T
} 

export type AppPageError = {
  error: Error & { digest?: string },
  reset: () => void
}

export type ActionApiResponse<T, K = null> = null | "error" | T | K

export type Paginated<T = any> = {
  saved?: T[];
  existingRecords: T[],
    hasPreviousPage: boolean,
    previousPages: number,
    hasNextPage: boolean,
    nextPages: number,
    totalPages: number,
    totalDocuments: number,
    currentPage: number
}