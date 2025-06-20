import React, { useMemo } from "react";

import ModalWrapper from "../shared/ModalWrapper";

const ConfirmActionModal = ({ confirmModalProps }) => {
  const { modalType, modalName, productName, onConfirm, onClose } =
    confirmModalProps;

  const modalId = `${modalType} ${productName} ${modalName}Modal`;
  const modalLabel = `${modalType}${productName || ""} ${modalName}ModalLabel`;
  const modalTitle = `${modalType} ${productName || modalName}`;

  const confirmationMessage = useMemo(() => {
    if (modalType === "Remove") {
      return (
        <>
          Are you sure you want to <br />
          <strong>
            remove {productName} from your {modalName}?
          </strong>
        </>
      );
    }

    if (modalType === "Clear") {
      return (
        <>
          Are you sure you want to <br />
          <strong>clear your {modalName.toLowerCase()}?</strong>
        </>
      );
    }

    return null;
  }, [modalType, modalName, productName]);

  return (
    <ModalWrapper modalIDName={modalId}>
      <ModalWrapper.Header
        modalTitle={modalTitle}
        ModalLabel={modalLabel}
        onClick={onClose}
      />
      <div className="modal-body text-center py-4 px-3">
        <div className="mb-3">
          <i className="fas fa-exclamation-triangle text-warning fs-1"></i>
        </div>

        <p className="fs-5 fw-medium text-dark">{confirmationMessage}</p>
        <p className="text-muted mb-4">
          This action <strong>cannot be undone</strong> and <br /> will remove
          all saved items.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <button
            type="button"
            className="btn btn-danger rounded-pill px-4 w-100"
            onClick={onConfirm}
          >
            Yes, {modalType.toLowerCase()} It
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill px-4 w-100"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default React.memo(ConfirmActionModal);
