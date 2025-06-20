import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

import SignUpModal from "../../signUp/SignUpModal";
import SearchModal from "../../search/SearchModal";
import ProductPopModal from "../../product/ProductPopModal";
import ConfirmActionModal from "../../confirmAction/ConfirmActionModal";

export const ModalContext = createContext();

const MODAL_COMPONENTS = {
  signup: SignUpModal,
  search: SearchModal,
  selectedProduct: ProductPopModal,
  confirm: ConfirmActionModal,
};

const ModalProvider = ({ children }) => {
  const [activeModals, setActiveModals] = useState([]);
  const [confirmModal, setConfirmModal] = useState({
    visible: false,
    modalType: "", // "Clear" or "Remove"
    modalName: "",
    productName: "",
    onConfirm: () => {},
  });

  const isModalVisible = useCallback(
    (name) => activeModals.includes(name),
    [activeModals]
  );

  const showModal = useCallback((name) => {
    setActiveModals((prev) => {
      if (!prev.includes(name)) {
        return [...prev, name];
      }
      return prev;
    });
  }, []);

  const hideModal = useCallback((name) => {
    setActiveModals((prev) => prev.filter((modal) => modal !== name));
  }, []);

  const closeConfirmModal = useCallback(() => {
    setConfirmModal({
      visible: false,
      modalType: "",
      modalName: "",
      productName: "",
      onConfirm: () => {},
    });
  }, []);

  const openConfirmModal = useCallback(
    ({ modalType, modalName, productName, onConfirm }) => {
      setConfirmModal({
        visible: true,
        modalType,
        modalName,
        productName,
        onConfirm: () => {
          onConfirm();
          closeConfirmModal();
        },
      });
    },
    [closeConfirmModal]
  );

  // Memoize confirmModalProps to avoid unnecessary re-renders of Modal components
  const confirmModalProps = useMemo(
    () => ({
      productName: confirmModal.productName,
      modalName: confirmModal.modalName,
      modalType: confirmModal.modalType,
      onConfirm: confirmModal.onConfirm,
      onClose: closeConfirmModal,
    }),
    [confirmModal, closeConfirmModal]
  );

  useEffect(() => {
    if (confirmModal.visible) {
      showModal("confirm");
    } else {
      hideModal("confirm");
    }
  }, [confirmModal.visible, showModal, hideModal]);

  const ModalPortal = () => {
    if (activeModals.length === 0 && !confirmModal.visible) return null;

    return (
      <>
        <div className="modal-backdrop fade show" />

        {activeModals.map((modalName) => {
          const ModalComponent = MODAL_COMPONENTS[modalName];
          if (!ModalComponent) return null;

          return (
            <ModalComponent
              key={modalName}
              confirmModalProps={confirmModalProps}
            />
          );
        })}
      </>
    );
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        isModalVisible,
        ModalPortal,
        openConfirmModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default React.memo(ModalProvider);
