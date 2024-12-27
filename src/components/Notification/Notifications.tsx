import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { NOTIFICATION_TIMER } from "../../constants";

interface NotificationProps {
  message: string;
}

const Notifications = ({ message }: NotificationProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    setOpen(false);
  };


  return(
    <Snackbar
    key={message}
    open={open}
    onClose={handleClose}
    autoHideDuration={NOTIFICATION_TIMER}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
          {message}
      </Alert>
    </Snackbar>
  )
}

export default Notifications;
