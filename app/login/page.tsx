import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Wallet2 } from "lucide-react";

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

                <LoginLink postLoginRedirectURL="/">
                    <Button
                        variant="outline"
                        size="lg"
                        className="flex w-full items-center gap-3 border-0 bg-white/5 px-4 font-semibold text-white/80 transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:text-emerald-500"
                    >
                        <span>Log In</span>
                    </Button>
                </LoginLink>
            </CardContent>
        </Card>
    </div>
);

export default Login;
