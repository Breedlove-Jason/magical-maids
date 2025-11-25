import Service from "../models/Service.js";

export async function getServices(req, res) {
  const services = await Service.find().sort({ popular: -1, basePrice: 1 });
  res.json(services);
}
