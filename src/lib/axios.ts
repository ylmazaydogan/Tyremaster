// Helper function to make API calls through our proxy
export const makeApiRequest = async (
  endpoint: string,
  method = "GET",
  data = {}
) => {
  try {
    console.log('Making request to:', endpoint); // Debug log

    const response = await fetch("/api/commaleon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint,
        method,
        data: method === "GET" ? undefined : data,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const text = await response.text();
    console.log('Response text:', text); // Debug log

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse response:', text);
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

export const makeMethodsRequest = async (
  endpoint: string,
  method = "GET",
  data = {}
) => {
  try {
    const response = await fetch("/api/methods", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method !== "GET" ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Methods API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error making methods request:", error);
    throw error;
  }
};

export const makeAttributesRequest = async (
  method = "GET",
  data = {}
) => {
  try {
    const response = await fetch("/api/attributes", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method !== "GET" ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Attributes API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error making attributes request:", error);
    throw error;
  }
};

export const makeFiltersRequest = async (
  method = "GET",
  data = {}
) => {
  try {
    // Filters endpoint'ine istek yaparken makeApiRequest'i kullanıyoruz
    // çünkü bu da Commaleon API'sine gidecek
    const response = await makeApiRequest("/filters", method, data);
    return response;
  } catch (error) {
    console.error("Error making filters request:", error);
    throw error;
  }
};

export const makeCheckoutRequest = async (
  endpoint: string,
  method = "GET",
  data = {}
) => {
  try {
    const response = await makeApiRequest(endpoint, method, data);
    return response;
  } catch (error) {
    console.error("Error making checkout request:", error);
    throw error;
  }
};

export const makeBrandsRequest = async (
  method = "GET",
  data = {}
) => {
  try {
    const response = await makeApiRequest("/brands", method, data);
    return response;
  } catch (error) {
    console.error("Error making brands request:", error);
    throw error;
  }
};

export const makeProfileRequest = async (
  method = "GET",
  data = {}
) => {
  try {
    const response = await makeApiRequest("/profile", method, data);
    return response;
  } catch (error) {
    console.error("Error making profile request:", error);
    throw error;
  }
};

// Example usage:
// const products = await makeApiRequest('/products', 'GET', { category: 'tires' });
// const order = await makeApiRequest('/orders', 'POST', { items: [...] });
