import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Add your seed data here
  // Example:
  // await prisma.user.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //   },
  // });
  
  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
