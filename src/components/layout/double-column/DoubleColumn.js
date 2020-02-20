import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.min.css';

// Remover o style.css e inserir os styles in CSS-in-JS
import './style.css';

const DoubleColumn = (props) => {
  const theme = useTheme();

  console.log("theme =>", theme)

  const useStyles = makeStyles({
    bgIndigo: {
      background: theme.palette.primary.dark,
    },
  });

  const classes = useStyles();


  return (
    <div className="d-md-flex h-md-100 align-items-center">
      <div className={`col-md-6 p-0 ${classes.bgIndigo} h-md-100`}>
        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            First half content here
          </div>
        </div>
      </div>
      <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
          Second half content here
          {props.children}
       </div> 
      </div>
    </div>
  );
}

export default DoubleColumn;