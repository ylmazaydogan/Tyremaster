// Helper function to make API calls through our proxy
export const makeApiRequest = async (
  endpoint: string,
  method = "GET",
  data = {}
) => {
  try {
    const response = await fetch("/api/commaleon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint,
        method,
        data,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

// Example usage:
// const products = await makeApiRequest('/products', 'GET', { category: 'tires' });
// const order = await makeApiRequest('/orders', 'POST', { items: [...] });
