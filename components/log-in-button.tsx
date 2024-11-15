"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, LogOut } from "lucide-react";
import { useFormStatus } from "react-dom";

export const LogInButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="outline"
            size="lg"
            disabled={pending}
            className={cn(
                "flex !w-full items-center gap-2 border border-white/10 bg-white/5 px-4 font-medium text-white/80 transition-all duration-300 ease-out active:border-emerald-500/20 active:bg-emerald-500/10 active:text-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-6 xl:hover:border-emerald-500/20 xl:hover:bg-emerald-500/10 xl:hover:text-emerald-500",
                pending && "cursor-wait border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
            )}
        >
            {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <LogOut className="h-4 w-4" />
            )}
            <span>{pending ? "Logging in" : "Log In"}</span>
        </Button>
    );
};
