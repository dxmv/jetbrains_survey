import type { PropertyCount, Question } from "../types";
import QuestionsTable from "./QuestionsTable";
import DifficultiesChart from "./charts/DifficultiesChart";

const TableAndDifficulty = ({ questions, difficulties }: { questions: Question[], difficulties: PropertyCount[] }) => {
  return (
    <div className="main-grid">
      <QuestionsTable questions={questions} />
      <DifficultiesChart data={difficulties} />
    </div>
  );
};

export default TableAndDifficulty;