import { getAll } from "@vercel/edge-config";
import { Balance } from "components/Balance";
import { MoneyList } from "components/MoneyList";
import { Navbar } from "components/Navbar";
import { authOptions } from "lib";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//! Home Component
const Home = async () => {
    const session = await getServerSession(authOptions);
    const { incomes, expenses }: Data = await getAll();

    if (!session || session?.user?.email !== "beyourahi@gmail.com") redirect("/login");

    return (
        <div className="flex min-h-screen justify-center p-4">
            <div className="w-full max-w-7xl space-y-10">
                <Navbar />
                <Balance incomes={incomes} expenses={expenses} />
                <div className="grid gap-6 md:grid-cols-2">
                    <MoneyList items={incomes} title="Incomes" />
                    <MoneyList items={expenses} title="Expenses" />
                </div>
            </div>
        </div>
    );
};

export default Home;
