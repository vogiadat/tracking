'use client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const InputFileImage = ({ defaultImage }) => {
  const [image, setImage] = useState(defaultImage)

  const handleChangeImage = (evt) => {
    var files = evt.target.files
    var reader = new FileReader()

    if (files[0]) {
      reader.readAsDataURL(files[0])
    }

    reader.onload = function (e) {
      setImage(e.target.result)
    }
  }

  return (
    <label
      className='border border-dashed rounded cursor-pointer flex items-center justify-center flex-col '
      style={{
        background: !!image
          ? `url(${image}) no-repeat border-box center center`
          : `rgb(240, 240, 240)`,
        backgroundSize: 'cover'
      }}
      onClick={() => setImage('')}
    >
      <div className='flex items-center justify-center flex-col bg-base-300/70 flex-1 w-full'>
        <h6 className={'text-black font-bold'}>Select Image</h6>
        <div>
          <Plus className='w-10' />
        </div>
      </div>

      <input
        name='image'
        type={image === defaultImage ? 'text' : 'file'}
        defaultValue={defaultImage}
        className='file-input file-input-bordered file-input-success w-full max-w-xs hidden'
        onChange={handleChangeImage}
      />
    </label>
  )
}

export default InputFileImage
