export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>NAVBAR</h1>
      {children}
    </section>
  );
}
