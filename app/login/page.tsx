import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Wallet2 } from "lucide-react";

const Login = () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
        <div className="relative w-full max-w-md">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-32 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[120px]" />
            <div className="absolute -bottom-32 right-0 -z-10 h-[250px] w-[250px] rounded-full bg-zinc-500/20 blur-[120px]" />

            <div className="relative rounded-2xl border border-white/10 bg-black/40 px-8 pb-12 pt-16 backdrop-blur-xl">
                {/* Logo section */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 shadow-lg shadow-emerald-500/20">
                        <Wallet2 className="h-8 w-8 text-white" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* Title section */}
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            hold up bruh
                        </h1>
                        <p className="text-sm text-white/50">You ain&apos;t welcome here</p>
                    </div>

                    {/* Login button */}
                    <LoginLink
                        postLoginRedirectURL="/"
                        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-px font-medium text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30"
                    >
                        <div className="relative flex items-center justify-center gap-2 rounded-xl bg-zinc-950/50 px-6 py-2 text-xl font-semibold transition-all duration-300 active:scale-95 group-hover:bg-transparent">
                            🚀💩
                        </div>
                    </LoginLink>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
