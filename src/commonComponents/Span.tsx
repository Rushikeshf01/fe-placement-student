import React from "react";
import { NotAvailable } from "./alert/Alerts";

export const ParagraphSpan = (props: {
  title: string;
  data: string | number | null | undefined;
  notAvailable?: boolean;
  na?: boolean;
}) => {
  return (
    <>
      {props.notAvailable && (
        <p>
          <span className="font-semibold">{props.title}:</span>{" "}
          {props.data ? props.data : <NotAvailable />}
        </p>
      )}
      {props.na && (
        <p>
          <span className="font-semibold">{props.title}:</span>{" "}
          {props.data ? props.data : <span className="text-red-500">NA</span>}
        </p>
      )}
    </>
  );
};
