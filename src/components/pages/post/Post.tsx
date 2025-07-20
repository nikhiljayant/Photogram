import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Post = () => {
  // 1:38:17
  return (
    <div className="flex justify-center">
      <div className="border max-w-3xl w-full">
        <h3 className="bg-slate-800 text-white text-center text-lg p-2">
          Create Post
        </h3>
        <div className="p-8">
          <form>
            <div className="flex flex-col">
              <Label className="mb-4" htmlFor="photoCaption">
                Photo Caption
              </Label>
              <Textarea
                className="mb-8"
                id="photoCaption"
                placeholder="What's in your photo?"
              />
            </div>

            <div className="flex flex-col">
              <Label className="mb-4" htmlFor="photoCaption">
                Photo
              </Label>
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
