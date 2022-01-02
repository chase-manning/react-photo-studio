import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fileOpened, selectFileOpen } from "../state/actionsSlice";
import { requestFeature } from "../state/featureSlice";

const StyledFileUploads = styled.div``;

const FileInput = styled.input`
  display: none;
`;

const FileUpload = () => {
  const dispatch = useDispatch();
  const fileOpen = useSelector(selectFileOpen);
  const inputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileOpen && inputFile.current) inputFile.current.click();
  }, [fileOpen]);

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;
      const parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      dispatch(requestFeature(`Menu/File/Open/${fileType}`));
    }
    dispatch(fileOpened());
  };

  return (
    <StyledFileUploads>
      <FileInput
        ref={inputFile}
        onChange={(e) => handleFileUpload(e)}
        type="file"
      />
    </StyledFileUploads>
  );
};

export default FileUpload;
