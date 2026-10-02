export type QuizQuestion = {
  id: number;
  category: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
};
