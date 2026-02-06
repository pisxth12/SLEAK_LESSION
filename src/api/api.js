const API_BASE_URL =
  import.meta.env.REACT_APP_API_URL || "https://fakestoreapi.com";

//GET ALL PRODUCTS
export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Error fetching products");
  }
  return response.json();
};

//Get product by id
export const getProductById = async () => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if(!response.ok) {
    throw new Error("Error fetching product by id")
  }
  return response.json();
}

export const getAllUsers = async () => {
  const res = await fetch(`${API_BASE_URL}/users`);
  if (!res.ok) {
    throw new Error("Error fetch users");
  }
  return res.json();
};

export const Login = async (username, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (!res.ok) {
    throw new Error("Error login");
  }
  return res.json();
};
