export default function DashboardLayout({
    children,
    users,
    revenue,
    notification,
}: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <div>
                    <div>{children}</div>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <div>{users}</div>
                            <div>{revenue}</div>
                        </div>
                        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}