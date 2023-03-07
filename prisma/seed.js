import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedArticleTable() {
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

async function seedNewsSiteTable() {
  let data = [];
  await fetch('https://api.spaceflightnewsapi.net/v3/info')
  .then(response => response.json())
  .then(result => {
      const sites = result.newsSites
      for (let site of sites) {
        let obj = { name: site }
        data.push(obj);
      }
  });

  await prisma.newsSite.createMany({
    data
  });
}

async function main() {
  seedArticleTable();
  seedNewsSiteTable();
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