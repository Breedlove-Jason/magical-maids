export default function TeamCard({ member }) {
  return (
    <div className="rounded-3xl bg-white border shadow-soft p-5 flex gap-4">
      <img src={member.imageUrl} alt={member.name} className="h-20 w-20 rounded-2xl object-cover" />
      <div>
        <div className="font-extrabold text-slate-900 font-poppins">{member.name}</div>
        <div className="text-xs text-slate-500">{member.role}</div>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{member.bio}</p>
        <div className="mt-2 text-xs text-slate-500">
          {member.yearsExperience}+ years • {member.specialties.join(", ")}
        </div>
      </div>
    </div>
  );
}
