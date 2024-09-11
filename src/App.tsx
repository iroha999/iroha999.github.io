import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box, Button, Tooltip, Fade, Paper, Snackbar, Link } from '@mui/material';
import { GitHub, ContentCopy, Close } from '@mui/icons-material';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import 'tailwindcss/tailwind.css';
import './index.css';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDiscordClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setAnchorEl(null), 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('732372080539992078');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const getPopoverPosition = () => {
    if (!anchorEl) return { top: 0, left: 0 };

    const rect = anchorEl.getBoundingClientRect();
    const popoverWidth = 300;
    const popoverHeight = 150;
    const margin = 10;

    let top = rect.bottom + margin;
    let left = rect.left;

    if (left + popoverWidth > window.innerWidth) {
      left = window.innerWidth - popoverWidth - margin;
    }
    if (top + popoverHeight > window.innerHeight) {
      top = rect.top - popoverHeight - margin;
    }

    return { top, left };
  };

  const { top, left } = getPopoverPosition();

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#1a202c' }}>
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            iroha
          </Typography>
          <IconButton color="inherit" href="https://github.com/iroha999">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" onClick={handleDiscordClick}>
            <FaDiscord />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Fade in={open} timeout={300}>
        <Paper
          style={{
            position: 'absolute',
            top: top,
            left: left,
            backgroundColor: '#1a202c',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            zIndex: 1300,
            width: '300px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
          elevation={3}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="20px">
            <Box display="flex" alignItems="center">
              <FaDiscord size={50} style={{ marginRight: '20px' }} />
              <Typography variant="h6">zzxiroha39</Typography>
            </Box>
            <IconButton onClick={handleClose} size="small" style={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>
          <Tooltip title="ユーザーIDをコピー">
            <Button
              variant="outlined"
              startIcon={<ContentCopy />}
              onClick={handleCopy}
              fullWidth
              style={{ color: 'white', borderColor: 'white' }}
            >
              ユーザーIDをコピー
            </Button>
          </Tooltip>
        </Paper>
      </Fade>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="ユーザーIDがコピーされました"
      />
    </>
  );
};

const Profile: React.FC = () => (
  <Box className="flex flex-col justify-center items-center bg-gray-900 text-white" style={{ minHeight: 'calc(100vh - 64px)' }}>
    <Container maxWidth="sm" className="text-center">
      <Typography variant="h2" component="h1" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Hi, I'm iroha.
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        I specialize in Cybersecurity.
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Technical skills:
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <FaReact size={40} style={{ marginRight: 10 }} />
        <SiTypescript size={40} />
      </Box>
      <Typography variant="h6" component="p" gutterBottom>
        I am a student at Niigata Computer College.
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Mail: kss-23180001@nsgcl.jp
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Events attended : <Link href="https://enog.jp/archives/2947" target="_blank" color="inherit">ENOG83 Meeting</Link>
      </Typography>
    </Container>
  </Box>
);

const App: React.FC = () => (
  <>
    <Header />
    <Profile />
  </>
);

export default App;