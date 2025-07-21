import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

const FileUploader = () => {
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
