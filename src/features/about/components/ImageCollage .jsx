import React, { useMemo, useCallback } from "react";

const AboutImageCollage = React.memo(
  ({
    mainImage,
    badgeImage,
    badgeTitle,
    badgeSubtitle,
    logoImage,
    supportImage,
  }) => {
    // Memoize image elements so they aren't recreated on each render
    const mainVisual = useMemo(
      () => (
        <img
          src={mainImage}
          alt="Main Visual"
          className="main-visual rounded shadow"
        />
      ),
      [mainImage]
    );

    const badgeSection = useMemo(
      () => (
        <div className="badge-section bg-success text-white rounded d-flex flex-column align-items-center justify-content-center shadow">
          <img src={badgeImage} alt="Badge" style={{ width: 28 }} />
          <strong>{badgeTitle}</strong>
          <span>{badgeSubtitle}</span>
        </div>
      ),
      [badgeImage, badgeTitle, badgeSubtitle]
    );

    const circleLogo = useMemo(
      () => (
        <img
          src={logoImage}
          alt="Logo"
          className="about-logo rounded-circle shadow"
        />
      ),
      [logoImage]
    );

    const supportImg = useMemo(
      () => (
        <img
          src={supportImage}
          alt="Supporting Visual"
          className="delivery-image rounded shadow"
        />
      ),
      [supportImage]
    );

    // Callback to render grid
    const renderImageGrid = useCallback(() => {
      return (
        <div className="d-grid about-grid">
          {mainVisual}
          {badgeSection}
          {circleLogo}
          {supportImg}
        </div>
      );
    }, [mainVisual, badgeSection, circleLogo, supportImg]);

    return <div className="col-lg-5">{renderImageGrid()}</div>;
  }
);

export default AboutImageCollage;
