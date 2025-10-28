"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function subscribeToNewsletter(email: string) {
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  if (!supabase) {
    console.log("Newsletter subscription (Supabase not configured):", {
      email,
      timestamp: new Date().toISOString()
    });

    return {
      success: false,
      disabled: true,
      message: "Newsletter subscription is currently disabled. Please configure Supabase to enable this feature.",
    };
  }

  try {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already subscribed.",
        };
      }

      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Failed to subscribe. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Successfully subscribed to the newsletter!",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
