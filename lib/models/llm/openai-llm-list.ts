import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 1/25/24) -----------------------------

const GPT4oMini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o Mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

const GPT4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5,
    outputCost: 15
  }
}

// GPT-4 Turbo (UPDATED 1/25/24)
const GPT4Turbo: LLM = {
  modelId: "gpt-4-turbo-preview",
  modelName: "GPT-4 Turbo",
  provider: "openai",
  hostedId: "gpt-4-turbo-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10,
    outputCost: 30
  }
}

// GPT-4 Vision (UPDATED 12/18/23)
const GPT4Vision: LLM = {
  modelId: "gpt-4-vision-preview",
  modelName: "GPT-4 Vision",
  provider: "openai",
  hostedId: "gpt-4-vision-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10
  }
}

// O1 PREVIEW AND O1-MINI TO BE FIXED

// O1 Preview (based on GPT-4o parameters)
// const O1Preview: LLM = {
//   modelId: "o1-preview",
//   modelName: "O1 Preview",
//   provider: "openai",
//   hostedId: "o1-preview",
//   platformLink: OPENAI_PLATORM_LINK,
//   imageInput: true,
//   pricing: {
//     currency: "USD",
//     unit: "1M tokens",
//     inputCost: 5,
//     outputCost: 15
//   },
//   maxTokens: 2048 // Set a default value for max_tokens
// }

// // O1 Mini (based on GPT-4o parameters)
// const O1Mini: LLM = {
//   modelId: "o1-mini",
//   modelName: "O1 Mini",
//   provider: "openai",
//   hostedId: "o1-mini",
//   platformLink: OPENAI_PLATORM_LINK,
//   imageInput: true,
//   pricing: {
//     currency: "USD",
//     unit: "1M tokens",
//     inputCost: 5,
//     outputCost: 15
//   },
//   maxTokens: 2048 // Set a default value for max_tokens
// }

export const OPENAI_LLM_LIST: LLM[] = [
  GPT4oMini,
  GPT4o,
  GPT4Turbo,
  GPT4Vision,
  // O1Preview,
  // O1Mini,
]
