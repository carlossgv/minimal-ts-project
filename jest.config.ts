import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
