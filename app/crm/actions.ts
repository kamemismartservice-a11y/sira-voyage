"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createEntreprise(formData: FormData) {
  const nom = formData.get("nom") as string;
  const categorie = formData.get("categorie") as string;
  const ville = formData.get("ville") as string;
  const commune = formData.get("commune") as string;
  const telephoneFixe = formData.get("telephoneFixe") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const emailPrincipal = formData.get("emailPrincipal") as string;

  if (!nom || !categorie || !ville || !commune) {
    throw new Error("Champs obligatoires manquants");
  }

  await prisma.entreprise.create({
    data: {
      nom,
      categorie: categorie as any,
      ville,
      commune,
      telephoneFixe: telephoneFixe || undefined,
      whatsapp: whatsapp || undefined,
      emailPrincipal: emailPrincipal || undefined,
    },
  });

  revalidatePath("/crm/prospects");
}