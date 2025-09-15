import { useQuery } from "@tanstack/react-query";
import type { Study } from "../types/types";
import { fetchStudies } from "../api/studiesApi";

export const useStudiesData = () => {
  return useQuery<Study[], Error>({
    queryKey: ["studies"],
    queryFn: fetchStudies,
    staleTime: 1000 * 60 * 5,
  });
};
