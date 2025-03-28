export default function ProductLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
            <div>
                <h2>Product Layout</h2>
            </div>
        </section>
    );
}