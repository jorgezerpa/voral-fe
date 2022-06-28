import { createTheme } from '@mui/material/styles';

let myTheme = createTheme({
        //PALETTE
    palette: {
        primary:{
            light: '#FACFCF',
            main: '#F4C3C3',
            dark: '#F4B2B2',
        },
    },    
});    

myTheme = createTheme(myTheme, {
    //TYPOGRAPHY
    typography:{
        fontFamily: 'Montserrat',
        
        h3: {
            fontSize: '2rem',
        },
        body1: {
            fontSize: '.8rem'
        },
        caption:{
            fontSize: '.6rem',
            fontWeight: 'light',
        },
        button: {
            fontSize: '.8rem',
        }
    },
})    

        //COMPONENTS CUSTOMIZATION
myTheme = createTheme(myTheme, {
    components: {
        //BUTTON
        MuiButton:{
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides:{
                root:{
                    borderRadius: '20px',
                    transition: '.5s all',
                    boxShadow: '3px 3px 20px 0 rgba(0,0,0,.3)',
                    '&:hover': {
                        // boxShadow: `0 0 5px 4px #dedede`,
                    }
                }
            },
            variants: [
                {
                    props: {variant: 'primary'},
                    style: {
                        fontWeight: 'bold',
                        letterSpacing: '.15rem',
                        width: '200px',
                        color: '#fff',
                        background: `${myTheme.palette.primary.dark}`,
                        '&:hover': {
                            background: `${myTheme.palette.primary.dark}`,
                            boxShadow: `0 0 5px 4px rgba(0,0,0,.3)`,
                            transform: 'scale(.95)'
                        }
                    }
                },
                {
                    props: {variant: 'secondary'},
                    style: {
                        fontWeight: 'bold',
                        letterSpacing: '.15rem',
                        width: '200px',
                        color: '#000',
                        background: `#fff`,
                        '&:hover': {
                            background: `#fff`,
                            boxShadow: `0 0 5px 4px rgba(0,0,0,.3)`,
                            transform: 'scale(.95)'
                        }
                    }
                },       
                {
                    props: {variant: 'logoButton'},
                    style: {
                        '&:hover': {
                            background: 'rgba(255,255,255,.9)',
                            transform: 'scale(1.1)'
                        }
                    }
                },       
                {
                    props: {variant: 'cardButton'},
                    style: {
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '.7rem',
                        letterSpacing: '.10rem',
                        width: '100px',
                        color: '#fff',
                        background: `${myTheme.palette.primary.dark}`,
                        '&:hover': {
                            background: `${myTheme.palette.primary.dark}`,
                            boxShadow: `0 0 5px 4px rgba(0,0,0,.3)`,
                            transform: 'scale(.95)'
                        },
                    }
                },       
            ]
        },
    }    
})    


export default myTheme;