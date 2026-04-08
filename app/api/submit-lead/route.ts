import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GHL_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GHL_WEBHOOK_URL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Build the payload for GoHighLevel
    // GHL webhooks accept standard contact fields
    const ghlPayload = {
      // Standard GHL contact fields
      firstName: name.split(" ")[0] ?? name,
      lastName: name.split(" ").slice(1).join(" ") ?? "",
      email,
      phone,
      // Custom field — map this to a GHL custom field in your pipeline
      // You may need to use the GHL custom field key instead of "projectType"
      // Check GHL > Settings > Custom Fields for the exact key
      customField: {
        project_type: projectType,
      },
      // Tags help with pipeline routing in GHL
      tags: ["siteflow-lead", `project-${projectType.toLowerCase().replace(/\//g, "-").replace(/\s+/g, "-")}`],
      // Source tracking
      source: "SiteFlow Network Landing Page",
    };

    const ghlResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error("GHL webhook error:", ghlResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit lead. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
