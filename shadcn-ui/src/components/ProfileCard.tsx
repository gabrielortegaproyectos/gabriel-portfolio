import { Mail, MapPin, Phone } from 'lucide-react';
import { useLocalizedResume } from '@/hooks/use-localized-resume';

export const ProfileCard = () => {
  const localizedResume = useLocalizedResume();

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-4 flex items-center gap-4">
        <img
          src={localizedResume.profile.avatar}
          alt={localizedResume.profile.name}
          className="h-20 w-20 rounded-full border-2 border-blue-500 object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{localizedResume.profile.name}</h2>
          <p className="max-w-[200px] text-sm text-zinc-600 dark:text-zinc-400">{localizedResume.profile.title}</p>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{localizedResume.profile.about}</p>

      <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-blue-500" />
          <a href={`mailto:${localizedResume.profile.email}`} className="transition-colors hover:text-blue-400">
            {localizedResume.profile.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-blue-500" />
          <span>{localizedResume.profile.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>{localizedResume.profile.location}</span>
        </div>
      </div>
    </div>
  );
};
