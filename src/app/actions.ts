"use server";

import { enhanceReview } from "@/ai/flows/review-enhancement";
import type { EnhanceReviewInput } from "@/ai/flows/review-enhancement";

export async function enhanceReviewAction(input: EnhanceReviewInput) {
  try {
    const result = await enhanceReview(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error enhancing review:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to enhance review. ${errorMessage}` };
  }
}
