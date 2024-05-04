import { useQuery } from "react-query";

const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

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

export const fetchProducts = async (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          rows: rows.toString(),
          sortBy: sortBy.toString(),
          orderBy: orderBy,
        });

        const url = `${API_URL}/products?${queryParams}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro ao obter os produtos.");
        }
        const data: ApiResponse = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

export const useProductsQuery = (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
) => {
  return useQuery(["products", page, rows, sortBy, orderBy], () =>
    fetchProducts(page, rows, sortBy, orderBy)
  );
};
