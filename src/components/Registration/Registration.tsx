import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';

const Registration = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen((prev) => !prev)
  }

  console.log('registration')

  return (
    <Modal
    open={isOpen}
    onClose={handleClose}
    >
      <Box>
        <Typography>
          Регистрация
        </Typography>
      </Box>
    </Modal>
  )
}

export default Registration;