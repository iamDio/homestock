import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [{ name: 'Pantry' }, { name: 'Electronics' }, { name: 'Bathroom' }]
  });
}

await prisma.inventory.createMany({
  data: [
    {
      name: 'Organic Rice',
      description: '2lb bag of organic jasmine rice',
      quantity: 5,
      expiration: new Date('2025-12-15'),
      status: 'FULL',
      reorder: false,
      categoryId: 1 // Pantry category
    },
    {
      name: 'Wireless Drill',
      description: '18V cordless drill with battery pack',
      quantity: 1,
      status: 'LOW',
      reorder: true,
      categoryId: 2 // Electronics category
    },
    {
      name: 'Hand Soap',
      description: 'Antibacterial hand soap refill',
      quantity: 3,
      expiration: new Date('2026-08-20'),
      status: 'FULL',
      reorder: false,
      categoryId: 3 // Bathroom category
    },
    {
      name: 'Canned Tomatoes',
      description: 'Organic diced tomatoes - 14oz can',
      quantity: 0,
      expiration: new Date('2025-06-30'),
      status: 'OUTOFSTOCK',
      reorder: true,
      categoryId: 1 // Pantry category
    },
    {
      name: 'AA Batteries',
      description: 'Alkaline AA batteries pack of 8',
      quantity: 12,
      status: 'FULL',
      reorder: false,
      categoryId: 2 // Electronics category
    }
  ]
});

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  })