export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <div className="text-xs text-muted">
        <span className="text-terminal-dark">&gt;</span> Built by Manasva Katyal
        &nbsp;|&nbsp; © {new Date().getFullYear()}
        &nbsp;|&nbsp; All systems nominal
      </div>
    </footer>
  );
}
