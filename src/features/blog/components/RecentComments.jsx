import React, { useMemo } from "react";

const RecentComments = () => {
  const comments = useMemo(
    () => [
      {
        id: 1,
        comment:
          "Really insightful! Can't wait to see how these trends shape the industry next year.",
      },
      {
        id: 2,
        comment:
          "Such a valuable read. These tips are practical and much needed in today’s fast-paced world.",
      },
      {
        id: 3,
        comment:
          "This gave me a new perspective on how to turn my side project into something meaningful.",
      },
      {
        id: 4,
        comment:
          "Absolutely agree — less really is more. Thanks for breaking it down so clearly!",
      },
      {
        id: 5,
        comment:
          "This blog hit home! Definitely going to try some of these focus techniques.",
      },
    ],
    []
  );

  if (!comments?.length) return null;

  return (
    <div className="blog-aside-box border rounded p-2 mt-4 post-hide">
      <h2 className="border-bottom pb-2 text-center">Recent Comments</h2>
      {comments.map((comment) => (
        <div className="blog-post-text mt-3" key={comment.id}>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(RecentComments);
