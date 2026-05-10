import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-32 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-accentGreen">404</p>
      <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-textSecondary">The page you requested does not exist.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full border px-5 py-2">
        Back Home
      </Link>
    </div>
  );
}
