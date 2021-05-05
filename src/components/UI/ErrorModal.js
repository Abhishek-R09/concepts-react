import { Fragment } from "react";
import reactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onCloseErrorModal}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>{props.header}</h2>
      </div>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onCloseErrorModal}>Okay</Button>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onCloseErrorModal={props.onCloseErrorModal} />,
        document.getElementsByTagName("body")[0]
      )}
      {reactDom.createPortal(
        <ModalOverlay
          header={props.header}
          content={props.content}
          onCloseErrorModal={props.onCloseErrorModal}
        />,
        document.getElementsByTagName("body")[0]
      )}
    </Fragment>
  );
};

export default ErrorModal;
