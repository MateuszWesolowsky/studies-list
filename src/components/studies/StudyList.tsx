import { useEffect, useState } from "react";
import { Error } from "../common/Error";
import { Loading } from "../common/Loading";
import { FiltersSection } from "./FiltersSection";
import { Pagination } from "./Pagination";
import { StudyListContent } from "./StudyListContent";
import { StudyModal } from "./StudyModal";
import { filterStudies } from "../../utils/filterStudies";
import { useStudiesData } from "../../hooks/useStudiesData";
import type { Study } from "../../types/types";

export const StudyList = () => {
  const { data: studies, isLoading, isError } = useStudiesData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);
  const [page, setPage] = useState(1);
  const [codeFilter, setCodeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"price-asc" | "price-desc" | null>(
    null
  );

  const itemsPerPage = 3;
  const allCategories = [
    ...new Set(studies?.map((study) => study.category) || []),
  ];

  let filteredStudies = filterStudies(
    studies || [],
    codeFilter,
    categoryFilter,
    sortOrder
  );

  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const paginatedStudies = filteredStudies.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    setPage(1);
  }, [codeFilter, categoryFilter, sortOrder]);

  const handleStudyClick = (study: Study) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Lista badań</h2>

      <FiltersSection
        codeFilter={codeFilter}
        setCodeFilter={setCodeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        allCategories={allCategories}
      />

      <StudyListContent
        studies={paginatedStudies}
        onStudyClick={handleStudyClick}
      />

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {selectedStudy && (
        <StudyModal
          study={selectedStudy}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
