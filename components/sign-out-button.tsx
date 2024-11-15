import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/auth";

export const SignOutButton = () => (
    <form
        action={async () => {
            "use server";
            await signOut({
                redirect: true,
                redirectTo: "/login"
            });
        }}
    >
        <Button
            type="submit"
            variant="outline"
            size="lg"
            className="w-full border border-white/10 bg-white/5 px-4 font-medium text-white/80 transition-all duration-300 ease-out hover:border-red-500/20 hover:bg-red-500/20 hover:text-red-500 sm:w-auto sm:px-6"
        >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log Out</span>
        </Button>
    </form>
);
