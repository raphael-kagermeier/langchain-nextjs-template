"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useApiKeyStore } from "@/lib/hooks/use-signin-modal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function ApiKeyModal() {
  const store = useApiKeyStore();
  return (
    <AlertDialog open={store.isModalOpen} onOpenChange={store.setModalOpen}>
        <AlertDialogTrigger asChild>
            <Button className="fixed left-0 translate-x-1/2 -translate-y-1/2 bottom-0" variant={"outline"}>🔑</Button>
        </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You need to set an OpenAi API Key to get started
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Input
            className="text-"
              type="password"
              value={store.apiKey}
              onChange={(e) => store.setApiKey(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
