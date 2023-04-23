import React from "react";
import Button from "../Button";
import "./Modal.scss";

interface Props {
  visible: boolean;
  title: string;
  children: string;
  footer: React.ReactNode;
  onClose: () => void;
}

export default class Modal extends React.Component<Props> {
  render() {
    return <></>;
  }
}
