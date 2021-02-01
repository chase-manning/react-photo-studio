import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledFileUploads = styled.div``;

const FileInput = styled.input`
  display: none;
`;

const FileUpload = () => {
  const [image, setImage] = useState("");
  const inputFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
    }
  };

  const onButtonClick = () => {
    if (inputFile.current) inputFile.current.click();
  };

  return (
    <StyledFileUploads>
      <FileInput
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={(e) => handleFileUpload(e)}
        type="file"
      />
      <div className="button" onClick={onButtonClick}>
        Upload
      </div>
    </StyledFileUploads>
  );
};

export default FileUpload;
