// src/components/TechStack.tsx
import React, { useState, useCallback } from 'react';
import { Tooltip, IconButton, Box, Typography, Popover } from '@mui/material';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiMui} from 'react-icons/si';
import { MdBuild } from 'react-icons/md';
import { Close } from '@mui/icons-material';

const techStack = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MUI', icon: <SiMui /> },
    { name: 'GitHub Pages', icon: <FaGithub /> },
];

const TechStack: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

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

    getPopoverPosition(); // ポップオーバーの位置を取得

    return (
        <>
            <Tooltip title="技術スタック" arrow>
                <IconButton color="inherit" onClick={handleOpen}>
                    <MdBuild />
                </IconButton>
            </Tooltip>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                        backgroundColor: '#1a202c',
                        color: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        width: '300px',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                    },
                }}
            >
                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="20px">
                    <Box display="flex" alignItems="center">
                        <MdBuild size={50} style={{ marginRight: '20px' }} />
                        <Typography variant="h6">技術スタック</Typography>
                    </Box>
                    <IconButton onClick={handleClose} size="small" style={{ color: 'white' }}>
                        <Close />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                    {techStack.map((tech) => (
                        <Box key={tech.name} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            {tech.icon}
                            <Typography sx={{ ml: 1 }}>{tech.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Popover>
        </>
    );
};

export default TechStack;