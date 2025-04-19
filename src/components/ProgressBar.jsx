import React, { useState } from 'react';
import { LinearProgress, Box } from '@mui/material';

const ProgressBarComponent = ({currentIndex}) => {
  const [progress, setProgress] = useState([
    { id: 1, value: 20 },
    { id: 2, value: 40 },
    { id: 3, value: 60 },
    { id: 4, value: 80 },
    { id: 5, value: 100 }
  ]);

  return (
    <Box sx={{ width: '100%' }}>
      {progress.filter((ele)=>ele.id===currentIndex).map((item) => (
        <Box key={item.id} sx={{ marginBottom: 2 }}>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: '#e0e0e0', // light gray background
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'black' // black progress bar color
              }
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProgressBarComponent;
