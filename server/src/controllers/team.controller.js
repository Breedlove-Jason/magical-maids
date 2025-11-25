import TeamMember from "../models/TeamMember.js";

export async function getTeam(req, res) {
  const team = await TeamMember.find().sort({ yearsExperience: -1 }).lean();
  res.json(team);
}
