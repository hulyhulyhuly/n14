import React from "react";
import Image from "next/image";
import Link from "next/link";

import RenderTag from "@/components/shared/RenderTag";
import Metric from "@/components/shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

type QuestionTag = {
  _id: number;
  name: string;
};

type QuestionAuthor = {
  _id: string;
  name: string;
  avatar: string;
};

interface QuestionCardProps {
  _id: number;
  title: string;
  tags: QuestionTag[];
  author: QuestionAuthor;
  upvotes: number;
  views: number;
  answers: number;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  createdAt,
  upvotes,
  answers,
  views,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-2xl p-8 sm:px-10">
      <div className="relative">
        {/* Title */}
        <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
          {getTimestamp(createdAt)}
        </span>
        <Link href={`/question/${_id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
            {title}
          </h3>
        </Link>

        <div className="absolute right-0 top-0">
          {/* If you are Author, Edit or Delete */}
          {/* Else, Star it */}
          <Image
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="star"
            className="invert-colors"
          />
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {/* Tags */}
        {tags.map((t) => (
          <RenderTag key={t._id} _id={t._id} name={t.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-4">
        <Metric
          imgURL="/assets/icons/avatar.svg"
          alt="author"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />

        <Metric
          imgURL="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatAndDivideNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />

        <Metric
          imgURL="/assets/icons/message.svg"
          alt="message"
          value={formatAndDivideNumber(answers)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />

        <Metric
          imgURL="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
