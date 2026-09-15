export async function processPaymentWebhook(event: Record<string, unknown>): Promise<boolean> {
  if (!event) return false;
  return true;
}
