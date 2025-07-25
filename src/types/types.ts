import { OutputFileEntry } from "@uploadcare/react-uploader";

export interface UserLogIn {
  email: string;
  password: string;
}

export interface UserSignIn extends UserLogIn {
  confirmPassword: string;
}

export interface FileEntry {
  files: OutputFileEntry[];
}

export interface PostData {
  caption: string;
  photos: PhotoMeta[];
  likes: number;
  userLikes: [];
  userId: string | null;
  date: Date;
}

export interface PhotoMeta {
  cdnUrl: string;
  uuid: string;
}
