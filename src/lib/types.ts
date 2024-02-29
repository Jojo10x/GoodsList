export interface Product {
    id: number;
    name: string;
    description: string;
    companyId: string;
    reviewIds: string[];
  }
  
  export interface Company {
    id: string;
    name: string;
    created: number;
    country: string;
  }
  
  export interface User {
    id: string;
    name: string;
  }
  
  export interface Review {
    id: string;
    userId: string;
    text: string;
  }
  
  export interface ReviewInformation {
    id: string;
    user: User;
    text: string;
  }
  
  export interface ProductInformation {
    id: number;
    name: string;
    description: string;
    company: Company;
    reviews: ReviewInformation[];
  }
  