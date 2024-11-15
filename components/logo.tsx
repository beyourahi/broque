import { brand } from "@/data";
import { Wallet2 } from "lucide-react";

export const Logo = () => (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        <IconWrapper />
        <TextContent />
    </div>
);

const IconWrapper = () => (
    <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/10">
        <Wallet2 className="h-5 w-5 text-white sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
    </div>
);

const TextContent = () => (
    <div className="flex flex-col">
        <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl lg:text-2xl xl:text-3xl">
            {brand.name}
        </h1>

        <span className="hidden text-xs font-medium text-white/50 sm:block lg:text-sm">
            {brand.description}
        </span>
    </div>
);
