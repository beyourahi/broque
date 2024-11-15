import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const HomeSkeleton = () => {
    return (
        <div className="mx-auto w-full max-w-[2000px] flex-grow space-y-8 p-2 md:p-4 xl:space-y-12">
            {/* Navbar Skeleton */}
            <Card className="rounded-xl border-0 bg-gradient-to-r from-zinc-900 via-black/50 to-black">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                        <Skeleton className="h-9 w-9 rounded-xl sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-7 w-32 sm:h-8 sm:w-36 lg:h-9 lg:w-40" />
                            <Skeleton className="hidden h-4 w-24 sm:block lg:h-5 lg:w-28" />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-5 w-32" />
                                </div>
                            </div>
                            <Skeleton className="h-10 w-28" />
                        </div>
                    </div>
                    <Skeleton className="h-10 w-10 lg:hidden" />
                </div>
            </Card>

            {/* Balance Cards Skeleton */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 2xl:gap-6">
                <Card className="col-span-2 rounded-2xl border-0 xl:col-span-1">
                    <div className="space-y-3 p-4 sm:p-6 xl:p-8">
                        <Skeleton className="h-5 w-32" />
                        <div className="flex items-end justify-between">
                            <Skeleton className="h-10 w-48 sm:h-12 sm:w-56" />
                            <Skeleton className="h-12 w-12" />
                        </div>
                    </div>
                </Card>
                {Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="rounded-2xl border-0">
                        <div className="space-y-3 p-4 sm:p-6 xl:p-8">
                            <Skeleton className="h-5 w-32" />
                            <div className="space-y-2">
                                <Skeleton className="h-10 w-40 sm:h-12 sm:w-48" />
                                <Skeleton className="h-6 w-24" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Mobile Transactions Skeleton */}
            <div className="space-y-6 md:hidden">
                <div className="flex h-12 gap-2 rounded-lg">
                    <Skeleton className="h-full w-1/2" />
                    <Skeleton className="h-full w-1/2" />
                </div>
                <Card className="rounded-xl border-0 bg-gradient-to-br from-black/60 to-black/40">
                    <div className="p-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex flex-col">
                                {i > 0 && <div className="my-1 h-px bg-white/10" />}
                                <div className="flex items-center justify-between gap-6 px-2 py-4">
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-11 w-11 rounded-xl" />
                                        <Skeleton className="h-5 w-32" />
                                    </div>
                                    <Skeleton className="h-6 w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Desktop Transactions Grid Skeleton */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-5">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-7 w-32" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                        <Card className="rounded-xl border-0 bg-gradient-to-br from-black/60 to-black/40">
                            <div className="p-2 sm:p-2 md:p-3">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div key={i} className="flex flex-col">
                                        {i > 0 && <div className="my-1 h-px bg-white/10" />}
                                        <div className="flex items-center justify-between gap-6 px-4 py-4">
                                            <div className="flex items-center gap-4">
                                                <Skeleton className="h-11 w-11 rounded-xl" />
                                                <Skeleton className="h-5 w-32" />
                                            </div>
                                            <Skeleton className="h-6 w-24" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
