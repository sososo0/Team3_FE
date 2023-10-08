import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import React from "react";
import { CommentData } from "@/types/commentData";
import CircularProfileImage from "@/components/atoms/CircularProfileImage";

interface Props {
  childComment: CommentData;
}

function ChildComment({ childComment }: Props) {
  return (
    <>
      <div className="flex items-center gap-3">
        <MdOutlineSubdirectoryArrowRight size="32" className="text-neutral-400" />
        <CircularProfileImage src="/images/default_profile_image.png" styleType="lg" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[#2a5885]">{childComment.userName}</span>
            <div className="text-neutral-400">
              <span className="text-sm">답글 달기</span>
            </div>
          </div>
          <pre className="whitespace-pre-wrap break-all">{childComment.content}</pre>
        </div>
      </div>
      <hr className="mt-2" />
    </>
  );
}

export default ChildComment;