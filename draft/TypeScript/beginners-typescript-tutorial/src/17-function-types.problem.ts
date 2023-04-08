import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: (val: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
