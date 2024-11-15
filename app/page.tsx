import { auth } from "@/auth";
import { getAll } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { PERMITTED_USERS } from "@/data";
import { calculateFinancialSummary } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Balance } from "@/components/balance";
import { TransactionList } from "@/components/transaction-list";
import { AccessDenied } from "@/components/access-denied";

export default async function Home() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    if (!PERMITTED_USERS.includes(session?.user?.email as (typeof PERMITTED_USERS)[number])) {
        return <AccessDenied />;
    }

    const data = (await getAll()) as FinancialData;
    const summary = calculateFinancialSummary(data);

    return (
        <div className="mx-auto min-h-screen w-full max-w-[2000px] space-y-8 p-2 md:p-4 xl:space-y-12">
            <Navbar session={session} />
            <Balance summary={summary} />
            <div className="grid gap-10 lg:grid-cols-2">
                <TransactionList title="Incomes" items={data.incomes} />
                <TransactionList title="Expenses" items={data.expenses} />
            </div>
        </div>
    );
}
