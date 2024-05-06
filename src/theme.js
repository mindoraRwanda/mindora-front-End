import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'



export const ColorTokens = (mode) =>({
    ...(mode ===  'dark' ?
    {

        primary: {
         500: "#0082DE"
    },
        
        secondary: {
            500: "#00337C"
        },
        black: {
            500: "#000000"
        },
        white: {
            500: "#FFFFFF"
        }
        
    }: {
        primary: {
            400: "#00337C"
           
         },
         secondary: {
            400: "#0082DE"
         },
         black: {
            400: "#FFFFFF"
       
         },
         white: {
            400: "#000000"
         }
    }

    ) 
});

export const themeSetting = (mode) =>{
    const colors = ColorTokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'?
            {
                primary: {
                    main: colors.primary[500]
                 },
                secondary: {
                     main: colors.secondary[500]
                 },
                 black: {
                     main: colors.black[500]
                 },
                 white: {
                     main: colors.white[500]
                 }         
            } : {
                primary: {
                    main: colors.secondary[400]
                   
                 },
                 secondary: {
                    main: colors.primary[400]
                 },
                 black: {
                    main: colors.white[400]
               
                 },
                 white: {
                    main: colors.black[400]
                 }
            }
                
            )
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: ()=>{

    }
})
export const useMode = ()=>{
    const[mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: ()=>{
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            }
        }), 
        []
    );
    const theme = useMemo(()=> createTheme(themeSetting(mode)), [mode]);

    return [theme, colorMode ]
}
