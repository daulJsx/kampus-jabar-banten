import { it, expect } from "vitest";
import type { Component } from "vue";
declare module "#components" {
  export const CompToTest: Component;
}
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CompToTest from "~/components/CompToTest.vue";

it("can mount some component", async () => {
  const component = await mountSuspended(CompToTest);
  expect(component.text()).toMatchInlineSnapshot(
    '"This is an auto-imported component"'
  );
});
