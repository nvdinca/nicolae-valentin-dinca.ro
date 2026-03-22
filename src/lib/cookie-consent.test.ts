import { describe, expect, it } from "vitest";
import {
  COOKIE_CONSENT_VERSION,
  defaultConsent,
} from "./cookie-consent";

describe("cookie-consent", () => {
  it("defaultConsent păstrează versiunea și analytics", () => {
    const c = defaultConsent(true);
    expect(c.version).toBe(COOKIE_CONSENT_VERSION);
    expect(c.necessary).toBe(true);
    expect(c.analytics).toBe(true);
    expect(typeof c.updatedAt).toBe("string");
  });
});
