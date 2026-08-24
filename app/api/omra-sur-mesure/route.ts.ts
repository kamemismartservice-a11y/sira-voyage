import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AGENCE_EMAIL = "siravoyage23@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      nom,
      telephone,
      email,
      sexe,
      typeVol,
      periode,
      periodeAutre,
      adultes,
      enfants,
      chambre,
      budget,
      message,
    } = data;

    if (!nom || !telephone || !email) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const periodeAffichee = periode === "autre" ? periodeAutre : periode;

    const lignesRecap = [
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Email : ${email}`,
      sexe && `Sexe : ${sexe}`,
      typeVol && `Type de vol souhaité : ${typeVol}`,
      periodeAffichee && `Période souhaitée : ${periodeAffichee}`,
      adultes && `Nombre d'adultes : ${adultes}`,
      enfants && `Nombre d'enfants : ${enfants}`,
      chambre && `Type de chambre souhaité : ${chambre}`,
      budget && `Budget approximatif par personne : ${budget}`,
      message && `Message complémentaire : ${message}`,
    ].filter(Boolean);

    // Email à l'agence
    await resend.emails.send({
      from: "SIRA VOYAGES <onboarding@resend.dev>",
      to: AGENCE_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande Omra sur mesure — ${nom}`,
      text: lignesRecap.join("\n"),
    });

    // Email de confirmation au client
    await resend.emails.send({
      from: "SIRA VOYAGES <onboarding@resend.dev>",
      to: email,
      subject: "Votre demande d'Omra sur mesure a bien été reçue",
      text: [
        `Bonjour ${nom},`,
        "",
        "Nous avons bien reçu votre demande d'Omra sur mesure. Notre équipe l'étudie et vous recontactera dans les meilleurs délais avec une proposition adaptée à vos disponibilités.",
        "",
        "Récapitulatif de votre demande :",
        ...lignesRecap,
        "",
        "SIRA VOYAGES",
        "Cocody Riviera 3, Bonoumin, Abidjan",
        "+225 27 24 58 90 02",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi demande Omra sur mesure:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi." }, { status: 500 });
  }
}
