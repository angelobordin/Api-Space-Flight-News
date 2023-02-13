import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    let data = [];
    await fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=50')
    .then(response => response.json())
    .then(result => {
        for (let article of result) {
            delete article.id;
            delete article.launches;
            delete article.events;

            data.push(article);
        }
    });

    await prisma.article.createMany({
        data
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })