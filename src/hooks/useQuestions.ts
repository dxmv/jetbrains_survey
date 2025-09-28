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

                if (data.response_code !== 0) {
                  let message = 'An unknown error occurred';
                  switch (data.response_code) {
                    case 1:
                      message = 'No Results: The API does not have enough questions for your query.';
                      break;
                    case 2:
                      message = 'Invalid Parameter: The arguments passed in are not valid.';
                      break;
                    case 3:
                      message = 'Token Not Found: The session token does not exist.';
                      break;
                    case 4:
                      message = 'Token Empty: The session token has returned all possible questions.';
                      break;
                    case 5:
                      message = 'Rate Limit: Too many requests have occurred. Please wait 5 seconds.';
                      break;
                  }
                  throw new Error(message);
                }

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