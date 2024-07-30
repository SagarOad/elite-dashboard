const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const options = [
    { name: "Salary", key: "salaryCheck", category: 1 },
    { name: "Business", key: "businessCheck", category: 2 },
    { name: "Freelancer", key: "freelancerCheck", category: 3 },
    { name: "Professional", key: "professionalCheck", category: 4 },
    { name: "Pension", key: "pensionCheck", category: 5 },
    { name: "Agricultural", key: "agriculturalCheck", category: 6 },
    { name: "Commission", key: "commissionCheck", category: 7 },
    { name: "AOP", key: "aopCheck", category: 8 },
    { name: "Property", key: "propertyCheck", category: 9 },
    { name: "Profit on Savings", key: "profitOnSavingsCheck", category: 10 },
    { name: "Investment", key: "investmentCheck", category: 11 },
    { name: "Other", key: "otherCheck", category: 12 },
  ];

  for (const option of options) {
    await prisma.option.create({ data: option });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
