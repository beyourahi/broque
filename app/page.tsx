import { auth } from "@/auth";
import { getAll } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { PERMITTED_USERS } from "@/data";
import { calculateFinancialSummary } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Balance } from "@/components/balance";
import { AccessDenied } from "@/components/access-denied";
import { DesktopTransactionGrid } from "@/components/desktop-transaction-grid";
import { MobileTransactionTabs } from "@/components/mobile-transaction-tabs";

export const runtime = "edge";

export default async function Home() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    if (!PERMITTED_USERS.includes(session?.user?.email as (typeof PERMITTED_USERS)[number])) {
        return <AccessDenied />;
    }

    const data = (await getAll()) as FinancialData;

    if (!data) {
        return <p className="text-center">No data found</p>;
    }

    const summary = calculateFinancialSummary(data);
    const incomes = data.incomes;
    const expenses = data.expenses;

    return (
        <div className="mx-auto w-full max-w-[2000px] flex-grow space-y-8 p-2 md:p-4 xl:space-y-12">
            <Navbar session={session} />
            <Balance summary={summary} />
            <MobileTransactionTabs incomes={incomes} expenses={expenses} />
            <DesktopTransactionGrid incomes={incomes} expenses={expenses} />
        </div>
    );
}
