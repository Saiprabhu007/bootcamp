import React from 'react'
import { Typography } from '@mui/material'

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption';
  style?: React.CSSProperties;
  children?:React.ReactNode;
}

const MuiTypography: React.FC<TypographyProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}

export default MuiTypography

