import React from 'react'
import { Button } from '@mui/material'

const ButtonComponent = ({title, onClicking}) => {
  return (
    <Button loading onClick={onClicking} style={{margin: '10px'}} variant="contained">{title}</Button>
  )
}

export default ButtonComponent