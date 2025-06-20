import React, { useMemo } from "react";

const ModalWrapper = React.memo(({ modalIDName, children, ref, className }) => {
  const modalClassName = useMemo(
    () => `modal fade show d-block ${className || ""}`,
    [className]
  );

  return (
    <div
      ref={ref}
      className={modalClassName}
      id={modalIDName}
      tabIndex="-1"
      aria-labelledby={`${modalIDName}Label`}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">{children}</div>
      </div>
    </div>
  );
});

ModalWrapper.Header = React.memo(function ModalHeader({
  modalTitle,
  ModalLabel,
  ref,
  onClick,
}) {
  return (
    <ModalWrapper.HeaderWrapper modalTitle={modalTitle}>
      <ModalWrapper.ModalLabel
        modalTitle={modalTitle}
        ModalLabel={ModalLabel}
      />
      <ModalWrapper.CloseButton ref={ref} onClick={onClick} />
    </ModalWrapper.HeaderWrapper>
  );
});

ModalWrapper.HeaderWrapper = React.memo(function ModalHeaderWrapper({
  modalTitle,
  children,
}) {
  const headerClassName = useMemo(() => {
    return `modal-header border-0 ${
      modalTitle.includes("Clear") || modalTitle.includes("Remove")
        ? "pb-0"
        : ""
    }`;
  }, [modalTitle]);

  return <div className={headerClassName}>{children}</div>;
});

ModalWrapper.ModalLabel = React.memo(function ModalLabel({
  modalTitle,
  ModalLabel,
}) {
  const TitleClassName = useMemo(() => {
    return [
      "modal-title",
      modalTitle.includes("Clear") || modalTitle.includes("Remove")
        ? "fw-semibold"
        : "fw-bold",
      modalTitle === "Sign Up" && "sign-up-title",
      modalTitle === "Search" && "search-title",
    ]
      .filter(Boolean)
      .join(" ");
  }, [modalTitle]);

  return (
    <h5 className={TitleClassName} id={ModalLabel}>
      {modalTitle}
    </h5>
  );
});

ModalWrapper.CloseButton = React.memo(function ModalCloseButton({
  ref,
  onClick,
}) {
  return (
    <button
      ref={ref}
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={onClick}
    ></button>
  );
});

export default ModalWrapper;
