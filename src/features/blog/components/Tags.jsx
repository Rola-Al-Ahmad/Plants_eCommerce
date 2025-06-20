import React, { useMemo } from "react";

const Tags = () => {
  const blogtags = useMemo(
    () => [
      { tag: "Blogging", number: 5 },
      { tag: "Community", number: 3 },
      { tag: "Creativity", number: 4 },
      { tag: "Copywriting", number: 7 },
      { tag: "Educational", number: 6 },
      { tag: "Experiences", number: 5 },
      { tag: "Photography", number: 3 },
      { tag: "Learning", number: 4 },
      { tag: "Success Stories", number: 7 },
      { tag: "Knowledge Sharing", number: 4 },
    ],
    []
  );
  return (
    <div className="blog-aside-box border rounded p-2 mt-4">
      <h2 className="border-bottom pb-2 text-center">Tags</h2>
      {blogtags.map((tag, index) => (
        <div className="blog-post-text mt-3" key={index}>
          <p className="tag-text">
            {tag.tag} <span>({tag.number})</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Tags);
