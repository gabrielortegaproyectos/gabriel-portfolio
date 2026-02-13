import { useMemo } from 'react';
import { resumeData } from '@/data/resume';
import { messages } from '@/i18n/messages';
import { useLanguage } from '@/context/language-context';

export const useLocalizedResume = () => {
  const { language } = useLanguage();

  return useMemo(() => {
    const localized = messages[language].resumeLocalized;

    return {
      ...resumeData,
      profile: {
        ...resumeData.profile,
        title: localized.profile.title,
        about: localized.profile.about,
        location: localized.profile.location,
      },
      experience: resumeData.experience.map((experience, index) => ({
        ...experience,
        role: localized.experience[index]?.role ?? experience.role,
        description: localized.experience[index]?.description ?? experience.description,
      })),
      education: resumeData.education.map((education, index) => ({
        ...education,
        degree: localized.education[index]?.degree ?? education.degree,
        thesis: localized.education[index]?.thesis ?? education.thesis,
      })),
    };
  }, [language]);
};
