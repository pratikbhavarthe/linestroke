import { describe, expect, it } from "vitest";

import { contactSchema, flattenFieldErrors, isHoneypotFilled, newsletterSchema } from "@/lib/forms";

describe("isHoneypotFilled", () => {
  it.each([
    [{ website: "bot.example" }, true],
    [{ website: "" }, false],
    [{}, false],
    [{ website: 1 }, false],
    [null, false],
    ["website", false],
  ])("detects %j as %s", (body, expected) => expect(isHoneypotFilled(body)).toBe(expected));
});

const validContact = {
  name: "Priya Sharma",
  email: "priya@example.com",
  phone: "+919876543210",
  company: "Example Mobility",
  purpose: "A production-ready mobility program.",
  services: ["Industrial Design"],
  referralSource: "Google",
  website: "",
};

describe("contactSchema", () => {
  it("accepts a complete valid inquiry", () => {
    expect(contactSchema.safeParse(validContact).success).toBe(true);
  });

  it.each(["+911234567890", "+91987654321", "+14155552671", "9876543210"])(
    "rejects unsupported phone value %s",
    (phone) => expect(contactSchema.safeParse({ ...validContact, phone }).success).toBe(false),
  );

  it("requires a company name", () => {
    expect(contactSchema.safeParse({ ...validContact, company: "" }).success).toBe(false);
  });

  it("rejects honeypot submissions", () => {
    expect(contactSchema.safeParse({ ...validContact, website: "bot.example" }).success).toBe(false);
  });

  it("returns one accessible message per invalid field", () => {
    const result = contactSchema.safeParse({ ...validContact, name: "", company: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(flattenFieldErrors(result.error)).toMatchObject({
        name: "Enter your full name.",
        company: "Enter your company name.",
      });
    }
  });
});

describe("newsletterSchema", () => {
  it.each(["hello@example.com", "person@agency.design", "team@company.co.in"])(
    "accepts valid address %s",
    (email) => expect(newsletterSchema.safeParse({ email, website: "" }).success).toBe(true),
  );

  it.each(["hello", "@example.com", "hello@", "hello @example.com"])(
    "rejects invalid address %s",
    (email) => expect(newsletterSchema.safeParse({ email, website: "" }).success).toBe(false),
  );

  it("collapses repeated validation issues to one email message", () => {
    const result = newsletterSchema.safeParse({ email: "", website: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(flattenFieldErrors(result.error).email).toBe("Enter your email address.");
    }
  });
});
