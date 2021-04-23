import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
  return (
    <Dialog className="popup-contianer" open={openPopup}>
      <DialogTitle>
        <div className="popup-close">
          <Button
            className="popup-close-button"
            color="secondary"
            variant="contained"
            onClick={() => setOpenPopup(false)}
          >
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
