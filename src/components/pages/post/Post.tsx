import { useState } from "react";

import FileUploader from "@/components/fileUploader/FileUploader";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useUserAuth } from "@/context/userAuthContext";

import { FileEntry, Post } from "@/types/types";

const Post = () => {
  const { user } = useUserAuth();
  const [fileEntry, setFileEntry] = useState<FileEntry>({
    files: [],
  });
  const [post, setPost] = useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userLikes: [],
    userId: null,
    date: new Date(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
    console.log(user);
    console.log(fileEntry);
  };

  // 1:51:44

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
              <FileUploader fileEntry={fileEntry} onChange={setFileEntry} />
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
