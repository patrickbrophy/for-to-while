import generate from "@babel/generator";
import { parse } from "@babel/parser";
import { readFileSync, writeFileSync } from "fs";
import { forToWhile } from "./transforms";

const code = readFileSync("./test/test.js", "utf-8");

function transform(code: string) {
  // parse code and get ast
  const ast = parse(code);

  // ast transformations
  forToWhile(ast);

  // save output to file
  writeFileSync("./test/out.js", generate(ast).code);
}

transform(code);
