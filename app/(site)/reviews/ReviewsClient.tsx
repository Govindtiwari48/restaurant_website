"use client";
import { useState } from "react";
import { Star, ThumbsUp, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ReviewsClient({ happyImages }: { happyImages: string[] }) {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const reviewCategories = [
        { key: "all", label: "All Reviews", count: 24 },
        { key: "food", label: "Food Quality", count: 18 },
        { key: "service", label: "Service", count: 15 },
        { key: "ambiance", label: "Ambiance", count: 12 },
        { key: "value", label: "Value", count: 9 },
    ];

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            date: "2 days ago",
            platform: "Google",
            overallRating: 5,
            ratings: { food: 5, service: 5, ambiance: 4, value: 5 },
            review:
                "Absolutely exceptional experience! The tandoori chicken was perfectly spiced and incredibly tender. The service was attentive without being intrusive, and the ambiance struck the perfect balance between elegant and comfortable. Will definitely be returning!",
            helpful: 12,
            verified: true,
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            date: "1 week ago",
            platform: "Yelp",
            overallRating: 5,
            ratings: { food: 5, service: 4, ambiance: 5, value: 4 },
            review:
                "Best Indian restaurant in Sandpoint, hands down! The lamb curry was phenomenal and the naan bread was fresh and warm. The cocktails at the bar were also top-notch. Great atmosphere for both date nights and family dinners.",
            helpful: 8,
            verified: true,
        },
        {
            id: 3,
            name: "Jennifer Chen",
            date: "2 weeks ago",
            platform: "Google",
            overallRating: 4,
            ratings: { food: 5, service: 4, ambiance: 4, value: 3 },
            review:
                "Fantastic food with authentic flavors! The paneer tikka was incredible and the biryani had the perfect balance of spices. Service was good, though it got a bit slow during peak hours. The interior design is beautiful and creates a lovely dining atmosphere.",
            helpful: 6,
            verified: true,
        },
        {
            id: 4,
            name: "David Thompson",
            date: "3 weeks ago",
            platform: "TripAdvisor",
            overallRating: 5,
            ratings: { food: 5, service: 5, ambiance: 5, value: 5 },
            review:
                "Outstanding in every way! We were visiting Sandpoint and stumbled upon this gem. The staff went above and beyond to accommodate our dietary restrictions, and every dish was bursting with flavor. The presentation was restaurant-quality and the prices were very reasonable.",
            helpful: 15,
            verified: true,
        },
    ];

    const averageRatings = {
        overall: 4.8,
        food: 4.9,
        service: 4.6,
        ambiance: 4.5,
        value: 4.4,
    };

    const handleGoogleReviewRedirect = () => {
        window.open(
            "https://www.google.com/maps/place/Tandoori+Grill%26+bar+-+Sandpoint/@48.2742374,-116.5492101,19z/data=!4m8!3m7!1s0x5363d7cda08fc2ff:0x7903749f7b172e10!8m2!3d48.2742374!4d-116.5485664!9m1!1b1!16s%2Fg%2F11x0rrd91n?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D",
            "_blank"
        );
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            {/* Header */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-neutral-900">
                        Guest <span className="text-primary-500">Reviews</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Hear what our valued guests have to say about their dining experience
                    </p>

                    {/* Overall Rating Summary */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200/50 shadow-lg">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                            <div className="lg:col-span-2 text-center">
                                <div className="text-6xl font-bold text-primary-500 mb-2">{averageRatings.overall}</div>
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-6 h-6 ${i < Math.floor(averageRatings.overall) ? 'fill-primary-400 text-primary-400' : 'text-neutral-300'}`} />
                                    ))}
                                </div>
                                <p className="text-neutral-600">Based on 24 reviews</p>
                            </div>

                            <div className="lg:col-span-3 space-y-3">
                                {Object.entries(averageRatings).filter(([key]) => key !== 'overall').map(([category, rating]) => (
                                    <div key={category} className="flex items-center gap-3">
                                        <span className="w-20 text-sm text-neutral-600 capitalize">{category}</span>
                                        <div className="flex-1 bg-neutral-200 rounded-full h-2">
                                            <div className="bg-primary-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(rating / 5) * 100}%` }} />
                                        </div>
                                        <span className="text-sm font-semibold text-neutral-700">{rating}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Categories */}
            <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-[72px] z-40 border-b border-neutral-200">
                <div className="container-grid">
                    <div className="flex flex-wrap justify-center gap-4">
                        {reviewCategories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setSelectedCategory(category.key)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.key
                                        ? 'bg-primary-500 text-white shadow-lg'
                                        : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
                                    }`}
                            >
                                {category.label} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews List + Happy Customers strip */}
            <section className="py-16 container-grid">
                {/* Happy customers image strip */}
                {happyImages.length > 0 && (
                    <div className="mb-8 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {happyImages.slice(0, 12).map((src, i) => (
                            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200">
                                <Image src={src} alt={`Happy Customer ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                )}
                <div className="space-y-8">
                    {reviews.map((review) => (
                        <article key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 overflow-hidden">
                            <div className="p-8">
                                {/* Review Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <span className="text-primary-600 font-bold text-lg">
                                                {review.name.split(' ').map((n) => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900">{review.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-neutral-500">
                                                <span>{review.date}</span>
                                                <span>•</span>
                                                <span>{review.platform}</span>
                                                {review.verified && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-green-600 font-medium">Verified</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < review.overallRating ? 'fill-primary-400 text-primary-400' : 'text-neutral-300'}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-neutral-500">{review.overallRating}.0 overall</span>
                                    </div>
                                </div>

                                {/* Detailed Ratings */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-neutral-50 rounded-xl">
                                    {Object.entries(review.ratings).map(([category, rating]) => (
                                        <div key={category} className="text-center">
                                            <div className="text-lg font-bold text-primary-500">{rating}.0</div>
                                            <div className="text-xs text-neutral-600 capitalize">{category}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-neutral-700 leading-relaxed mb-6">{review.review}</p>

                                {/* Review Actions */}
                                <div className="flex items-center justify-between pt-4 border-top border-neutral-100">
                                    <button className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors duration-300">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="text-sm">Helpful ({review.helpful})</span>
                                    </button>
                                    <a
                                        href={`https://${review.platform.toLowerCase()}.com`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors duration-300 text-sm"
                                    >
                                        View on {review.platform}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Write Review CTA */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">Share Your Experience</h2>
                    <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                        Had a great meal with us? We'd love to hear about your experience and share it with future guests.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleGoogleReviewRedirect}
                            className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <MapPin className="w-5 h-5 mr-2" />
                            Write Google Review
                        </button>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                        >
                            Contact Us Directly
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}


