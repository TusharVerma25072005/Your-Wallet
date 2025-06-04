'use client'

import { SseClient } from "./sseClient";
import { Provider } from "jotai";

export function ClientProviders({
  children,
  token,
}: Readonly<{
  children: React.ReactNode;
  token: string;
}>) {
  return (
    <>
      <Provider>
        {children}
        {token && <SseClient token={token} />}
      </Provider>
    </>
  );
}