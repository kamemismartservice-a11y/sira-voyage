"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContentItem(formData: FormData) {
  const titre = formData.get("titre") as string;
  const theme = formData.get("theme") as string;
  const ficheMarketingId = formData.get("ficheMarketingId") as string;
  const rubrique = formData.get("rubrique") as string;
  const couche = formData.get("couche") as string;
  const format = formData.get("format") as string;
  const assigneId = formData.get("assigneId") as string;
  const datePublicationPrevue = formData.get("datePublicationPrevue") as string;
  const hashtags = formData.get("hashtags") as string;
  const lienVisuel = formData.get("lienVisuel") as string;
  const texte = formData.get("texte") as string;

  if (!titre || !rubrique || !format) {
    throw new Error("Champs obligatoires manquants");
  }

  const item = await prisma.contentItem.create({
    data: {
      titre,
      theme: theme || undefined,
      ficheMarketingId: ficheMarketingId || undefined,
      rubrique: rubrique as any,
      couche: (couche || "moteur_commercial") as any,
      format: format as any,
      assigneId: assigneId || undefined,
      datePublicationPrevue: datePublicationPrevue ? new Date(datePublicationPrevue) : undefined,
      hashtags: hashtags || undefined,
      lienVisuel: lienVisuel || undefined,
      texte: texte || undefined,
    },
  });

  await prisma.contentActivityLog.create({
    data: {
      contentItemId: item.id,
      userId: assigneId || undefined,
      action: "creation",
      nouveauStatut: "a_faire",
    },
  });

  revalidatePath("/crm/contenus");
}

export async function updateContentStatut(formData: FormData) {
  const id = formData.get("id") as string;
  const nouveauStatut = formData.get("statut") as string;
  const userId = formData.get("userId") as string;

  if (!id || !nouveauStatut) {
    throw new Error("Champs obligatoires manquants");
  }

  const current = await prisma.contentItem.findUnique({ where: { id } });
  if (!current) throw new Error("Contenu introuvable");

  await prisma.contentItem.update({
    where: { id },
    data: {
      statut: nouveauStatut as any,
      datePublicationReelle:
        nouveauStatut === "publie" ? new Date() : current.datePublicationReelle,
    },
  });

  await prisma.contentActivityLog.create({
    data: {
      contentItemId: id,
      userId: userId || undefined,
      action: "changement_statut",
      ancienStatut: current.statut,
      nouveauStatut: nouveauStatut as any,
    },
  });

  revalidatePath("/crm/contenus");
  revalidatePath(`/crm/contenus/${id}`);
}

export async function updateContentItem(formData: FormData) {
  const id = formData.get("id") as string;
  const texte = formData.get("texte") as string;
  const hashtags = formData.get("hashtags") as string;
  const lienVisuel = formData.get("lienVisuel") as string;
  const statut = formData.get("statut") as string;

  if (!id) throw new Error("ID manquant");

  await prisma.contentItem.update({
    where: { id },
    data: {
      texte: texte || undefined,
      hashtags: hashtags || undefined,
      lienVisuel: lienVisuel || undefined,
      statut: (statut || undefined) as any,
    },
  });

  revalidatePath("/crm/contenus");
  revalidatePath(`/crm/contenus/${id}`);
}