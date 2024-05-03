 
import { useQuery } from 'react-query';

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  products: Product[];
  count: number;
}

export const fetchProducts = async (page: number, rows: number): Promise<ApiResponse> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    rows: rows.toString(),
    sortBy: 'id',
    orderBy: 'DESC',
  });

  const url = `${API_URL}/products?${queryParams}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao obter os produtos.');
  }
  const data: ApiResponse = await response.json();
  return data;
};

export const useProductsQuery = (page: number, rows: number) => {
  return useQuery(['products', page, rows], () => fetchProducts(page, rows));
};
