import ReservationForm from "./ReservationForm";

export const metadata = {
    title: "Reservations",
    description: "Reserve a table at Tandoori Grill & Bar - Sandpoint.",
};

export default function ReservationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-neutral-900">Make a Reservation</h1>
                    <p className="mt-4 text-xl text-neutral-600 max-w-2xl mx-auto">Book your table in seconds. For parties of 8+ or special occasions, please call us directly.</p>
                </div>
            </section>

            <div className="container-grid py-12 md:py-20 grid gap-10 md:grid-cols-2">
                <section className="rounded-2xl bg-white p-6 shadow-lg border border-neutral-100">
                    <ReservationForm />
                </section>

                <aside>
                    <div className="rounded-2xl bg-white p-6 shadow-lg border border-neutral-100">
                        <h2 className="text-2xl font-serif text-neutral-900">Reservation Policies</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                            <li>Parties of 8+ may require a credit card hold.</li>
                            <li>15-minute grace period. Please call if running late.</li>
                            <li>24-hour notice requested for cancellations or changes.</li>
                            <li>We accommodate dietary restrictions; include details in notes.</li>
                            <li>Special occasions: add your celebration in notes for surprises.</li>
                        </ul>
                        <div className="mt-6">
                            <a
                                href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Tandoori Grill & Bar - Sandpoint, 202 N 2nd Ave, Sandpoint, ID 83864, United States")}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center px-5 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all duration-300"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}


