"use client";

import React, { useState } from "react";
import styles from "./ButtonProfile.module.css";
import Modal from "react-responsive-modal";

export default function ButtonProfile() {
  const [openViewButton, setOpenViewButton] = useState<boolean>(false);
  const [openModalViewProfile, setOpenModalViewProfile] =
    useState<boolean>(false);

  return (
    <>
      <div
        className={styles.buttonProfile}
        onClick={() => setOpenViewButton(!openViewButton)}
      >
        <img src="/images/profile-picture.jpg" alt="" />
        {openViewButton && (
          <div className={styles.buttonProfile_dialog}>
            <span onClick={() => setOpenModalViewProfile(true)}>
              View Profile
            </span>
          </div>
        )}
      </div>
      <Modal
        open={openModalViewProfile}
        onClose={() => setOpenModalViewProfile(false)}
        closeIcon={<></>}
        center
      >
        <img src="/images/profile-picture.jpg" alt="" />
      </Modal>
    </>
  );
}
