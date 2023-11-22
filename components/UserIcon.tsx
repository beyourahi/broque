import { authOptions } from "lib";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const UserIcon = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="relative h-[28px] w-[28px] md:h-[30px] md:w-[30px]">
            <Image
                src={session?.user?.image!}
                alt={session?.user?.name!}
                fill
                className="rounded-full"
                priority={true}
            />
        </div>
    );
};
