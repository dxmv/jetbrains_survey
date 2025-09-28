import { useState, useEffect } from "react";
import type { Question } from "../types";

const API_URL = 'https://opentdb.com/api.php';
const DEFAULT_AMOUNT = 50;

// decode the question and category, to remove html codes
const normalizeQuestion = (question: Question): Question => {
  return {
    ...question,
    question: decodeURIComponent(question.question),
    category: decodeURIComponent(question.category),
  };
};

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const fetchQuestions = async () => {
        try {
                const response = await fetch(`${API_URL}?amount=${DEFAULT_AMOUNT}&encode=url3986`);
                const data = await response.json();
                const normalizedQuestions = data.results.map(normalizeQuestion);
                setQuestions(normalizedQuestions);
        } catch (error) {
                setError(true);
                setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
        }
        finally {
                setLoading(false);
        }
    };
    fetchQuestions();
  }, []);
  return { questions, setQuestions, loading, error, errorMessage };
};

export default useQuestions;