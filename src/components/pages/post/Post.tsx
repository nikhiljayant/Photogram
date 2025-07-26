import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useUserAuth } from "@/context/userAuthContext";

import { FileEntry, PostData } from "@/types/types";

const Post = () => {
  const { user } = useUserAuth();
  const [fileEntry, setFileEntry] = useState<FileEntry>({
    files: [],
    filesBlobURL: [],
  });
  const [post, setPost] = useState<PostData>({
    caption: "",
    photos: [],
    likes: 0,
    userLikes: [],
    userId: null,
    date: new Date(),
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length > 0) {
      const filesArr = Object.values(e.target.files);
      const filesBlobURL = filesArr.map((file) => URL.createObjectURL(file));
      setFileEntry({
        files: filesArr,
        filesBlobURL: filesBlobURL,
      });
    }
  };

  const handleRemoveFile = () => {
    
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
    console.log(user);
    console.log(fileEntry);
  };

  return (
    <div className="flex justify-center">
      <div className="border max-w-3xl w-full">
        <h3 className="bg-slate-800 text-white text-center text-lg p-2">
          Create Post
        </h3>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Label className="mb-4" htmlFor="photoCaption">
                Photo Caption
              </Label>
              <Textarea
                className="mb-8"
                id="photoCaption"
                placeholder="What's in your photo?"
                value={post.caption}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setPost({ ...post, caption: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <Label className="mb-4" htmlFor="photo">
                Photo
              </Label>
              {/* <FileUploader fileEntry={fileEntry} onChange={setFileEntry} /> */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                multiple
                className="border rounded-md p-[5px]"
              />
              {fileEntry.filesBlobURL.length > 0 &&
                fileEntry.filesBlobURL.map((item) => (
                  <div
                    key={item}
                    className="mt-[10px] relative w-[200px] h-[200px] overflow"
                  >
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                    <div className="cursor-pointer absolute bg-white rounded-full -right-1 -top-1 py-[3px] px-[10px] border border-black">
                      X
                    </div>
                  </div>
                ))}
            </div>
            <Button type="submit" className="mt-8 w-32">
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
