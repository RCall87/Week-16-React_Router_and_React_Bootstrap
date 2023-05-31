const API_ENDPOINT = 'https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1';

export const getProducts = async () => {
  const response = await fetch(`${API_ENDPOINT}/products`);
  const data = await response.json();
  return data;
};

export const getProduct = async (productId) => {
  const response = await fetch(`${API_ENDPOINT}/products/${productId}`);
  const data = await response.json();
  return data;
};

export const deleteProduct = async (productId) => {
  const response = await fetch(`${API_ENDPOINT}/products/${productId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
};
