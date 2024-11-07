interface LastTranslation {
  input: string;
  output: string;
  timestamp: string;
}

export const storage = {
  get: async (): Promise<LastTranslation | null> => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      return new Promise((resolve) => {
        chrome.storage.local.get(['lastTranslation'], (result) => {
          resolve(result.lastTranslation || null);
        });
      });
    }
    const stored = localStorage.getItem('lastTranslation');
    return stored ? JSON.parse(stored) : null;
  },

  set: async (data: LastTranslation): Promise<void> => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      return new Promise((resolve) => {
        chrome.storage.local.set({ lastTranslation: data }, resolve);
      });
    }
    localStorage.setItem('lastTranslation', JSON.stringify(data));
  }
};