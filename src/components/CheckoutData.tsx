"use client";

import { makeApiRequest } from "@/lib/axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';

// Tip tanımlamaları
interface OrderData {
  code: number;
  result: {
    Destination: string;
  };
}

interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
}

interface OrderCreateData {
  address: {
    name: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
    phone: string;
  };
  payment: {
    method: string;
    issuer?: string;
  };
  vat?: string;
}

export default function CheckoutData() {
  const router = useRouter();

  // Checkout verilerini çek
  const {
    data: checkoutData,
    isLoading: isCheckoutLoading,
    error: checkoutError
  } = useQuery({
    queryKey: ['checkout'],
    queryFn: async () => {
      try {
        console.log('Starting checkout data fetch...');
        
        const methodsResponse = await makeApiRequest("/methods", "GET");
        console.log('Methods response:', methodsResponse);
        
        const cartResponse = await makeApiRequest("/cart/total", "GET");
        console.log('Cart response:', cartResponse);

        // Response kontrolü
        if (!methodsResponse?.data || !cartResponse?.data) {
          console.error('Invalid response structure:', { methodsResponse, cartResponse });
          throw new Error("Invalid API response structure");
        }

        return {
          paymentMethods: Array.isArray(methodsResponse.data) ? methodsResponse.data : [],
          total: typeof cartResponse.data.total === 'number' ? cartResponse.data.total : 0
        };
      } catch (error) {
        console.error('Checkout query error:', error);
        throw error;
      }
    },
    retry: false, // Hata durumunda tekrar deneme
    refetchOnWindowFocus: false // Pencere odağı değiştiğinde tekrar istek yapma
  });

  // Sipariş oluşturma mutation'ı
  const createOrderMutation = useMutation({
    mutationFn: async (data: OrderCreateData) => {
      const response = await makeApiRequest("/order", "POST", data);
      if (response.data.code === 200 && response.data.result.Destination) {
        router.push(response.data.result.Destination);
      }
      return response.data;
    }
  });

  // Sipariş ödeme mutation'ı
  const payOrderMutation = useMutation({
    mutationFn: async ({ orderId, method, issuer }: { orderId: string; method: string; issuer?: string }) => {
      await makeApiRequest("/order/pay", "GET", { OrderID: orderId, method, ...(issuer && { issuer }) });
    }
  });

  // VAT kontrol mutation'ı
  const checkVatMutation = useMutation({
    mutationFn: async ({ vat, country }: { vat: string; country: string }) => {
      const response = await makeApiRequest("/check-vat", "GET", { vat, country });
      return response.data;
    }
  });

  if (isCheckoutLoading) return <div>Loading checkout data...</div>;
  if (checkoutError) {
    console.error('Checkout Error:', checkoutError);
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-st">
        <h3 className="font-semibold">Error loading checkout data</h3>
        <p className="text-sm">{checkoutError.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Ödeme Yöntemleri */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Payment Methods</h2>
        <div className="grid gap-2">
          {checkoutData?.paymentMethods.map((method: PaymentMethod) => (
            <div 
              key={method.id}
              className="p-4 border border-light-silver-2 rounded-st"
            >
              <h3 className="font-medium">{method.name}</h3>
              {method.description && (
                <p className="text-sm text-gray">{method.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Toplam Tutar */}
      <div className="p-4 bg-gray-50 rounded-st">
        <p className="text-lg font-semibold">
          Total: €{checkoutData?.total.toFixed(2)}
        </p>
      </div>

      {/* Mutation Durumları */}
      {createOrderMutation.isPending && <div>Creating order...</div>}
      {payOrderMutation.isPending && <div>Processing payment...</div>}
      {checkVatMutation.isPending && <div>Checking VAT...</div>}
    </div>
  );
} 