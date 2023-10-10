const  API_KEY = "sk-d)Cxf484BP6gKpIgdbfUT3BlbkFJUAYNpuMcXfZPj5b3Y3CA";
const  API_URL = "https://api.openai.com/v1/chat/completions";

const prompInput = document.getElementsById("prompInput");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn");
const resultText = document.getElementById("resultText");

generateBtn.addEventListener("click", generate);
prompInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    generate();
  }
});

const generate = async () => {
  try{
    const response = await fetch(API_URL,  {
      method: "POSt"
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo"
        messages: [{ role: "user", content: prompInput.value }],
      }),
    });

const data = await response.json()
console.log(data);

  }catch (error) {
    console.error("Error:, error");
  }
};
