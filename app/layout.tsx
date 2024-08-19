import Login from "../components/login";
import Logout from "../components/logout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Login />
          <Logout />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/static">Static</a>
            </li>
            <li>
              <a href="/api/draft">Enable Draft Mode</a>
            </li>
            <li>
              <a href="/api/disable-draft">Disable Draft Mode</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
