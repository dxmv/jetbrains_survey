import { useState, useEffect } from "react";
import type { Question } from "../types";

const API_URL = 'https://opentdb.com/api.php';
const DEFAULT_AMOUNT = 50;

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);


  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${API_URL}?amount=${DEFAULT_AMOUNT}`);
      const data = await response.json();
      setQuestions(data.results);
    };
    fetchQuestions();
  }, []);
  return { questions, setQuestions };
};

export default useQuestions;