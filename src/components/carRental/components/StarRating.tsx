import React from "react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex overflow-hidden gap-0.5 items-center">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src={
            index < rating
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/492d01546298192fe1a03879e5bf6ba145dbe895fceb1dd793ad44154414281f?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/b55a0d4c5650bbcad5ac86bc6c679c25b805f082b139ff07e9e3f28aedcc5866?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
          }
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt={index < rating ? "Filled star" : "Empty star"}
        />
      ))}
    </div>
  );
};
