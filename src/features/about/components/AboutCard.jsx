import React, { useMemo, useCallback } from "react";

import AboutCardItem from "./AboutCardItem";

const AboutCard = () => {
  // prevent recreation of the static data array on every render

  const aboutCardInfo = useMemo(
    () => [
      {
        id: 1,
        icon: "bi bi-upload fs-1 text-success",
        title: "Submit a Task",
        content: "Easily upload your tasks and start earning rewards quickly.",
      },
      {
        id: 2,
        icon: "bi bi-chat-dots fs-1 text-primary",
        title: "Send Message",
        content:
          "Communicate seamlessly with clients and get your questions answered fast.",
      },
      {
        id: 3,
        icon: "bi bi-shield-check fs-1 text-info",
        title: "Trusted Experience",
        content:
          "Join a reliable platform with proven success and satisfied users.",
      },
    ],
    []
  );

  // memoize the render function to prevent unnecessary re-renders
  const renderAboutCard = useCallback(
    (item) => (
      <AboutCardItem
        key={item.id}
        icon={item.icon}
        title={item.title}
        content={item.content}
      />
    ),
    []
  );

  return (
    <section className="container my-5 py-5">
      <div className="row g-4">{aboutCardInfo.map(renderAboutCard)}</div>
    </section>
  );
};

export default React.memo(AboutCard);
