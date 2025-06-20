import React, { useCallback } from "react";
import Container from "../../../shared/components/atoms/Container";
import Empty from "../../../shared/components/atoms/Empty";
import Thead from "../../../shared/components/atoms/Thead";
import ClearTableButton from "../../../shared/components/atoms/ClearTableButton";
import TBody from "../../../shared/components/molecules/TBody";
import { useModalContext } from "../../../features/modals/shared/hooks/useModalContext";

const TableWithActions = ({
  items,
  emptyImage,
  emptyText,
  tableTitle,
  tableHeadings,
  modalName,
  onClearItems,
  onRemoveItem,
  renderRow,
}) => {
  const { openConfirmModal } = useModalContext();

  const handleTrashClick = useCallback(
    (item) => {
      openConfirmModal({
        productName: item.name,
        modalName,
        modalType: "Remove",
        onConfirm: () => onRemoveItem(item.id),
      });
    },
    [modalName, openConfirmModal, onRemoveItem]
  );

  const handleClearClick = useCallback(() => {
    openConfirmModal({
      modalName,
      modalType: "Clear",
      onConfirm: onClearItems,
    });
  }, [modalName, openConfirmModal, onClearItems]);

  if (!items || items.length === 0) {
    return (
      <Container>
        {" "}
        <Empty emptyImage={emptyImage} emptyText={emptyText} />
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="mb-4">{tableTitle}</h2>
      <div className="table-responsive">
        <ClearTableButton onClick={handleClearClick} />
        <table className="table align-middle text-center">
          <Thead titles={tableHeadings} />
          <TBody>
            {items.map((item) => (
              <tr key={item.id}>{renderRow(item, handleTrashClick)}</tr>
            ))}
          </TBody>
        </table>
      </div>
    </Container>
  );
};

export default React.memo(TableWithActions);
