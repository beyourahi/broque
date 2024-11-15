import Image from "next/image";
import bossman from "@/public/bossman.webp";
import { Session } from "next-auth";
import { cn } from "@/lib/utils";

interface Props {
    session: Session;
    className?: string;
}

export const UserInfo = ({ session, className }: Props) => (
    <div className={cn("flex items-center gap-3", className)}>
        <div className="relative h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
            <Image
                src={session?.user?.image || bossman}
                alt="User avatar"
                fill
                className="object-cover"
                priority={true}
            />
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">{session?.user?.name}</span>

                <span className="text-sm font-medium text-white sm:text-base">
                    {session?.user?.email}
                </span>
            </div>
        </div>
    </div>
);
