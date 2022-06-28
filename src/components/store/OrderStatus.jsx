import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs:'90%', sm: 400 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function OrderStatus({ status, open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            { status === 'success' && '¡Tú pedido fue Realizado con éxito!' }
            { status === 'error' && '¡Ups! ocurrió un error en el envio' }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { status === 'success' && 'Nos contactaremos con tigo en unos minutos, permanece atento a tú celular :)' }
            { status === 'error' && 'intentalo de nuevo' }
          </Typography>

            { status === 'success' && <Button variant='primary' onClick={()=>{ window.location.reload() }}>Volver A la tienda</Button> }
            { status === 'error' && <Button variant='primary' onClick={handleClose}>Entendido</Button> }
        </Box>
      </Modal>
    </div>
  );
}