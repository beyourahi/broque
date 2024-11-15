import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { signOut } from "@/auth";

export const AccessDenied = () => (
    <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-zinc-900 via-black/50 to-black">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="rounded-2xl bg-rose-500/20 p-3 text-rose-400 ring-1 ring-rose-500/30">
                        <Shield className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Sorry bruh
                        </h1>
                        <p className="text-sm text-white/60 sm:text-base">
                            Your name&apos;s not on the list!
                        </p>
                    </div>
                </div>

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
                        className="flex w-full items-center gap-3 border-0 bg-white/5 px-4 font-semibold text-white/80 transition-all duration-300 ease-out hover:bg-red-500/10 hover:text-red-500"
                    >
                        <span>Go Away</span>
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
);
