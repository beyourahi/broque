"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, LogOut } from "lucide-react";
import { useFormStatus } from "react-dom";

export const LogOutButton = ({ className }: { className?: string }) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="outline"
            size="lg"
            disabled={pending}
            className={cn(
                "flex w-full items-center gap-2 border border-white/10 bg-white/5 px-4 font-medium text-white/80 transition-all duration-300 ease-out active:border-red-500/20 active:bg-red-500/10 active:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-6 xl:hover:border-red-500/20 xl:hover:bg-red-500/10 xl:hover:text-red-500",
                pending && "cursor-wait border-red-500/20 bg-red-500/10 text-red-500",
                className
            )}
        >
            {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <LogOut className="h-4 w-4" />
            )}
            <span>{pending ? "Logging out" : "Log Out"}</span>
        </Button>
    );
};
