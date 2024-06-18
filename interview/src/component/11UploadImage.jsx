import React, { useState } from 'react'

function UploadImage() {
    const [file, setFile] = useState(null)
    
    const fileUpload = (e) => {
        const selectFile = e.target.files[0]
        setFile(selectFile)
    }

    console.log(file);

  return (
    <>
        <div>UploadImage</div>
        <input type="file" name="image/*" onChange={fileUpload} />
        {file &&
        <img src={URL.createObjectURL(file)} alt="" />
        }

        <div>UploadVideo</div>
        <input type="file" name="video/*" onChange={fileUpload} />
        {file &&
        <video src={URL.createObjectURL(file)} alt="" />
        }
    </>

    
  )
}

export default UploadImage