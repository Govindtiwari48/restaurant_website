"use client";
import { useForm } from "react-hook-form";
import { Calendar, Clock3, Users, Send } from "lucide-react";

type ReservationFormValues = {
    date: string;
    time: string;
    guests: number;
    notes?: string;
};

export default function ReservationForm() {
    const { register, handleSubmit, formState } = useForm<ReservationFormValues>({
        defaultValues: { guests: 2 },
    });

    const onSubmit = (data: ReservationFormValues) => {
        alert(`Reservation requested: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-800 flex items-center gap-2"><Calendar className="w-5 h-5" /> Date</span>
                <input type="date" className="rounded-lg bg-white border border-neutral-300 px-3 py-3 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" {...register("date", { required: true })} />
            </label>
            <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-800 flex items-center gap-2"><Clock3 className="w-5 h-5" /> Time</span>
                <input type="time" className="rounded-lg bg-white border border-neutral-300 px-3 py-3 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" {...register("time", { required: true })} />
            </label>
            <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-800 flex items-center gap-2"><Users className="w-5 h-5" /> Guests</span>
                <input type="number" min={1} max={20} className="rounded-lg bg-white border border-neutral-300 px-3 py-3 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" {...register("guests", { required: true, valueAsNumber: true })} />
            </label>
            <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-700">Special Requests</span>
                <textarea rows={4} className="rounded-lg bg-white border border-neutral-300 px-3 py-3 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" placeholder="Allergies, celebrations, seating preferences" {...register("notes")} />
            </label>
            <button disabled={formState.isSubmitting} className="inline-flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 px-6 py-3 md:px-8 md:py-4 text-white text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                {formState.isSubmitting ? (
                    "Submitting..."
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Reservation
                    </>
                )}
            </button>
        </form>
    );
}


