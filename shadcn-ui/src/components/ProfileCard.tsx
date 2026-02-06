import { resumeData } from "@/data/resume";
import { Mail, MapPin, Phone } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={resumeData.profile.avatar}
          alt={resumeData.profile.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-bold text-zinc-100">{resumeData.profile.name}</h2>
          <p className="text-sm text-zinc-400 max-w-[200px]">{resumeData.profile.title}</p>
        </div>
      </div>
      
      <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
        {resumeData.profile.about}
      </p>

      <div className="space-y-2 text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500" />
          <a href={`mailto:${resumeData.profile.email}`} className="hover:text-blue-400 transition-colors">
            {resumeData.profile.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-500" />
          <span>{resumeData.profile.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>{resumeData.profile.location}</span>
        </div>
      </div>
    </div>
  );
};