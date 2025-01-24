export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <p>Ceci est un paragraphe</p>
                {children}
            </body>
        </html>
    );
}