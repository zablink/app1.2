import { RemixServer } from "react-router";
import isbot from "isbot";
import { PassThrough } from "node:stream";
import type { ServerBuild } from "react-router";
import type { Response as NodeResponse } from "@remix-run/node";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: ServerBuild
) {
  const callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";

  return new Promise((resolve, reject) => {
    const body = new PassThrough();
    const stream = (
      <RemixServer context={remixContext} url={request.url} />
    );

    const { pipe, abort } = (require("react-dom/server") as any).renderToPipeableStream(stream, {
      [callbackName]() {
        responseHeaders.set("Content-Type", "text/html");
        resolve(
          new Response(body as any, {
            status: responseStatusCode,
            headers: responseHeaders,
          }) as unknown as NodeResponse
        );
        pipe(body);
      },
      onShellError(error: any) {
        reject(error);
      },
      onError(error: any) {
        console.error(error);
      },
    });
    setTimeout(abort, 30000);
  });
}
