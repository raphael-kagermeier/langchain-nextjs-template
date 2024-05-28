import type { Message } from "ai/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import Link from "next/link";
import Markdown from 'react-markdown'
import { cn } from "@/lib/utils";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
  sources: any[];
}) {
  const colorClassName =
    props.message.role === "user" ? "bg-sky-600" : "bg-slate-50 text-black";
  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto";
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} rounded p-4 w-fit max-w-[80%] mb-8 flex`}
    >
      <div className="flex flex-col">
        <div className={cn(props.message.role ==="assistant" && "prose prose-slate")}><Markdown>{props.message.content}</Markdown></div>
        {props.sources && props.sources.length && (
          <div className="mt-6">
            <AlertDialog>
              <AlertDialogTrigger>
              🔗 Show Sources
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-5xl overflow-auto max-h-screen">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      The following sources are considered in this response
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  {props.sources?.map((source, i) => (
                    <div className="mt-2" key={"source:" + i}>
                      <Link target="_blank" href={source.metadata.reference} >
                      <span className="text-md text-slate-300">{source.pageContent}</span>
                      </Link>
                    </div>
                  ))}
                  <AlertDialogFooter>
                    <AlertDialogCancel className="w-full">Close</AlertDialogCancel>
                  </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>
    </div>
  );
}
