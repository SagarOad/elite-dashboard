import Link from "next/link";
import { usePathname } from "next/navigation";

export default function header() {
  const pathname = usePathname();
  const tabs = [
    { href: "/dashboard/tax-form/personal-info", label: "PERSONAL INFO" },
    { href: "/dashboard/tax-form/income-tax", label: "INCOME" },
    { href: "/dashboard/tax-credit", label: "TAX CREDIT" },
    { href: "/dashboard/tax-deducted", label: "TAX DEDUCTED" },
    { href: "/dashboard/wealth-statement", label: "WEALTH STATEMENT" },
    { href: "/dashboard/expense", label: "EXPENSE" },
    { href: "/dashboard/wrap-up", label: "WRAP-UP" },
    { href: "/dashboard/fbr", label: "FBR" },
    { href: "/dashboard/payment", label: "PAYMENT" },
  ];

  return (
    <div className="header bg-black text-white flex p-4 space-x-4">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.href}>
          <p
            className={`px-4 py-2 rounded ${
              pathname === tab.href ? "bg-red-600" : "bg-black hover:bg-red-500"
            }`}
          >
            {tab.label}
          </p>
        </Link>
      ))}
    </div>
  );
}
