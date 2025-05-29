import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { AllData, AIResult } from '@/types';

import dotenv from 'dotenv';
dotenv.config();

function extractJsonFromText(text: string): AIResult | null {
  const jsonStart = text.indexOf('{');
  if (jsonStart === -1) {
    console.warn('⚠️ JSON is not found in the ai response, no such symbol `{`).');
    return null;
  }

  for (let i = text.length; i > jsonStart; i--) {
    const snippet = text.substring(jsonStart, i).trim();
    try {
      return JSON.parse(snippet);
    } catch {
      // Ignore JSON parsing errors and try shorter snippets
      continue;
    }
  }

  console.warn('⚠️ Failed to parse JSON from AI response.');
  return null;
}

/**
 * Generate CV summary and project highlights using AI
 * @param data - Raw structured data from data.json
 * @returns summary and highlights
 */
export async function generateSummaryAndHighlights(data: AllData): Promise<AIResult> {
  const prompt = `
    You are a senior technical recruiter assistant. Based on the user's career data below:

    1. Generate a short professional summary (4-5 sentences) suitable for a CV. 
      Make accent on Salesforce Commerce Cloud (SFCC) expertise, fullstack development skills, and overall experience in e-commerce solutions. 
      Avoid generic phrases and focus on specific skills and technologies. 
      The summary should be written from the first-person perspective, as if the user is writing it themselves.
    2. For each project the user worked on, generate 2-3 key bullet points. Focus on:
      - technologies used,
      - business value delivered,
      - complexity, team role, or scale of impact.
      - avoid generic phrases and focus on specific achievements.
      - avoid using the name of the project, just describe the highlights.
      - avoid using the word "I" or "my" in the highlights, write them in a neutral tone.


    Return the result in **JSON format** strictly like this and don't include any additional text or explanations:

    {
      "summary": "string",
      "experience": [
        {
          "id": "string",
          "projects": [
            { 
              "id": "string",
              "highlights": "[string]"
            }
          ]
        }
      ]
    }

    User data:
    ${JSON.stringify(data, null, 2)}
    `;

  try {
    const {text} = await generateText({
      model: openai('gpt-4o'),
      prompt,
      temperature: 0.7,
      maxTokens: 1500,
    });

    

    const json = extractJsonFromText(text);
    console.log('✅ AI generation successful:', text);
    
    if (!json) {
      return {
        summary: '',
        experience: [
          {
            id: '',
            projects: []
          }
        ]
      }
    }
    
    return json;
  } catch (error) {
    console.error('❌ AI generation failed:', error);
    return {
      summary: '',
      experience: [
        {
          id: '',
          projects: []
        }
      ]
    }
  }
}
