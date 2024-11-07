export async function translateText(text: string): Promise<string> {
  // TODO: Implement actual GLM-4 API integration
  // For now, return a mock translation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`[Translation of: ${text}]`);
    }, 1000);
  });
}