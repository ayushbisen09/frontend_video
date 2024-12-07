import { Box, Card, Button, CardMedia, IconButton, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function BigCard({ buttontitle, coverSrc, items, style }) {
  return (
    <Card sx={{ p: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 0,
        }}
      >
        <Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h6">Points To Remember</Typography>
          </Box>
          <Box component="ul" sx={style} mb={2} p={1}>
            {items.map((item, index) => (
              <li key={index}>
                <Typography variant="body2" fontWeight={400} color="#637381">
                  {item}
                </Typography>
              </li>
            ))}
          </Box>

          <Button
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
            variant="outlined"
            color="primary"
            size="large"
          >
            {buttontitle}
          </Button>
        </Box>{' '}
        <Box position="relative">
          <CardMedia
            component="img"
            src={coverSrc}
            title="Cover Image"
            sx={{
              height: '100%',
              width: '100%',
              cursor: 'pointer',
              objectFit: 'contain',
            }}
            //   onClick={() => setOpen(true)}
          />
          <IconButton
            aria-label="play"
            //   onClick={() => setOpen(true)}
            sx={{
              padding: '0px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#078DEE',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'translate(-50%, -50%) scale(1)',
                  boxShadow: '0 0 0 0 rgba(7, 141, 238, 0.7)',
                },
                '70%': {
                  transform: 'translate(-50%, -50%) scale(1.1)',
                  boxShadow: '0 0 0 10px rgba(7, 141, 238, 0)',
                },
                '100%': {
                  transform: 'translate(-50%, -50%) scale(1)',
                  boxShadow: '0 0 0 0 rgba(7, 141, 238, 0)',
                },
              },
            }}
          >
            <Iconify icon="icon-park-solid:play" width={50} height={50} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
