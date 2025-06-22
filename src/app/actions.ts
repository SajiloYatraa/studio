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

export async function sendContactMessageAction(data: {name: string, email: string, message: string}) {
  try {
    // In a real application, you would save this to your database.
    // For this demo, we'll just log it and simulate success.
    console.log('New contact message received:');
    console.log(data);
    // Note: This won't actually persist the message since mock-data.ts is read-only at runtime.
    // In a real app, you would connect to a database here.
    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } catch(error) {
    console.error("Error sending message:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to send message. ${errorMessage}` };
  }
}
