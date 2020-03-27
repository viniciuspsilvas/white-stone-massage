import React from 'react'
import { Input, Button } from '@material-ui/core'

const Upload = ({ label, onUpload, variant, color, accept, inputRef, name, ...props }) => {

  const uploadFile = React.useCallback(({ target: { validity, files: [file] } }) => {
    if (validity.valid && onUpload) {
      onUpload(file)
    }
  }, [ onUpload ])

  return (
    <div>
      <Input accept={ accept } style={{ display: 'none' }} id={`upload${ props.name }`} name={ name } type="file" onChange={ uploadFile } inputRef={ inputRef } />
      <label htmlFor={`upload${ props.name }`}>
        <Button component="span" variant={ variant} color={ color } { ...props } >
          { label }
        </Button>
      </label> 
    </div>
  )
}

export default Upload