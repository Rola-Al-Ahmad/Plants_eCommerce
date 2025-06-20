import React, { useMemo } from "react";
import Container from "../../../shared/components/atoms/Container";

const Stats = () => {
  const stats = useMemo(
    () => [
      {
        id: 1,
        title: "Years",
        value: "18+",
      },
      {
        id: 2,
        title: "Employees",
        value: "200+",
      },
      {
        id: 3,
        title: "Page Views",
        value: "85%",
      },
      {
        id: 4,
        title: "Awards",
        value: "27+",
      },
    ],
    []
  );
  return (
    <section className="stats_section text-white text-center py-5 my-3">
      <Container>
        <div className="row justify-content-center">
          {stats.map((stat) => (
            <div className="about_col col6 col-md-3 mb-4 mb-md-0" key={stat.id}>
              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Stats);
