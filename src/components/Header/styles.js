import { alpha, makeStyles } from "@material-ui/core/styles";

// we need to export our style so we call it as a function 
// we need to return an object using another call back function
export default makeStyles ((theme) => ({

        // We can add our style now in CSS JS type of way
        // This way is helpful because it gives you a theme object which allows you 
        // to use their colors, padding, ... 

        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'block',
            },
          },
          search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
          },
          searchIcon: {
            padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          },
          inputRoot: {
            color: 'inherit',
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
          },
          toolbar: {
            display: 'flex', justifyContent: 'space-between',
          },

})) 