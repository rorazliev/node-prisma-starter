import prisma from './prisma';

const seed = async () => {
  //
};

seed()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
