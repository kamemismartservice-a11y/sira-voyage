import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const staff = [
  {
    email: "commercial1@siravoyage.ci",
    password: "ChangeMoi123",
    name: "Commercial 1",
    role: "staff",
  },
  {
    email: "commercial2@siravoyage.ci",
    password: "ChangeMoi123",
    name: "Commercial 2",
    role: "staff",
  },
  {
    email: "commercial3@siravoyage.ci",
    password: "ChangeMoi123",
    name: "Commercial 3",
    role: "staff",
  },
];

for (const s of staff) {
  const hashed = await bcrypt.hash(s.password, 10);
  await prisma.user.upsert({
    where: { email: s.email },
    update: { password: hashed, name: s.name, role: s.role },
    create: { email: s.email, password: hashed, name: s.name, role: s.role },
  });
  console.log(`✔ Compte créé/mis à jour : ${s.email}`);
}

await prisma.$disconnect();