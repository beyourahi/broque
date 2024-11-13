import { Balance } from "@/components/Balance";
import { MoneyList } from "@/components/MoneyList";
import { Navbar } from "@/components/Navbar";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const runtime = "edge";

const Home = async () => {
    const { getUser, isAuthenticated: auth } = getKindeServerSession();
    const user = await getUser();
    const isAuthenticated = await auth();
    const permitted_users = [
        "beyourahi@gmail.com",
        "rahikhan360@gmail.com",
        "preetyfarihaafreen@gmail.com"
    ];

    if (!isAuthenticated || !permitted_users.includes(user.email!)) redirect("/login");

    return (
        <div className="flex flex-grow justify-center p-4">
            <div className="w-full max-w-7xl space-y-10">
                <Navbar />
                <Balance />
                <div className="grid gap-6 md:grid-cols-2">
                    <MoneyList title="Incomes" />
                    <MoneyList title="Expenses" />
                </div>
            </div>
        </div>
    );
};

export default Home;
