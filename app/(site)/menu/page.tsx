import Image from "next/image";
import { MenuData } from "./menuData";

export const metadata = {
    title: "Menu",
    description: "Explore our appetizers, tandoori specials, curries, biryani, breads, and desserts.",
};

export default function MenuPage() {
    const categories = [
        { key: "appetizers", label: "Appetizers", icon: "🥗" },
        { key: "tandoori", label: "Tandoori Specials", icon: "🔥" },
        { key: "curries", label: "Curries", icon: "🍛" },
        { key: "biryani", label: "Biryani", icon: "🍚" },
        { key: "breads", label: "Breads", icon: "🫓" },
        { key: "desserts", label: "Desserts", icon: "🍮" },
        { key: "beverages", label: "Beverages", icon: "🍹" },
    ];

    const dietaryFilters = [
        { key: "all", label: "All Items", icon: "🍽️" },
        { key: "vegetarian", label: "Vegetarian", icon: "🌱" },
        { key: "vegan", label: "Vegan", icon: "🥬" },
        { key: "gluten-free", label: "Gluten Free", icon: "🌾" },
        { key: "spicy", label: "Spicy", icon: "🌶️" },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            {/* Header */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-neutral-900">
                        Our <span className="text-primary-500">Menu</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Thoughtfully curated dishes that celebrate the diversity and richness of Indian cuisine,
                        prepared with authentic spices and modern presentation
                    </p>

                    {/* Quick Actions */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="/menu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF Menu
                        </a>
                        <a
                            href="/reservations"
                            className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                        >
                            Reserve Table
                        </a>
                    </div>

                    {/* Dietary Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {dietaryFilters.map((filter) => (
                            <button
                                key={filter.key}
                                className="inline-flex items-center px-4 py-2 bg-white/70 hover:bg-white border border-primary-200 hover:border-primary-300 text-neutral-700 hover:text-primary-600 rounded-full transition-all duration-300 backdrop-blur-sm"
                            >
                                <span className="mr-2">{filter.icon}</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-[72px] z-40 border-b border-neutral-200">
                <div className="container-grid">
                    <nav className="flex flex-wrap justify-center gap-6">
                        {categories.map((category) => (
                            <a
                                key={category.key}
                                href={`#${category.key}`}
                                className="group flex items-center px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300"
                            >
                                <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </span>
                                {category.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Menu Sections */}
            <div className="container-grid py-16">
                {Object.entries(MenuData).map(([categoryKey, items]) => {
                    const category = categories.find(c => c.key === categoryKey);
                    if (!category || !items.length) return null;

                    return (
                        <section key={categoryKey} id={categoryKey} className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-neutral-900 flex items-center justify-center">
                                    <span className="mr-4 text-5xl">{category.icon}</span>
                                    {category.label}
                                </h2>
                                <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                {items.map((item, idx) => (
                                    <article
                                        key={idx}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-primary-200"
                                    >
                                        {item.image && (
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <span className="text-2xl font-bold text-primary-500 ml-4">
                                                    ${item.price}
                                                </span>
                                            </div>

                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {item.tags?.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}

                                                {item.spiceLevel && (
                                                    <span className="px-3 py-1 bg-secondary-50 text-secondary-700 text-sm rounded-full border border-secondary-200 flex items-center">
                                                        {"🌶️".repeat(item.spiceLevel)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">
                        Ready to Experience Our Cuisine?
                    </h2>
                    <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                        Book your table now and embark on a culinary journey through the flavors of India
                    </p>
                    <a
                        href="/reservations"
                        className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                    >
                        Reserve Your Table
                        <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    );
}