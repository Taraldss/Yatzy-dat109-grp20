import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import type User from "~/types/User";
import { UserContext } from "~/context/context";
import { useState } from "react";
import styles from "~/src/styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState<User>({});
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Outlet />
        </UserContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
