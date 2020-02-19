import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useTheme, styled } from '@material-ui/core/styles';

export default function PrimaryButton() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: theme.palette.primary.dark,
    height: 48,
    padding: '0 30px',
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <MyButton variant="contained"
        onClick={() => setCount(count + 1)} >
        Click me
      </MyButton>
    </div>

  );
}