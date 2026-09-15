export async function sendNotification(userId: string, message: string): Promise<boolean> {
  if (!userId || !message) return false;
  return true;
}
