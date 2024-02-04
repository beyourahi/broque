import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import bossman from "public/bossman.webp";

export const UserIcon = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="relative h-[28px] w-[28px] md:h-[30px] md:w-[30px]">
            <Image
                src={user?.picture! || bossman}
                alt="User avatar"
                fill
                className="rounded-full"
                priority={true}
            />
        </div>
    );
};
