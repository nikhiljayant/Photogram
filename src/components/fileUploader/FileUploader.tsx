import { useRef, useState } from "react";

import { FileEntry } from "@/types/types";

import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

interface IFileUploaderProps {
  fileEnter: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = ({
  fileEnter,
  onChange,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<OutputFileEntry<'success'>[]>([]);
  const ctxProviderRef = useRef<InstanceType<UploadCtxProvider>>(null);
  
  return (
    <div>
      <FileUploaderRegular
        sourceList="local"
        classNameUploader="uc-light"
        pubkey="49704cae29149e02a1e2"
      />
    </div>
  );
};

export default FileUploader;
