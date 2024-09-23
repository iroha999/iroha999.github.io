import React, { useState, useCallback } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Container, Box, Button, Tooltip, Fade, Paper, Link, Card, CardContent, Grid, Modal
} from '@mui/material';
import { GitHub, ContentCopy, Close } from '@mui/icons-material';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import './index.css';

// ヘッダーコンポーネント
const Header: React.FC = () => {
  // ステートの定義
  const [open, setOpen] = useState(false); // モーダルの表示状態
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // ポップオーバーのアンカーエレメント

  // Discordボタンがクリックされたときのハンドラー
  const handleDiscordClick = useCallback((event: React.MouseEvent<HTMLElement>) => { // イベントオブジェクトの型を指定
    setAnchorEl(event.currentTarget); // アンカーエレメントをセット
    setOpen(true); // モーダルを表示
  }, []);

  // モーダルを閉じるハンドラー
  const handleClose = useCallback(() => {
    setOpen(false); // モーダルを非表示
    setTimeout(() => setAnchorEl(null), 300); // アンカーエレメントをクリア 
  }, []);

  // トーストメッセージを表示する関数
  const showToast = useCallback((message: string, isBlue: boolean = false) => {
    toast.success(message, { // 成功メッセージを表示
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: isBlue ? 'blue-toast' : '',
    });
  }, []);

  // ユーザーIDをクリップボードにコピーする関数
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('732372080539992078'); // クリップボードにコピー
    showToast('ユーザーIDがコピーされました', true); // トーストメッセージを表示
  }, [showToast]); // showToast関数を依存性配列に追加

  // ポップオーバーの位置を計算する関数
  const getPopoverPosition = useCallback(() => {
    if (!anchorEl) return { top: 0, left: 0 }; // アンカーエレメントが存在しない場合は初期値を返す

    const rect = anchorEl.getBoundingClientRect(); // アンカーエレメントの位置とサイズを取得
    const popoverWidth = 300; // ポップオーバーの幅
    const popoverHeight = 150; // ポップオーバーの高さ
    const margin = 10; // マージン

    let top = rect.bottom + margin; // ポップオーバーの上端の位置
    let left = rect.left; // ポップオーバーの左端の位置

    if (left + popoverWidth > window.innerWidth) { // ポップオーバーが画面右端を超える場合
      left = window.innerWidth - popoverWidth - margin; // ポップオーバーの左端を調整(右端に寄せる)
    }
    if (top + popoverHeight > window.innerHeight) { // ポップオーバーが画面下端を超える場合
      top = rect.top - popoverHeight - margin; // ポップオーバーの上端を調整(上端に寄せる)
    }

    return { top, left }; // 位置を返す
  }, [anchorEl]); // anchorElを依存性配列に追加

  const { top, left } = getPopoverPosition(); // ポップオーバーの位置を取得

  // JSXを返す
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
      <Fade in={open}>
        <Paper
          style={{
            position: 'absolute',
            top,
            left,
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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

// プロフィールコンポーネント
const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="flex flex-col justify-center items-center bg-gray-900 text-white" style={{ minHeight: 'calc(100vh - 64px)', padding: '2rem 0' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Profile
          </Typography>
        </motion.div>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card raised className="bg-gray-800 text-white" style={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    About Me
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Hi, I'm iroha. I'm majoring in cyber security.
                  </Typography>
                  <Typography variant="body1">
                    I am a student at Niigata Computer College.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card raised className="bg-gray-800 text-white" style={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Technical Skills
                  </Typography>
                  <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <FaReact size={40} style={{ marginRight: 10, color: 'skyblue' }} />
                    <SiTypescript size={40} style={{ color: '#3178c6' }} />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card raised className="bg-gray-800 text-white">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Contact
                  </Typography>
                  <Typography variant="body1">
                    Mail: kss-23180001@nsgcl.jp
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card raised className="bg-gray-800 text-white">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Events Attended
                  </Typography>
                  <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
                    <Box component="li" mb={1}>
                      <Link href="https://enog.jp/archives/2947" target="_blank" color="inherit" className="hover-effect">
                        ENOG83 Meeting
                      </Link>
                    </Box>
                    <Box component="li" mb={1}>
                      <Link href="https://www.ncc-net.ac.jp/blog/pickup/49686" target="_blank" color="inherit" className="hover-effect">
                        高校生ICTカンファレンス2024 ファシリテーター
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Card raised className="bg-gray-800 text-white">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Works
                  </Typography>
                  <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
                    <Box component="li" mb={1}>
                      <Link href="#" onClick={handleOpen} color="inherit" className="hover-effect">
                        架空の企業HPの作成
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 600,
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
            overflow: 'hidden',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            架空の企業HPの作成
          </Typography>
          <img src="./サムネイル.png" alt="サムネイル" style={{ width: '100%', marginBottom: '16px', borderRadius: '8px' }} />
          <Typography variant="body1" gutterBottom sx={{wordBreak: 'break-all', whiteSpace: 'normal'}}>
            URL: <Link href="https://iroha999.github.io/iroha999-company.github.io/index.html" target="_blank">https://iroha999.github.io/iroha999-company.github.io/index.html</Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            技術スタック: HTML, CSS, JavaScript, Jquery, LightBox
          </Typography>
          <Typography variant="body1" paragraph>
            作品の説明: この作品は、1年時の課題制作として作成した架空のデザイン会社のホームページです。<br />デザイン会社のウェブサイトをテーマに、企業情報、作品紹介、採用情報などのページを作成しました。ユーザーが必要な情報に簡単にアクセスできるように工夫しています。
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

// テーマの定義
const theme = createTheme({
  typography: {
    fontFamily: 'JetBrains Mono, monospace',
  },
});

// アプリケーションのメインコンポーネント
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Profile />
  </ThemeProvider>
);

export default App;