export type IUser = {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  role?: string;
  isDeleted?: boolean;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  bio?: string;
  socialMedia?: Record<string, string>;
  _id?: string;
};
