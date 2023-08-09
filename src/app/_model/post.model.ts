import { FileHandle } from "./file-handle.model";

export interface Post {
    postId: string,
    postAuthor: string,
    postTitle: string,
    postContent: string,
    createdAt: Date,
    updatedAt: Date,
    postImages: FileHandle[]
}