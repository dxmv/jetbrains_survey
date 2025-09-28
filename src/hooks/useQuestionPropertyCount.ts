import { useMemo } from "react";
import type { Question, PropertyCount } from "../types";

const useQuestionPropertyCount = (questions: Question[], property: keyof Question): PropertyCount[] => {
  return useMemo(() => {
    // use map beacuse of O(1) lookups and updates
    const propertyMap = new Map<string, number>();
    
    questions.forEach(question => {
      const value = question[property];
      if (typeof value === 'string') {
        propertyMap.set(value, (propertyMap.get(value) || 0) + 1);
      }
    });
    
    // convert map to array
    return Array.from(propertyMap.entries())
      .map(([name, count]) => ({ name, count }));
  }, [questions, property]);
};

export default useQuestionPropertyCount;
