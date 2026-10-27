import Thermometer from "@/components/ui/Thermometer";
import BrokerCard from "@/components/ui/BrokerCard";
import TrackedLink from "@/components/ui/TrackedLink";
import { calculatorConfig } from "@/lib/config";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-ink">
      {/* En-tête avec logo */}
      <header className="mx-auto flex max-w-[1280px] justify-center px-6 pt-8">
        <span className="inline-flex rounded-xl bg-ink px-4 py-2 shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="SoluTaux" className="h-12 w-auto" />
        </span>
      </header>

      {/* Titre centré */}
      <div className="mx-auto max-w-[760px] animate-fadeUp px-6 py-10 text-center lg:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/5 px-4 py-1.5 text-xs font-semibold text-slate-600">
          <span className="h-2 w-2 rounded-full bg-savings" />
          Gratuit • Sans engagement • Aucun impact sur ton crédit
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Combien pourrais-tu{" "}
          <span className="neon-word inline-block pr-1 align-baseline text-[1.15em] leading-none">
            économiser
          </span>{" "}
          en consolidant tes dettes?
        </h1>

        <p className="ai-gradient-text mt-6 text-lg font-semibold">
          Analyse intelligente propulsée par l&apos;IA
        </p>

        <div className="mt-8 flex justify-center">
          <TrackedLink
            href="/calculator"
            event="ViewContent"
            className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-ai px-8 text-base font-extrabold text-white shadow-glow transition hover:brightness-110 sm:w-auto"
          >
            Calculer mon potentiel d&apos;économie
          </TrackedLink>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Gratuit. Sans engagement. Aucun impact sur ton crédit.
        </p>
      </div>

      <footer className="relative z-10 mx-auto max-w-[1280px] px-6 pb-8 pt-4 text-center text-xs text-ink/40 lg:text-left">
        {calculatorConfig.brokerName} — {calculatorConfig.brokerAddress}
      </footer>

      {/* Potentiel + coordonnées, tout à la fin */}
      <div className="relative z-10 mx-auto flex w-full max-w-[520px] flex-col gap-4 px-6 pb-16">
        <Thermometer score={0} level={null} hasEnoughInfo={false} />
        <BrokerCard />
      </div>

      {/* Décoration : lignes rouges courbées en bas de l'écran */}
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-40 w-full"
      >
        <path
          d="M0 140 C 280 40, 520 180, 820 90 S 1260 10, 1440 70"
          fill="none"
          stroke="#B91C1C"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M0 180 C 320 110, 600 210, 900 140 S 1300 60, 1440 120"
          fill="none"
          stroke="#B91C1C"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M0 110 C 240 170, 560 60, 860 150 S 1220 190, 1440 150"
          fill="none"
          stroke="#B91C1C"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </main>
  );
}
