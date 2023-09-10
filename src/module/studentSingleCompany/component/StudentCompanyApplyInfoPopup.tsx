"use client";

import { ParagraphSpan } from "@/commonComponents/Span";
import { TransitionUp } from "@/commonComponents/Transition";
import { RootState } from "@/store/store";
import { Close } from "@mui/icons-material";
import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const StudentCompanyApplyInfoPopup = (props: {
  companyName: string;
  open: boolean;
  setOpen: any;
}) => {
  const student = useSelector((state: RootState) => state.student);

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
        <div>
          {studentApplyInfo.map((item, index) => (
            <ParagraphSpan
              title={item.title}
              data={item.data}
              na={true}
              key={`student-company-apply-index:${index}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentCompanyApplyInfoPopup;
