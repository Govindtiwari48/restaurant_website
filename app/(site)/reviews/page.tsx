import ReviewsClient from "./ReviewsClient";
import fs from "fs";
import path from "path";

export default function ReviewsPage() {
    const happyImages = readHappyCustomerImages();
    return <ReviewsClient happyImages={happyImages} />;
}

function readHappyCustomerImages(): string[] {
    const dir = path.join(process.cwd(), "public", "happy_customers");
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
        .map((f) => `/happy_customers/${f}`);
}