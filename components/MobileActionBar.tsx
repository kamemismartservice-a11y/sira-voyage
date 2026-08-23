export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex w-full border-t border-[#B7962F]/20 bg-[#0B3D2E]">
        <a
          href="https://siravoyage.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 border-r border-[#F8F6F0]/10 py-2.5 text-[#F8F6F0]"
        >
          <span className="text-base">🗓️</span>
          <span className="text-[10px] font-medium tracking-wide">Réserver</span>
        </a>
        <a
          href="tel:+2250545516269"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 border-r border-[#F8F6F0]/10 py-2.5 text-[#F8F6F0]"
        >
          <span className="text-base">📞</span>
          <span className="text-[10px] font-medium tracking-wide">Conseiller</span>
        </a>
        <a
          href="https://wa.me/2250545516269?text=Bonjour%20SIRA%20VOYAGES%2C%20je%20souhaite%20obtenir%20des%20informations."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-[#F8F6F0]"
        >
          <span className="text-base">💬</span>
          <span className="text-[10px] font-medium tracking-wide">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
