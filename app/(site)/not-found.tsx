import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container-grid py-24 text-center">
            <h1 className="text-5xl">404</h1>
            <p className="mt-4 text-cream/85">Page not found.</p>
            <Link href="/" className="mt-6 inline-block rounded-md bg-saffron px-4 py-2 text-charcoal font-semibold">Return Home</Link>
        </main>
    );
}


