const prisma = require("../prisma");

const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const players = [
      {
        name: "Bella",
        breed: "Labrador Retriever",
        status: "field",
      },
      {
        name: "Max",
        breed: "German Shepherd",
        status: "field",
      },
      {
        name: "Luna",
        breed: "French Bulldog",
        status: "field",
      },
      {
        name: "Charlie",
        breed: "Bulldog",
        status: "field",
      },
      {
        name: "Rocky",
        breed: "Labrador",
        status: "field",
      },
      {
        name: "Daisy",
        breed: "Golden Retriever",
        status: "bench",
      },
      {
        name: "Milo",
        breed: "Shih Tzu",
        status: "bench",
      },
      {
        name: "Zoe",
        breed: "Dachshund",
        status: "bench",
      },
      {
        name: "Sadie",
        breed: "Poodle",
        status: "bench",
      },
      {
        name: "Daisy",
        breed: "Beagle",
        status: "bench",
      },
    ]
    await prisma.player.createMany({ data: players });
  };

  await createPlayers();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });