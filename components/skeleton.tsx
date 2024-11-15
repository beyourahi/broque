import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const NavbarSkeleton = () => (
    <Card className="rounded-xl border-0 bg-gradient-to-r from-zinc-900 via-black/50 to-black">
        <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <Skeleton className="h-9 w-9 rounded-xl sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-7 w-24 sm:h-8 sm:w-28 lg:h-9 lg:w-32" />
                    <Skeleton className="hidden h-4 w-48 sm:block lg:h-5 lg:w-64" />
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center">
                <div className="flex items-center divide-x divide-white/10">
                    <div className="flex items-center gap-3 pr-8">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                    </div>
                    <div className="pl-8">
                        <Skeleton className="h-10 w-28" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <Skeleton className="h-10 w-10" />
            </div>
        </CardContent>
    </Card>
);

const BalanceCardSkeleton = ({ isMain }: { isMain?: boolean }) => (
    <Card
        className={`group relative overflow-hidden rounded-2xl border-0 ${
            isMain
                ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 sm:col-span-2 xl:col-span-1"
                : "bg-gradient-to-br from-black/60 to-black/40 xl:col-span-1"
        }`}
    >
        <CardContent className="p-4 sm:p-6 xl:p-8">
            <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-6 w-8 rounded-full" />
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div className="space-y-3">
                    <Skeleton
                        className={`${
                            isMain ? "h-12 w-40 sm:h-14 sm:w-48" : "h-10 w-36 sm:h-12 sm:w-40"
                        }`}
                    />
                    <Skeleton className="h-6 w-32" />
                </div>
                {isMain && <Skeleton className="h-12 w-12 rounded-xl" />}
            </div>
        </CardContent>
    </Card>
);

const BalanceSkeleton = () => (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:gap-6">
        <BalanceCardSkeleton isMain />
        <BalanceCardSkeleton />
        <BalanceCardSkeleton />
    </div>
);

const TransactionListSkeleton = ({ count = 10 }: { count?: number }) => (
    <div className="space-y-5">
        <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-black/60 to-black/40">
            <CardContent className="p-2 md:p-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="flex flex-col">
                        {index > 0 && <div className="my-1 h-px bg-white/10" />}
                        <div className="flex items-center justify-between gap-4 px-2 py-4 xl:px-4">
                            <div className="flex items-center gap-4">
                                <Skeleton className="h-11 w-11 rounded-xl" />
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="h-5 w-32 sm:w-40" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-6 w-24 sm:w-28" />
                                <Skeleton className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
);

export const DashboardSkeleton = () => (
    <div className="mx-auto min-h-screen w-full max-w-[2000px] space-y-8 !overflow-hidden p-2 md:p-4 xl:space-y-12">
        <NavbarSkeleton />
        <BalanceSkeleton />
        <div className="grid gap-10 lg:grid-cols-2">
            <TransactionListSkeleton />
            <TransactionListSkeleton />
        </div>
    </div>
);
