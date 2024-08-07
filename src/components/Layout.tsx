type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/main.min.css" rel="stylesheet" />
      </head>
      <body>
        <div className="p-4">{children}</div>
      </body>
    </html>
  )
}
