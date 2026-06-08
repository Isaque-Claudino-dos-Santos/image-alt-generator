import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import CssBaseline from '@mui/material/CssBaseline'
import AppReactQueryProvider from './AppReactQueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function AppProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <AppReactQueryProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                <ReactQueryDevtools />
            </ThemeProvider>
        </AppReactQueryProvider>
    )
}

