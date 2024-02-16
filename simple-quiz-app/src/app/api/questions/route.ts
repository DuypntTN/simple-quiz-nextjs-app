const  data = [
  {
    id: 1,
    question: "How can you accumulate and use membership points with vani?",
    answers: ["Hand over membership card", "Tell your Phone number", " Show Vani Barcode on the Home screen"],
    correctAnswer: 2,
    hint: " *To earn/use membership points with vani benefits, scan the Vani Barcode",
    multipleChoice: false,
  },
  {
    id: 2,
    question: "What is an additional reward when you earn membership points with vani?",
    answers: ["Vani Point", "Vani Coin", "Vani Money"],
    correctAnswer: 1,
    hint: "*Earn/use membership points with vani. Open Ice Cream. Get Vani Coins",
    multipleChoice: false,
  },
  {
    id: 3,
    question: "There is another way to get Vani Coin. What is it?",
    answers: ["Leave a 1:1 inquiry", "Run the vani app every day", " Play Shake"],
    correctAnswer: 2,
    hint: "*You can get additional Vani Coins when you play Shake once a day",
    multipleChoice: false,
  },
  {
    id:4,
    question: "How can you use Vani Coin? Please choose 2 answers.",
    answers: ["Exchange to Voucher", "Buy a product at stores", " Exchange to membership points"],
    correctAnswer: [0, 2],
    hint: "*Your Vani Coins can be exchanged for other membership points or Vouchers",
    multipleChoice: true,
  }
]

export interface Question  {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number | number[];
  hint: string;
  multipleChoice: boolean;
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
