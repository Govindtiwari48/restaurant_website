import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col">
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-neutral-200/50 shadow-sm">
                <div className="container-grid flex h-[var(--header-height)] items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image src="/logo.png" alt="Tandoori Grill & Bar" width={45} height={45} className="rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300" />
                        <span className="font-serif text-xl text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">Tandoori Grill & Bar</span>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                        <Link href="/menu" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            Menu
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/reservations" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            Reservations
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/gallery" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            Gallery
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/reviews" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            Reviews
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>
                    <Link href="/reservations" className="rounded-full bg-primary-500 hover:bg-primary-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Book a Table
                    </Link>
                </div>
            </header>

            <div className="flex-1">{children}</div>

            <footer className="mt-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                <div className="container-grid py-16">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand & Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <Image src="/logo.png" alt="Tandoori Grill & Bar" width={50} height={50} className="rounded-lg" />
                                <span className="font-serif text-2xl text-white">Tandoori Grill & Bar</span>
                            </div>
                            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                                Experience authentic Indian cuisine reimagined. We blend traditional flavors with contemporary techniques to deliver an elevated culinary experience in the heart of Sandpoint.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-serif text-xl mb-6 text-white">Quick Links</h3>
                            <nav className="space-y-3">
                                <Link href="/menu" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">Our Menu</Link>
                                <Link href="/reservations" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">Reservations</Link>
                                <Link href="/gallery" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">Gallery</Link>
                                <Link href="/about" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">About Us</Link>
                                <Link href="/reviews" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">Reviews</Link>
                                <Link href="/contact" className="block text-neutral-300 hover:text-primary-400 transition-colors duration-300">Contact</Link>
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="font-serif text-xl mb-6 text-white">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-neutral-300">Tandoori Grill & Bar - Sandpoint</p>
                                        <p className="text-neutral-300">202 N 2nd Ave, Sandpoint, ID 83864</p>
                                        <a
                                            href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Tandoori Grill & Bar - Sandpoint, 202 N 2nd Ave, Sandpoint, ID 83864, United States")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-400 hover:text-primary-300 underline text-sm"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary-400" />
                                    <a href="tel:+12085551234" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">
                                        (208) 555-1234
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary-400" />
                                    <a href="mailto:hello@tandoorigrillsandpoint.com" className="text-neutral-300 hover:text-primary-400 transition-colors duration-300">
                                        hello@tandoorigrillsandpoint.com
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <h4 className="font-semibold text-white mb-2">Hours</h4>
                                <div className="text-sm text-neutral-300 space-y-1">
                                    <div className="flex justify-between">
                                        <span>Mon-Thu</span>
                                        <span>11AM-9PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Fri-Sat</span>
                                        <span>11AM-10PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>11AM-8PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Tandoori Grill & Bar - Sandpoint. All rights reserved.
                        </p>
                        <nav className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">Privacy Policy</Link>
                            <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">Terms of Service</Link>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}


