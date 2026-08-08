"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    router.push("/crm/prospects");
    router.refresh();
  }

  return (
    <div
      style={{
        background: OFFWHITE,
        minHeight: "100vh",
        fontFamily: SANS,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Bandeau */}
      <div style={{ background: EMERALD, padding: "2rem 2.5rem" }}>
        <h1 style={{ color: WHITE, fontFamily: SERIF, fontSize: "2rem", margin: 0 }}>
          SIRA VOYAGES
        </h1>
        <p style={{ color: GOLD, fontFamily: SERIF, fontStyle: "italic", margin: "0.25rem 0 0" }}>
          Faire l'expérience du monde
        </p>
      </div>

      {/* Formulaire centré */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: WHITE,
            borderRadius: 14,
            padding: "2.5rem",
            boxShadow: "0 1px 3px rgba(11,61,46,0.08)",
            border: `1px solid ${BORDER}`,
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div>
            <h2 style={{ fontFamily: SERIF, color: EMERALD, margin: "0 0 0.25rem" }}>
              Connexion
            </h2>
            <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>
              Accès réservé à l'équipe SIRA VOYAGES
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontSize: "0.8rem", color: MUTED }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "0.7rem 0.9rem",
                borderRadius: 8,
                border: "1px solid #D8D3C4",
                fontFamily: SANS,
                fontSize: "0.95rem",
                background: OFFWHITE,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontSize: "0.8rem", color: MUTED }}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "0.7rem 0.9rem",
                borderRadius: 8,
                border: "1px solid #D8D3C4",
                fontFamily: SANS,
                fontSize: "0.95rem",
                background: OFFWHITE,
              }}
            />
          </div>

          {error && (
            <p style={{ color: "#8A1D1D", fontSize: "0.85rem", margin: 0 }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: GOLD,
              color: WHITE,
              border: "none",
              borderRadius: 8,
              padding: "0.8rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>

      {/* Pied de page */}
      <footer
        style={{
          textAlign: "center",
          padding: "1.25rem",
          color: MUTED,
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} SIRA VOYAGES — Tous droits réservés
      </footer>
    </div>
  );
}