import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const app = fastify();

const prisma = new PrismaClient();
prisma.user.create({
  data: {
    name: "Initial Data",
    email: "guilherme@gmail.com",
    password: "securepassword",
  },
});
