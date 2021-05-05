import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseErrorModal}></div>
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
    </div>
  );
};

export default ErrorModal;
