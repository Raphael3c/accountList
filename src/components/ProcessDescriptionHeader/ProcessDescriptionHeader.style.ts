import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  header:{
    height: '131px',
  },

  title: {
    fontWeight: 700,
    fontSize: 20,
    color: textColors.primary,
    "& + #pd-subtitle": {
      marginTop: 24,
    },
    "& + #pd-description": {
      marginTop: 8,
    },
  },

  activeAccount:{
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
  },

  boxInformation:{
    marginTop: '5px',
    textTransform: 'none',
    marginRight: '7.3%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  buttonHeader:{
    width: '100%',   
    textAlign: 'center',
    marginBottom: '7.5px',
    marginTop: '6.5px',

    '& img': {
      marginRight: '12.5px'
    },
    
    '& .name':{
      fontSize: "13px",
      fontWeight: 500, 
      lineHeight: '15.23px',
      color: '#555555',
      display: 'flex',
      marginBottom: '2.69px',
      transform: 'scale(1.0063, 0.989)',
      marginTop: '5px',
    },

    '& .account':{
      textAlign: 'left',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '14px',
      letterSpacing: '0em',
      color: '#555555',
    },

    '& .type':{
      textAlign: 'left',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '14px',
      color: '#555555',
      letterSpacing: '0em',
    }
  },

  boxAccountType: {
    width: '129px',
    transform: 'scale(1, 0.9644)',
  },

  alignCheckedInCenter:{
    display: 'flex',
    alignItems: 'center',
  },

  inputSearchContainerReference:{
    position: 'relative',
    marginTop: '4px',
    zIndex: 10,
    
    '& .inputSearchContainer':{
      position: 'absolute',
      height: '32px',
      width: "100%",
      top: '6px',
      background: '#FFFFFF',
      boxShadow: '0px 0px 2px 1px #00000026',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',

      '& img':{
        marginLeft: '7px',
        marginRight: '9px',
      },

      '& input':{
        height: '100%',
        width: '100%',
        border: 'none',
        fontFamily: 'Roboto',
      },

      '& input::placeholder':{
        color: '#C4C4C4',
        weight: 500,
        fontSize: '12px',
        lineHeight: '14.06px',
      }
    },
  },

  divider: {
    height: '0.5px',
    backgroundColor: '#E8E8E8',
  },
  
});