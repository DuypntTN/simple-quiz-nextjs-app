const  data = [
  {
    id: 1,
    question: "What is your name?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: 0,
    hint: "Hint 1",
  },
  {
    id: 2,
    question: "What is your age?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: 1,
    hint: "Hint 2",
  }
]

type Question = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  hint: string;
}

type ResponseData = {
  message: string;
  data ?: Question[];
  total ?: number;
};

export function GET(_request: Request): Response {
  const responseData: ResponseData = {
    message: "Success",
    data: data,
    total: data.length,
  };
  return new Response(JSON.stringify(responseData), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}
