import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
    weight: ['400', '500', '700'], // 700 <- 600
    style: ['normal', 'italic'],
    subsets: ['latin']
})

export const symbols = localFont({
    src: '../../public/fonts/MaterialSymbolsOutlined.woff2',
    variable: '--symbols'
})
