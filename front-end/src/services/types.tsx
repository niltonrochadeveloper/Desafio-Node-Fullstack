export type ApiResponse<T> = Pick<Response, "status"> &
  Partial<ApiError> & {
    result?: T | any;
    data?: T | any;
  };

export type ApiError = Pick<Response, "status"> & {
  errors?: ErrorDetails[];
  status: any;
};

export interface AppError {
  message: string;
  status: any;
  metadata?: any;
  context?: string;
  error?: any;
  isUnhandledError?: any;
  meta?: any;
}

interface ErrorDetails {
  message: string;
}
