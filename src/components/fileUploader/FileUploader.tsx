import { useCallback, useRef, useState } from "react";

import { FileEntry } from "@/types/types";

import {
  FileUploaderRegular,
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

interface IFileUploaderProps {
  fileEnter: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = ({
  fileEnter,
  onChange,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<
    OutputFileEntry<"success">[]
  >([]);
  const ctxProviderRef = useRef<InstanceType<UploadCtxProvider>>(null);

  const handleRemoveClick = useCallback(
    (uuid: OutputFileEntry['uuid']) => onChange(files.filter(f => f.uuid !== uuid)),
    [files, onChange],
  );

  const resetUploaderState = () =>
    ctxProviderRef.current?.uploadCollection.clearAll();

  const handleChangeEvent = (files) => {
    setUploadedFiles([
      ...files.allEntries.filter((f) => f.status === "success"),
    ] as OutputFileEntry<"success">[]);
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local"
        classNameUploader="uc-light"
        pubkey="49704cae29149e02a1e2"
        multiple={true}
        confirmUpload={false}
        removeCopyright={true}
        imgOnly={true}
      />
    </div>
  );
};

export default FileUploader;
