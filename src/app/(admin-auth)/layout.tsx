export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div className="flex app-container py-8 md:py-16 justify-center">
                <div className="rounded-lg md:px-10 md:py-10 md:shadow-lg md:border max-w-[500px] w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}