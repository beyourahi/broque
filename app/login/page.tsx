import { Card, CardContent } from "@/components/ui/card";
import { Wallet2 } from "lucide-react";
import { login } from "@/actions/login";
import { LogInButton } from "@/components/log-in-button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Login() {
    return (
        <div className="relative flex w-full flex-grow">
            {/* Background Skeleton */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-xl" />
                <div className="opacity-30">
                    <HomePageSkeleton />
                </div>
            </div>

            {/* Login Card */}
            <div className="relative flex w-full flex-grow items-center justify-center p-4">
                <Card className="w-full max-w-md overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-zinc-900 via-black/50 to-black backdrop-blur-lg">
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
        </div>
    );
}

// Simplified skeleton component optimized for background use
function HomePageSkeleton() {
    return (
        <div className="mx-auto w-full max-w-[2000px] flex-grow space-y-8 p-2 md:p-4 xl:space-y-12">
            {/* Navbar Skeleton */}
            <Card className="rounded-xl border-0">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-9 w-9 rounded-xl" />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-7 w-32" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="hidden flex-col gap-2 md:flex">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-5 w-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Balance Cards Skeleton */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                <Card className="col-span-2 rounded-2xl border-0 xl:col-span-1">
                    <div className="space-y-3 p-6">
                        <Skeleton className="h-5 w-32" />
                        <div className="flex items-end justify-between">
                            <Skeleton className="h-10 w-48" />
                            <Skeleton className="h-12 w-12" />
                        </div>
                    </div>
                </Card>
                {Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="rounded-2xl border-0">
                        <div className="space-y-3 p-6">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-10 w-40" />
                        </div>
                    </Card>
                ))}
            </div>

            {/* Transactions Grid */}
            <div className="grid grid-cols-2 gap-10">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-5">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-7 w-32" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                        <Card className="rounded-xl border-0">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border-b border-white/5 p-4 last:border-0"
                                >
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-11 w-11 rounded-xl" />
                                        <Skeleton className="h-5 w-32" />
                                    </div>
                                    <Skeleton className="h-6 w-24" />
                                </div>
                            ))}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
