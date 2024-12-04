import { it, expect } from "vitest";
import type { Component } from "vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CompToTest from "~/components/CompToTest.vue";

declare module "#components" {
  export const ComponentToTest: Component;
}

it("can mount some component", async () => {
  const component = await mountSuspended(CompToTest);
  expect(component.text()).toMatchInlineSnapshot(
    '"This is an auto-imported component"'
  );
});

it("can render some component", async () => {
  await renderSuspended(CompToTest);
  expect(screen.getByText("This is an auto-imported component")).toBeDefined();
});
