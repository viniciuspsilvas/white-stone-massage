import React from 'react'
import { toast } from 'react-toastify';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const spanStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const iconStyle = {
  marginRight: '15px'
}


export const AlertSuccess = message => {
  toast.success(<span style={ spanStyle }><ThumbUpIcon style={ iconStyle } /> { message } </span>)
}

export const AlertWarning = message => {
  toast.info(<span style={ spanStyle }><ErrorOutlineIcon style={ iconStyle } /> { message } </span>)
}

export const AlertError = message => {
  toast.error(<span style={ spanStyle }><SentimentVeryDissatisfiedIcon style={ iconStyle } /> { message } </span>);
}