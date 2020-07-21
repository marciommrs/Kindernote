import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

export default function Dropzone(props) {

  const [selectedFileUrl, SetSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    SetSelectedFileUrl(fileUrl);
    props.onFileUploaded(file);
  }, [props])
  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl
        ? <img src={selectedFileUrl} alt="Point thumbnail" />
        : (
          <p>
            <FiUpload />
          </p>
        )
      }

    </div>
  );
}
