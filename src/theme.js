import { createTheme } from "@mui/material";

const myTheme = createTheme({
    palette:{
        primary:{
            main:"#ff0000",
            light:"#9e3623",
        },
        secondary:{
            main:"#433890"
        },
        myColor:{
            main:"#0f67af",
            dark:"#003300"
        }
    }
});

export default myTheme;

// palette:{
//     primary:{
//         main:"#ff0000",
//         light:"#9e3623",
//     }
// }