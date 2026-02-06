import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PublicationsCard } from "@/components/PublicationsCard";

export default function Blog() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">Blog & Publications</h2>
        <p className="text-zinc-400">Academic research, articles, and thoughts on ML and Education.</p>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {/* Publications List */}
        <BentoGridItem
          className="md:col-span-3 md:row-span-1 min-h-[400px]"
          header={<PublicationsCard />}
        />
      </BentoGrid>
    </div>
  );
}