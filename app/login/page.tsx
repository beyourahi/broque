import { Card, CardContent } from "@/components/ui/card";
import { Wallet2 } from "lucide-react";
import { login } from "@/actions/login";
import { LogInButton } from "@/components/log-in-button";

const Login = () => (
    <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-zinc-900 via-black/50 to-black">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-400 ring-1 ring-emerald-500/30">
                        <Wallet2 className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Hold Up
                        </h1>
                        <p className="text-sm text-white/60 sm:text-base">
                            Let&apos;s see if you&apos;re worthy of entering.
                        </p>
                    </div>
                </div>

                <form action={login}>
                    <LogInButton />
                </form>
            </CardContent>
        </Card>
    </div>
);

export default Login;
