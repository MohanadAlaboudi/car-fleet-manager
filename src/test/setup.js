import "@testing-library/jest-dom";
import "urlpattern-polyfill";

import { TextEncoder, TextDecoder } from "util";

if (!globalThis.TextEncoder) globalThis.TextEncoder = TextEncoder;
if (!globalThis.TextDecoder) globalThis.TextDecoder = TextDecoder;

// Optional (some UI libs / router code paths may need it)
if (!globalThis.matchMedia) {
  globalThis.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}