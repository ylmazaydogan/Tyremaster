import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const { endpoint, method = "GET", data } = requestData;

    // Build the URL for the request
    const apiUrl = `${process.env.COMMALEON_API_URL}${endpoint}`;

    // Prepare the request options
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Commkey": process.env.COMMALEON_PLATFORM_KEY as string, // Use server-side env variable
      },
    };

    // Add body for non-GET requests
    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    // Add query params for GET requests
    let url = apiUrl;
    if (method === "GET" && data) {
      const params = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        params.append(key, String(value));
      });
      url = `${apiUrl}?${params.toString()}`;
    }

    console.log(`Forwarding request to: ${url}`);

    // Forward the request
    const response = await fetch(url, options);

    // Get response data
    const responseData = await response.json();

    // Return the response with the same status
    return NextResponse.json(responseData, { status: response.status });
  } catch (error: any) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
