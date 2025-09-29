import { useEffect, useMemo, useState } from "react";
import type { Question } from "../types";

const QuestionsTable = ({ questions }: { questions: Question[] }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(questions.length / pageSize)), [questions, pageSize]);

  useEffect(() => {
    setPage(prev => (prev === 1 ? prev : 1));
  }, [questions]);

  useEffect(() => {
    setPage(prev => Math.min(prev, totalPages));
  }, [totalPages]);

  const pagedQuestions = useMemo(() => {
    const start = (page - 1) * pageSize;
    return questions.slice(start, start + pageSize);
  }, [questions, page, pageSize]);

  const goPrev = () => setPage(p => Math.max(1, p - 1));

  const goNext = () => setPage(p => Math.min(totalPages, p + 1));

  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setPage(1);
  };

  return (
        <div className="table-wrapper">
          <div className="table-controls">
            <div>
              <button onClick={goPrev} disabled={page === 1}>Prev</button>
              <span style={{ margin: "0 1rem" }}>Page {page} / {totalPages}</span>
              <button onClick={goNext} disabled={page === totalPages}>Next</button>
            </div>
            <div>
              <label htmlFor="page-size">Rows per page:</label>{" "}
              <select id="page-size" value={pageSize} onChange={onPageSizeChange}>
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Question/Statement</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
            {pagedQuestions.map((question, index) => (
              <tr key={`${question.question}-${index}`}>
                <td>{(page - 1) * pageSize + index + 1}</td>
                <td>{question.question}</td>
                <td>{question.correct_answer}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
  )
}

export default QuestionsTable;
