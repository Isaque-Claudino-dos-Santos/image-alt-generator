import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function MainProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
