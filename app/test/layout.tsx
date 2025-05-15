export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
                    rel="stylesheet"
                />
                <style>{`
                    html, body {
                        font-family: 'Bricolage Grotesque', sans-serif;
                    }
                `}</style>
            </head>
            <body>
                <div className="min-h-screen bg-background">
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}