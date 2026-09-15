/**
 * Paystack Integration & Payment architecture abstraction.
 * Keep payment logic isolated from UI components.
 */

export interface InitializePaymentParams {
  email: string;
  amount: number;
  reference: string;
  callbackUrl: string;
}

export async function initializePaystackTransaction(params: InitializePaymentParams) {
  return {
    authorizationUrl: '',
    reference: params.reference,
  };
}

export async function verifyPaystackSignature(payload: string, signature: string): Promise<boolean> {
  return Boolean(payload && signature);
}
