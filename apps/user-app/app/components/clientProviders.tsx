'use client'
import { Provider } from "jotai";
import { SseClient } from "./sseClient";

export default function ClientProviders({
  children,
  token
}: Readonly<{
  children: React.ReactNode;
  token: string;
}>
) {
  return (
    <>
      <Provider>
        {token && <SseClient token={token} />}
        {children}
      </Provider>
    </>
  );
}