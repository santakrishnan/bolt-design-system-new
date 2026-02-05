import path from "path"
import { expect, test } from "vitest"

import { getPackageManager } from "../../src/utils/get-package-manager"

test("get package manager", async () => {
  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/project-yarn")
    )
  ).toBe("yarn")

  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/project-npm")
    )
  ).toBe("npm")

  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/project-pnpm")
    )
  ).toBe("pnpm")

  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/project-bun")
    )
  ).toBe("bun")

  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/project-bun-lock")
    )
  ).toBe("bun")

  expect(
    await getPackageManager(
      path.resolve(import.meta.dirname, "../fixtures/next")
    )
  ).toBe("pnpm")
})
