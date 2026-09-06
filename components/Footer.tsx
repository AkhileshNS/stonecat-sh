export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          Code snippets are licensed under{" "}
          <a
            href="https://opensource.org/licenses/MIT"
            rel="license noopener noreferrer"
            target="_blank"
          >
            MIT
          </a>
          . Blog content and media are licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="license noopener noreferrer"
            target="_blank"
          >
            CC BY 4.0
          </a>
          .
        </p>
        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}
