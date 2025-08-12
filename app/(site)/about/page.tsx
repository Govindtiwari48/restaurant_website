import Image from "next/image";

export const metadata = {
    title: "About Us",
    description: "Our story, the chef, and our commitment to authentic ingredients and techniques.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-neutral-900">Our Story</h1>
                    <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
                        We marry the authenticity of traditional Indian flavors with the elegance of contemporary dining.
                    </p>
                </div>
            </section>

            <section className="container-grid py-16 grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Meet the Chef</h2>
                    <p className="mt-4 text-neutral-700 leading-relaxed">
                        Chef Arjun Singh brings culinary excellence honed across renowned kitchens in India and the
                        United States. His refined approach blends classic recipes with modern technique, focusing on
                        balance, depth, and vibrant presentation. Every plate tells a story of heritage and innovation.
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-xl shadow border border-neutral-100">
                            <h3 className="font-serif text-xl text-neutral-900">Quality Ingredients</h3>
                            <p className="text-neutral-700 mt-1">Fresh produce, premium spices, and sustainable proteins.</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow border border-neutral-100">
                            <h3 className="font-serif text-xl text-neutral-900">Traditional Methods</h3>
                            <p className="text-neutral-700 mt-1">Tandoor-fired specialties and slow-simmered curries.</p>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop"
                        alt="Head Chef"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
        </main>
    );
}


