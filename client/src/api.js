const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

async function handle(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/services`);
  return handle(res);
}

export async function fetchReviews() {
  const res = await fetch(`${API_BASE}/reviews`);
  return handle(res);
}

export async function createReview(review) {
  const res = await fetch(`${API_BASE}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review)
  });
  return handle(res);
}

export async function createBooking(booking) {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking)
  });
  return handle(res);
}
