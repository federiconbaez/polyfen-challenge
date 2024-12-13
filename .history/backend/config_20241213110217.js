export const CONFIG = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/sales_prospects',
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  };
  
  export const API_ROUTES = {
    PROSPECTS: '/api/prospects',
  };
  
  export const SORT_FIELDS = ['name', 'email', 'country', 'jobTitle', 'yearsOfExperience', 'industry', 'companySize', 'score'];
  export const SORT_ORDERS = ['asc', 'desc'];
  export const DEFAULT_PAGE_SIZE = 10;
  
  