import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface useApiKeyStore {
  isModalOpen: boolean;
  apiKey: string;
  setModalOpen: (isOpen: boolean) => void;
  setApiKey: (apiKey: string) => void;
  hasApiKey: () => boolean;
}

export const useApiKeyStore = create<useApiKeyStore>()(
  persist(
    (set, get) => ({
      isModalOpen: false,
      apiKey: "",
      setModalOpen: (isOpen: boolean) => set({ isModalOpen: isOpen }),
      setApiKey: (apiKey: string) => set({ apiKey: apiKey }),
      hasApiKey: () => Boolean(get().apiKey),
    }),
    {
      name: "openai-api-key",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
