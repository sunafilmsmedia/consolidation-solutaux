import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-ink">
      <div className="max-w-md animate-fadeUp">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-savings/20 text-3xl">
          ✓
        </div>
        <h1 className="text-3xl font-extrabold">C&apos;est noté!</h1>
        <p className="mt-4 text-slate-600">
          Ton analyse a bien été enregistrée. Un courtier hypothécaire pourra communiquer avec toi
          pour valider tes options réelles, sans engagement de ta part.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-2xl border border-ink/15 px-6 font-semibold text-slate-600 transition hover:bg-ink/5"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
