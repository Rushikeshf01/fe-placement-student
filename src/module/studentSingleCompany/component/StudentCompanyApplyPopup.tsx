import { TransitionDown } from "@/commonComponents/Transition";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { SingleCompanyItemType } from "@/utils/types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import StudentCompanyApplyInfoPopup from "./StudentCompanyApplyInfoPopup";

const StudentCompanyApplyPopup = (props: {
  open: boolean;
  setOpen: any;
  singleCompanyItem: SingleCompanyItemType;
}) => {
  const [openApplyInfoPopup, setOpenApplyInfoPopup] = useState(false);
  const router = useRouter();

  const handleCompanyApply = () => {
    setOpenApplyInfoPopup(!openApplyInfoPopup);
    props.setOpen(!props.open);
  };

  const handleUpdateProfile = () => {
    props.setOpen(!props.open);
    router.push(ApplicationConstant.STUDENT_PROFILE_PATH);
  };

  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={TransitionDown}
        keepMounted
        onClose={() => props.setOpen(!props.open)}
      >
        <DialogTitle>{`${props.singleCompanyItem.name} Campus Drive`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`For better responce we recommend apply in ${props.singleCompanyItem.name} with updated resume, if your profile is up to date than ignore this message`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleUpdateProfile}
            className="p-1 px-5 rounded-full text-white text-md border-2 border-cyan-400 bg-cyan-400 hover:bg-cyan-500"
          >
            Update Profile
          </button>
          <button
            onClick={handleCompanyApply}
            className="p-1 px-5 rounded-full text-cyan-400 text-md border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white"
          >
            Apply
          </button>
        </DialogActions>
      </Dialog>
      <StudentCompanyApplyInfoPopup
        open={openApplyInfoPopup}
        setOpen={setOpenApplyInfoPopup}
        companyName={props.singleCompanyItem.name}
      />
    </>
  );
};

export default StudentCompanyApplyPopup;
