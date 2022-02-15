import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";

export function forToWhile(ast: parser.ParseResult<t.File>) {
  traverse(ast, {
    ForStatement(path) {
      // extract out parts of the for loop
      const init: t.VariableDeclaration = path.node
        ?.init as t.VariableDeclaration;
      const test: t.Expression = path.node?.test as t.Expression;
      const update: t.Expression = path.node?.update as t.Expression;
      const forBody: t.BlockStatement = path.node?.body as t.BlockStatement;

      // take for loop body and add update expression to it
      const whileBody: t.BlockStatement = t.blockStatement([
        ...forBody.body,
        t.expressionStatement(update),
      ]);

      // replace for loop with while loop
      path.replaceWith(t.whileStatement(test, whileBody));
      // insert the init statement before the while loop
      path.insertBefore(init);
    },
  });
}
