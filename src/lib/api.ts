import { Company, Product, Review, User } from "./types";
import { companies, products, reviews, users } from "./mocks";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 3000);
  });
};

export const getProducts = (): Promise<Product[]> => getAsync(products);
export const getUsers = (): Promise<User[]> => getAsync(users);
export const getCompanies = (): Promise<Company[]> => getAsync(companies);
export const getReviews = (): Promise<Review[]> => getAsync(reviews);
