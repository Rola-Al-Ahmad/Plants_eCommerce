import React, { useCallback } from "react";

import ModalBody from "./components/ModalBody";

import ModalWrapper from "../shared/ModalWrapper";
import { useModalContext } from "../shared/hooks/useModalContext";

const SearchModal = () => {
  const { hideModal } = useModalContext();

  const handleClose = useCallback(() => {
    hideModal("search");
  }, [hideModal]);

  return (
    <>
      <ModalWrapper modalIDName="searchModal">
        <ModalWrapper.Header
          modalTitle="Search"
          ModalLabel="searchModalLabel"
          onClick={handleClose}
        />
        <ModalBody />
      </ModalWrapper>
    </>
  );
};

export default React.memo(SearchModal);
