import fs from "fs-extra"
import path from "path"
import { rimraf } from "rimraf"

export const TEMP_DIR = path.join(import.meta.dirname, "../../temp")

export default async function setup() {
  await fs.ensureDir(TEMP_DIR)

  return async () => {
    try {
      await rimraf(TEMP_DIR)
    } catch (error) {
      console.error("Failed to clean up temp directory:", error)
    }
  }
}
