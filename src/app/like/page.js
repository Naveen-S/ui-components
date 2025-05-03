"use client";
import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "../utility/icons";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const getStyle = () => {
    if (liked) {
      return "button liked";
    }
    return "button";
  };

  const handleClick = async () => {
    try {
      setIsError("");
      setIsLoading(true);
      const resp = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          body: JSON.stringify({ action: liked ? "unlike" : "like" }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!resp.ok) {
        const res = await resp.json();
        setIsError(res.message);
        return;
      }

      setLiked(!liked);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={getStyle()}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {isLoading ? <SpinnerIcon /> : <HeartIcon />} Like
      </button>
      {error && <p className="text-purple-400">{error}</p>}
    </div>
  );
}
