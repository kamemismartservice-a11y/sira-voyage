"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateFicheStatut(formData: FormData) {
  const id = formData.get("id") as string;
  const statut = formData.get("statut") as string;

  if (!id || !statut) {
    throw new Error("Champs obligatoires manquants");
  }

  await prisma.ficheMarketing.update({
    where: { id },
    data: { statut: statut as any },
  });

  revalidatePath("/crm/bibliotheque");
}

export async function updateFicheResponsable(formData: FormData) {
  const id = formData.get("id") as string;
  const responsable = formData.get("responsable") as string;

  if (!id) {
    throw new Error("Champ obligatoire manquant");
  }

  await prisma.ficheMarketing.update({
    where: { id },
    data: { responsable: responsable || null },
  });

  revalidatePath("/crm/bibliotheque");
}