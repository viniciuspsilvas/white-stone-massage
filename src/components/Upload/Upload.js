import React from 'react'
import { Input, Button } from '@material-ui/core'

const Upload = ({ label, onUpload, variant, color, accept, ...props }) => {

  const uploadFile = React.useCallback(({ target: { validity, files: [file] } }) => {
    if (validity.valid) {
      onUpload({ file: file })
    }
  }, [ onUpload ])

  return (
    <div>
      <Input accept={ accept } style={{ display: 'none' }} id={`upload${ props.name }`} type="file" onChange={ uploadFile } />
      <label htmlFor={`upload${ props.name }`}>
        <Button component="span" variant={ variant} color={ color } { ...props } >
          { label }
        </Button>
      </label> 
    </div>
  )
}

export default Upload