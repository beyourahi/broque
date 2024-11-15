import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export const Spinner = ({ className }: { className?: string }) => (
    <div className={cn("animate-spin text-xl text-primary", className)}>
        <LoaderCircle />
    </div>
);
