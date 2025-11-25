import { useEffect, useState } from "react";
import RatingSummary from "./RatingSummary.jsx";
import ReviewForm from "./ReviewForm.jsx";
import ReviewCard from "./ReviewCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { initialReviews } from "../data.js";
import { load, save } from "../utils/storage.js";
import { fetchReviews, createReview } from "../api.js";

const STORAGE_KEY = "mm_reviews_v1";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(initialReviews);

  useEffect(() => {
    const cached = load(STORAGE_KEY, null);
    if (cached && cached.length) {
      setReviews(cached);
    }
    fetchReviews()
      .then((serverReviews) => {
        if (serverReviews && serverReviews.length) {
          setReviews(serverReviews);
          save(STORAGE_KEY, serverReviews);
        }
      })
      .catch(() => {
        // if server fails, we just live with cached / initial
      });
  }, []);

  useEffect(() => {
    if (reviews.length) save(STORAGE_KEY, reviews);
  }, [reviews]);

  async function addReview(newReview) {
    setReviews((r) => [newReview, ...r]); // optimistic
    try {
      const saved = await createReview(newReview);
      setReviews((r) => [saved, ...r.filter((x) => x.id !== newReview.id)]);
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Reviews"
        title="Loved by Auburn homeowners"
        subtitle="Real feedback from Magical Maids clients."
      />
      
      <div className="mt-6 grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1">
          <RatingSummary reviews={reviews} />
        </div>
        <div className="lg:col-span-2">
          <ReviewForm onAdd={addReview} />
        </div>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
