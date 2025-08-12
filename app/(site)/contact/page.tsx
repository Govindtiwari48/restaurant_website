"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

type ContactForm = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    inquiryType: string;
};

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

    const inquiryTypes = [
        { value: "reservation", label: "Reservation Inquiry" },
        { value: "event", label: "Private Event" },
        { value: "catering", label: "Catering Services" },
        { value: "feedback", label: "Feedback" },
        { value: "general", label: "General Question" },
        { value: "other", label: "Other" }
    ];

    const onSubmit = async (data: ContactForm) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setSubmitted(true);
        setIsSubmitting(false);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center">
                <div className="container-grid">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                            <MessageCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-neutral-900">
                            Thank You!
                        </h1>
                        <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                            We've received your message and will get back to you within 24 hours.
                            We appreciate you reaching out to Tandoori Grill & Bar.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="/"
                                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Return Home
                            </a>
                            <a
                                href="/menu"
                                className="px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                            >
                                View Menu
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            {/* Header */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="container-grid text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-neutral-900">
                        Contact <span className="text-primary-500">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        We'd love to hear from you. Reach out with any questions, feedback, or special requests.
                    </p>
                </div>
            </section>

            <div className="container-grid py-20">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-neutral-900">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                Whether you're planning a special celebration, have dietary questions, or simply want to
                                share your experience, we're here to help make your visit unforgettable.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-neutral-900 mb-2">Location</h3>
                                        <p className="text-neutral-600">Tandoori Grill & Bar - Sandpoint</p>
                                        <p className="text-neutral-600">202 N 2nd Ave, Sandpoint, ID 83864</p>
                                        <a
                                            href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Tandoori Grill & Bar - Sandpoint, 202 N 2nd Ave, Sandpoint, ID 83864, United States")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-2 font-medium"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-neutral-900 mb-2">Phone</h3>
                                        <a
                                            href="tel:+12085551234"
                                            className="text-lg text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                                        >
                                            (208) 555-1234
                                        </a>
                                        <p className="text-neutral-500 text-sm mt-1">Available during business hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-neutral-900 mb-2">Email</h3>
                                        <a
                                            href="mailto:hello@tandoorigrillsandpoint.com"
                                            className="text-lg text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                                        >
                                            hello@tandoorigrillsandpoint.com
                                        </a>
                                        <p className="text-neutral-500 text-sm mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-neutral-900 mb-3">Hours</h3>
                                        <div className="space-y-2 text-neutral-600">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8">
                        <h2 className="text-3xl font-serif mb-6 text-neutral-900">Send us a Message</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="(208) 555-0123"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Inquiry Type *
                                    </label>
                                    <select
                                        {...register("inquiryType", { required: "Please select an inquiry type" })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">Select inquiry type</option>
                                        {inquiryTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    {...register("subject", { required: "Subject is required" })}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Brief subject of your message"
                                />
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-20">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-neutral-900">
                        Find Us in Sandpoint
                    </h2>
                    <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
                        <iframe
                            title="Tandoori Grill & Bar Location"
                            src="https://www.google.com/maps?q=Tandoori%20Grill%20%26%20Bar%20-%20Sandpoint%2C%20202%20N%202nd%20Ave%2C%20Sandpoint%2C%20ID%2083864%2C%20United%20States&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="size-full"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}