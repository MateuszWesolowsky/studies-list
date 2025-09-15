import type { Study } from "../types/types";
import api from "./api";

export const fetchStudies = async (): Promise<Study[]> => {
  const response = await api.get<Study[]>(`/studies`);
  return response.data;
};
