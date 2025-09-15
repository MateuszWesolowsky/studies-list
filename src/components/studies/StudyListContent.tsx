import type { Study } from "../../types/types";
import { StudyItem } from "./StudyItem";

interface StudyListContentProps {
  studies: Study[];
  onStudyClick: (study: Study) => void;
}

export const StudyListContent = ({
  studies,
  onStudyClick,
}: StudyListContentProps) => {
  if (studies.length === 0) {
    return (
      <div className="text-center py-12">
        <p>Nie znaleziono badań spełniających kryteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {studies.map((study) => (
        <StudyItem
          key={study.id}
          study={study}
          onClick={() => onStudyClick(study)}
        />
      ))}
    </div>
  );
};
