import { TransitionDown } from "@/commonComponents/Transition";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { SingleCompanyItemType } from "@/utils/types";
import {
  Button,
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
          <p>
            {`For better responce we recommend apply in ${props.singleCompanyItem.name} with updated resume, if your profile is up to date than ignore this message`}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateProfile} variant="contained">
            Update Profile
          </Button>
          <Button onClick={handleCompanyApply} variant="outlined">
            Apply
          </Button>
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
