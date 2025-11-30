import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askDesignPatternTutor = async (
  currentPattern: string,
  userQuestion: string,
  history: Message[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are an expert Senior Software Engineer and Design Pattern Tutor. 
        Your goal is to explain the '${currentPattern}' design pattern in a fun, simple, and interactive way.
        Use analogies (like pizza delivery, weather stations, lego blocks) to explain complex concepts.
        Keep answers concise (under 3 paragraphs) unless asked for code.
        Format your response with clear headings or bullet points if necessary.
        If the user asks for code, provide clean, modern TypeScript examples.
        `,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response = await chat.sendMessage({ message: userQuestion });
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the pattern knowledge base right now.";
  }
};
