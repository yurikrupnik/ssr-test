import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Context from './context';

const defaultTheme = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            // default: '#fff',
            // alternate: '#eaecf2',
            // backdrop: 'rgba(0,0,0, 0.5)',
        },
        primary: {
            // light: '#5771dc',
            main: '#5771dc',
            dark: 'rgb(64,95,211)',
            // darker: '#4a5fbb',
            // contrastText: '#fff',
            white: '#ffffff',
            twitch: '#6441a4',
        },
        secondary: {
            // light: '#fbdf38',
            main: 'rgb(252,61,70);',
            dark: 'rgb(229,57,53)',
            // dark: 'rgb(252,61,70)',
            // contrastText: '#fff',
            // white: '#fff',
        },
        light: {
            main: '#fff',
            dark: '#1d1e31',
            white: '#fff',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        dark: {
            main: '#212121',
            light: '#e2e2e2',
            black: '#212121',
            contrastText: 'rgba(255, 255, 255, 0.87)',
        }
    },
    // typography: {
    // button: {
    //     fontSize: '1rem',
    // },
    // },
    animations: [
        // 'cubic-bezier(.62,.28,.23,.99)'
    ],
    typography: {
        // fontFamily: 'proxima-nova, \'Roboto\'',
        // fontSize: '12px'
    },
    // overrides: {
    //     MuiButton: {
    //         root: {
    //             borderRadius: '20px',
    //             // boxShadow: 'none',
    //             // fontSize: '12px',
    //             // letterSpacing: '1.2px',
    //             // paddingLeft: '16px',
    //             // paddingRight: '16px',
    //             // color: '#FFFEFF',
    //             // fontWeight: 600,
    //             // minHeight: '36px',
    //             // lineHeight: '36px',
    //             // minWidth: '88px'
    //         }
    //     },
    //     // MuiInput: {
    //     //     underline: {
    //     //         '&:after': {
    //     //             backgroundColor: palette.primary.light,
    //     //             borderBottomColor: palette.primary.light,
    //     //         },
    //     //     },
    //     // },
    //     MuiSwitch: {
    //         root: {
    //             // width: 62,
    //             // height: 44,
    //             // '& .MuiSwitch-switchBase': {
    //             //     top: 6,
    //             //     left: 6,
    //             // },
    //             //
    //             // '& .MuiSwitch-colorSecondary': {
    //             //     '&.Mui-checked': {
    //             //         color: '#fff',
    //             //     },
    //             //     // '&.Mui-checked + .MuiSwitch-track': {
    //             //     //     background: `linear-gradient(283deg, ${palette.secondary.main}, ${
    //             //     //         palette.secondary.dark
    //             //     //     })`,
    //             //     //     opacity: 1,
    //             //     // },
    //             // },
    //         },
    //         thumb: {
    //             width: 14,
    //             height: 14,
    //             boxShadow: 'none',
    //         },
    //         // checkedIcon: {
    //         //   backgroundColor: palette.secondary.white,
    //         //   boxShadow: 'none',
    //         // },
    //         track: {
    //             width: 36,
    //             height: 20,
    //             borderRadius: 12,
    //             opacity: 0.2,
    //             display: 'block',
    //         },
    //     },
    //     MuiCheckbox: {
    //         // root: {
    //         //     opacity: 0.3,
    //         // },
    //         // colorPrimary: {
    //         //     '&$checked': {
    //         //         // color: palette.primary.light,
    //         //         opacity: 1,
    //         //     },
    //         // },
    //         // colorSecondary: {
    //         //     '&$checked': {
    //         //         // color: palette.primary.light,
    //         //         opacity: 1,
    //         //     },
    //         // },
    //     },
    //     MuiFormLabel: {
    //         root: {
    //             '&$focused': {
    //                 // color: palette.primary.light,
    //             },
    //         },
    //     },
    //     MuiInputAdornment: {
    //         positionEnd: {
    //             alignSelf: 'flex-end',
    //         },
    //     },
    //     MuiFormControl: {
    //         root: {
    //             marginTop: 8,
    //         },
    //     },
    //     MuiTabs: {
    //         indicator: {
    //             // backgroundColor: palette.primary.light,
    //         },
    //     },
    //     MuiTab: {
    //         textColorPrimary: {
    //             '&$selected': {
    //                 // color: palette.primary.light,
    //                 // borderBottomColor: palette.primary.light,
    //             },
    //         },
    //     },
    //     MuiChip: {
    //         root: {
    //             backgroundColor: 'transparent',
    //             // boxShadow: `0 0 1px 0 ${
    //             // type === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0, 0, 0, 0.9)'
    //             // }`,
    //         },
    //         deleteIcon: {
    //             fontSize: 18,
    //         },
    //     },
    // },
    tipping: {
        leaderboard: {
            width: 240,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '20px',
                boxShadow: 'none',
                fontSize: '12px',
                letterSpacing: '1.2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                color: 'rgba(255,255,255,0.87)',
                // background: '#5771dc',
                fontWeight: 600,
                minHeight: '36px',
                // lineHeight: '36px',
                // minWidth: '88px'
            },
            // hover: {
            //     boxShadow: 'none',
            //     // '&:hover': {
            //     //     backgroundColor: 'rgb(7, 177, 77, 0.42)'
            //     // }
            // }
        }
    }
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: '#5771dc',
            main: '#5771dc',
            dark: 'rgb(64,95,211)',
            // darker: '#4a5fbb',
            // contrastText: '#fff',
            white: '#ffffff',
            twitch: '#6441a4',
        },
        secondary: {
            // light: '#fbdf38',
            main: 'rgb(252,61,70);',
            dark: 'rgb(229,57,53)',
            // contrastText: '#fff',
            // white: '#fff',
        },
        light: {
            main: '#fff',
            dark: '#1d1e31',
            white: '#fff',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        dark: {
            main: '#212121',
            light: '#e2e2e2',
            black: '#212121',
            contrastText: 'rgba(255, 255, 255, 0.87)',
        },
        background: {
            paper: '#333344',
            default: '#1d1e31',
            alternate: '#151528',
            alternateDark: '#040f3b',
            light: '#383c5a',
            backdrop: 'rgba(0,0,0, 0.5)',
        },
    },
    // typography: {
    //     button: {
    //         fontSize: '1rem',
    //     },
    // },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '20px',
                boxShadow: 'none',
                fontSize: '12px',
                minHeight: '36px',
                letterSpacing: '1.2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                color: 'rgba(255,255,255,0.87)',
                // background: '#5771dc',
                // '&:hover': {
                //     // background: 'rgb(64,95,211)',
                //     background: 'red',
                // },
                // fontWeight: 600,
                // minHeight: '36px',
                // lineHeight: '36px',
                // minWidth: '88px'
            },
            // hover: {
            //     '&:hover': {
            //         backgroundColor: 'rgb(7, 177, 77, 0.42)'
            //     }
            // }
        }
    }
});

// console.log('darkTheme', darkTheme.spacing())
// console.log('darkTheme', darkTheme)
// const ThemesProvider1 = (props) => {
//     const { children } = props;
//     const [theme, setTheme] = React.useState(defaultTheme);
//     return (
//         <Context.Provider value={{
//             ...theme,
//             toggleType: this.toggleType
//         }}
//         >
//             <MuiThemeProvider theme={theme}>
//                 {children}
//             </MuiThemeProvider>
//         </Context.Provider>
//     );
// };

class ThemesProvider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            theme: defaultTheme
        };

        this.toggleType = this.toggleType.bind(this);
    }

    toggleType() {
        const { theme } = this.state;
        const { type } = theme.palette;
        const currentTheme = type === 'light' ? darkTheme : defaultTheme;
        this.setState(({
            theme: currentTheme
        }));
    }

    render() {
        const { children } = this.props;
        const { theme } = this.state;
        return (
            <Context.Provider value={{
                ...this.state,
                toggleType: this.toggleType
            }}
            >
                <MuiThemeProvider theme={theme}>
                    {children}
                </MuiThemeProvider>
            </Context.Provider>
        );
    }
}

ThemesProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default ThemesProvider;
