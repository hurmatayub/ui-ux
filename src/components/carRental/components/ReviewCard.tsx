import React from "react";
import { ReviewType } from "../types";
import { StarRating } from "./StarRating";

interface ReviewCardProps {
  review: ReviewType;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap gap-5 justify-between">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src={review.avatar}
            className="object-contain shrink-0 w-14 aspect-square rounded-[60px]"
            alt={`${review.name}'s avatar`}
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight text-gray-900">
              {review.name}
            </div>
            <div className="mt-2 text-sm font-medium tracking-tight text-slate-400">
              {review.position}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-medium tracking-tight leading-5 text-right text-slate-400">
            {review.date}
          </div>
          <div className="mt-2">
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>
      <div className="mt-3 ml-20 text-sm tracking-tight leading-7 text-slate-500 max-md:max-w-full">
        {review.review}
      </div>
    </div>
  );
};
