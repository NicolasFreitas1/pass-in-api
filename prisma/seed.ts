import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      title: "Event test",
      slug: "event-test",
      details: "Um evento para testes",
      maximumAttendees: 100,
    },
  });
}

seed().then(() => {
  console.log("Database seeded");
  prisma.$disconnect();
});
