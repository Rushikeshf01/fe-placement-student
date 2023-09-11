"use client";

import { ParagraphSpan } from "@/commonComponents/Span";
import { TransitionUp } from "@/commonComponents/Transition";
import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { RootState } from "@/store/store";
import { ToastSuccessMessage } from "@/utils/toastifyAlerts";
import { Close } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const StudentCompanyApplyInfoPopup = (props: {
  companyName: string;
  companyId: string;
  open: boolean;
  setOpen: any;
}) => {
  const student = useSelector((state: RootState) => state.student);
  const router = useRouter();

  const studentApplyInfo = [
    {
      title: "Name",
      data: student.firstName + student.lastName,
    },
    {
      title: "Email",
      data: student.email,
    },
    {
      title: "Mobile",
      data: student.mobile,
    },
    {
      title: "Alternate mobile",
      data: student.studentDetail?.alternateMobile,
    },
    {
      title: "Whatsapp number",
      data: student.studentDetail?.whatsappMobile,
    },
    {
      title: "Address",
      data: student.studentDetail?.address,
    },
    {
      title: "College",
      data: student.studentDetail?.college,
    },
    {
      title: "Branch",
      data: student.studentDetail?.branch,
    },
    {
      title: "Passing year",
      data: student.studentDetail?.passingYear,
    },
    {
      title: "Enrollment number",
      data: student.studentDetail?.enrollmentNumber,
    },
    {
      title: "Current CGPA",
      data: student.studentDetail?.currentCGPA,
    },
    {
      title: "Current backlog",
      data: student.studentDetail?.currentBacklog,
    },
    {
      title: "Total backlog",
      data: student.studentDetail?.totalBacklog,
    },
    {
      title: "Schooling medium",
      data: student.studentDetail?.schoolMedium,
    },
    {
      title: "10th percentage",
      data: student.studentDetail?.tenPercent,
    },
    {
      title: "Diploma percentage",
      data: student.studentDetail?.diplomaPercent,
    },
    {
      title: "12th percentage",
      data: student.studentDetail?.twelvePercent,
    },
  ];

  const handlePopupClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = async () => {
    const res = await appClient.post(ApiConstant.POST_APPLICATION, {
      // status: "applied",
      studentId: student.studentDetail?.id,
      companyId: props.companyId,
    });
    ToastSuccessMessage(
      `Your application in ${props.companyName} successfully submited`
    );
    router.push(ApplicationConstant.STUDENT_DASHBOARD_PATH);
  };

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={handlePopupClose}
      TransitionComponent={TransitionUp}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handlePopupClose}>
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {props.companyName} Application
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <div className="leading-8 mb-3">
          {studentApplyInfo.map((item, index) => (
            <ParagraphSpan
              title={item.title}
              data={item.data}
              na={true}
              key={`student-company-apply-index:${index}`}
            />
          ))}
        </div>
        <Button onClick={handleSubmit} variant="outlined">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default StudentCompanyApplyInfoPopup;
