import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import { Award, Star, Users, Trophy } from "lucide-react";
import fs from "fs";
import path from "path";

// Function to get images from a specific folder
function getImagesFromFolder(folderName: string): string[] {
    const imagesDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(imagesDir)) return [];

    const allFiles = fs.readdirSync(imagesDir);
    return allFiles
        .filter(file => /\.(webp|png|jpe?g|gif|avif)$/i.test(file))
        .map(file => `/images/${file}`);
}

export default function Home() {
    const featuredImages = getImagesFromFolder("").slice(0, 8);

    return (
        <main>
            <Hero />

            {/* Welcome + Achievements (1-screen section) */}
            <section className="bg-white min-h-[calc(100vh-var(--header-height))] flex items-center py-10 md:py-0">
                <div className="container-grid grid gap-10 lg:grid-cols-2 items-center">
                    {/* Welcome */}
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-serif mb-3 text-neutral-900">
                            Welcome to <span className="text-primary-500">Tandoori Grill & Bar</span>
                        </h2>
                        <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                            A modern yet authentic Indian dining destination in the heart of Sandpoint. We blend
                            traditional flavors with contemporary technique to deliver an elevated culinary
                            experience, complemented by warm hospitality and a refined ambiance.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">🔥</span>
                                </div>
                                <h3 className="text-sm md:text-base font-serif mb-0.5">Authentic Tandoor</h3>
                                <p className="text-neutral-600 text-xs md:text-sm">Clay oven cooking</p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">🌿</span>
                                </div>
                                <h3 className="text-sm md:text-base font-serif mb-0.5">Fresh Ingredients</h3>
                                <p className="text-neutral-600 text-xs md:text-sm">Locally sourced</p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">🍷</span>
                                </div>
                                <h3 className="text-sm md:text-base font-serif mb-0.5">Curated Bar</h3>
                                <p className="text-neutral-600 text-xs md:text-sm">Cocktails & wines</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white border border-neutral-200 p-5 text-center shadow-sm">
                            <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <p className="text-2xl font-bold text-neutral-900 leading-none">10+ yrs</p>
                            <p className="text-neutral-600 text-sm">culinary excellence</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-neutral-200 p-5 text-center shadow-sm">
                            <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                <Users className="w-5 h-5" />
                            </div>
                            <p className="text-2xl font-bold text-neutral-900 leading-none">50k+</p>
                            <p className="text-neutral-600 text-sm">happy guests</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-neutral-200 p-5 text-center shadow-sm">
                            <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                <Star className="w-5 h-5" />
                            </div>
                            <p className="text-2xl font-bold text-neutral-900 leading-none">4.8/5</p>
                            <p className="text-neutral-600 text-sm">avg rating</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-neutral-200 p-5 text-center shadow-sm">
                            <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                <Award className="w-5 h-5" />
                            </div>
                            <p className="text-2xl font-bold text-neutral-900 leading-none">Top Rated</p>
                            <p className="text-neutral-600 text-sm">locals & visitors</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Dishes Gallery (compact spacing) */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-neutral-50 to-white">
                <div className="container-grid">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-serif mb-4 text-neutral-900">
                            Our <span className="text-primary-500">Signature</span> Dishes
                        </h3>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Discover the artistry of authentic Indian cuisine, prepared with passion and presented with elegance
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {featuredImages.map((imageSrc, idx) => {
                            const dishNames = [
                                "Tandoori Special", "Butter Chicken", "Paneer Tikka", "Biryani Deluxe",
                                "Lamb Curry", "Naan Bread", "Samosa", "Sweet Treats"
                            ];
                            const descriptions = [
                                "Clay oven perfection", "Creamy tomato delight", "Grilled cottage cheese", "Aromatic rice dish",
                                "Tender spiced lamb", "Fresh baked bread", "Crispy appetizer", "Traditional desserts"
                            ];

                            return (
                                <article key={idx} className="group cursor-pointer">
                                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                                        <Image
                                            src={imageSrc}
                                            alt={dishNames[idx] || `Dish ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="text-lg font-serif mb-1">{dishNames[idx] || `Dish ${idx + 1}`}</h4>
                                            <p className="text-sm text-white/80">{descriptions[idx] || "Delicious preparation"}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/menu"
                            className="inline-flex items-center px-7 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md"
                        >
                            View Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews Section (compact) */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container-grid">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-serif mb-4 text-neutral-900">
                            What Our <span className="text-primary-500">Guests</span> Say
                        </h3>
                        <p className="text-xl text-neutral-600">Experience the love through their words</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                text: "Absolutely phenomenal! The tandoori dishes were perfectly spiced and the service was exceptional. Can't wait to return!",
                                author: "Sarah M.",
                                rating: 5,
                                date: "2 days ago"
                            },
                            {
                                text: "Best Indian restaurant in Sandpoint! The ambiance is elegant and the food is authentic. Highly recommend the lamb curry.",
                                author: "Mike R.",
                                rating: 5,
                                date: "1 week ago"
                            },
                            {
                                text: "Outstanding experience from start to finish. The cocktails at the bar perfectly complement the amazing food.",
                                author: "Jennifer L.",
                                rating: 5,
                                date: "2 weeks ago"
                            }
                        ].map((review, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex text-primary-400 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-neutral-700 mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-neutral-900">{review.author}</p>
                                        <p className="text-sm text-neutral-500">{review.date}</p>
                                    </div>
                                    <div className="text-xs text-neutral-400">Google Review</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/reviews"
                            className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                        >
                            Read More Reviews
                        </Link>
                    </div>
                </div>
            </section>

            {/* Location & Hours (compact) */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-neutral-50 to-white">
                <div className="container-grid">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-serif mb-4 text-neutral-900">
                            Visit <span className="text-primary-500">Our Restaurant</span>
                        </h3>
                        <p className="text-xl text-neutral-600">Find us in the heart of Sandpoint</p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h4 className="text-2xl font-serif mb-4 text-neutral-900 flex items-center">
                                    <span className="text-primary-500 mr-3">📍</span>
                                    Location
                                </h4>
                                <p className="text-lg text-neutral-700">Tandoori Grill & Bar - Sandpoint</p>
                                <p className="text-lg text-neutral-700">202 N 2nd Ave, Sandpoint, ID 83864</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h4 className="text-2xl font-serif mb-4 text-neutral-900 flex items-center">
                                    <span className="text-primary-500 mr-3">🕰️</span>
                                    Hours
                                </h4>
                                <div className="space-y-2 text-neutral-700">
                                    <div className="flex justify-between">
                                        <span>Monday - Thursday</span>
                                        <span>11:00 AM - 9:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Friday - Saturday</span>
                                        <span>11:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>11:00 AM - 8:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="flex-1 text-center px-6 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                                <a
                                    href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Tandoori Grill & Bar - Sandpoint, 202 N 2nd Ave, Sandpoint, ID 83864, United States")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 text-center px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.515572812686!2d-116.553!3d48.276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSandpoint!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="size-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


