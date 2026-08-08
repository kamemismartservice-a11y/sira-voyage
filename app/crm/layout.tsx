import Link from "next/link";
import { signOut } from "@/auth";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const WHITE = "#FFFFFF";

const linkStyle: React.CSSProperties = {
  color: WHITE,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
};

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav
        style={{
          background: "#08281D",
          padding: "0.75rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          borderBottom: `2px solid ${GOLD}`,
        }}
      >
        <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
          <Link href="/crm/prospects" style={linkStyle}>
            Prospects
          </Link>
          <Link href="/crm/contenus" style={linkStyle}>
            Contenus
          </Link>
          <Link href="/crm/bibliotheque" style={linkStyle}>
            Bibliothèque
          </Link>
          <Link href="/crm/aide" style={linkStyle}>
            Aide
          </Link>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            style={{
              background: GOLD,
              color: WHITE,
              border: "none",
              borderRadius: 6,
              padding: "0.45rem 1.1rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Déconnexion
          </button>
        </form>
      </nav>
      {children}
    </div>
  );
}