import React, { useCallback } from "react";

import ModalWrapper from "../shared/ModalWrapper";
import { useModalContext } from "../shared/hooks/useModalContext";
import SignUpForm from "./SignUpForm";

const SignUpModal = () => {
  const { hideModal } = useModalContext();

  const handleClose = useCallback(() => hideModal("signup"), [hideModal]);

  return (
    <>
      <ModalWrapper modalIDName="signupModal">
        <ModalWrapper.Header
          modalTitle="Sign Up"
          ModalLabel="signupModalLabel"
          onClick={handleClose}
        />
        <div className="modal-body">
          <SignUpForm />

          <div className="text-center mt-3">
            <p className="mb-0 terms">
              Already have an account?{" "}
              <a
                href="#"
                className="fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#signinModal"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default React.memo(SignUpModal);
