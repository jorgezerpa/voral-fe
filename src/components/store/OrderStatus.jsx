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
  width: { xs:'90%', sm: 500 },
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
          { status === 'loading' && <Typography textAlign='center' variant="h5" sx={{ fontStyle:'italic' }}>cargando, espera un momento...</Typography> }
          <Typography textAlign='center' variant="h5" component="h2" sx={{ fontStyle:'italic' }} >
            { status === 'success' && '¡Tú pedido fue Realizado con éxito!' }
            { status === 'error' && '¡Ups! ocurrió un error en el envio' }
          </Typography>
          <Typography textAlign='center' id="modal-modal-description" sx={{ mt: 2, mb:4, fontStyle:'italic'  }}>
            { status === 'success' && 'En un momento estaremos en contacto con tigo.' }
            { status === 'error' && 'intentalo de nuevo' }
          </Typography>

          <Box sx={{ display:'flex', justifyContent:'center' }}>
            { status === 'success' && <Button variant='primary' onClick={()=>{ window.location.reload() }}>volver a la tienda</Button> }
            { status === 'error' && <Button variant='primary' onClick={handleClose}>Entendido</Button> }
          </Box>

          <Box my={4} sx={{ display:'flex', justifyContent:'center' }}>
            { status === 'success' && 'redes sociales' }
          </Box>

        </Box>
      </Modal>
    </div>
  );
}