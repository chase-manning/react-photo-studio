import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";

const StyledFileUploads = styled.div``;

const FileInput = styled.input`
  display: none;
`;

const FileUpload = () => {
  const dispatch = useDispatch();
  const inputFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;
      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      dispatch(requestFeature("Menu/File/Open/" + fileType));
    }
  };

  const onButtonClick = () => {
    if (inputFile.current) inputFile.current.click();
  };

  return (
    <StyledFileUploads>
      <FileInput
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
