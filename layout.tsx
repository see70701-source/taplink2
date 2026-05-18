import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'STUDIO NAME - Видеопродакшн',
  description: 'Профессиональное видеопроизводство и контент для вашего бренда',
  keywords: 'видео, продакшн, студия, контент, реклама',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-black">{children}</body>
    </html>
  )
}
