import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { StyledQuestionCard } from '../styles/global';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 2px #DEDBE5, inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: '#ffffff',
        ...theme.applyStyles('dark', {
            backgroundColor: '#30404d',
        }),
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
        ...theme.applyStyles('dark', {
            background: 'rgba(57,75,89,.5)',
        }),
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
        backgroundColor: '#394b59',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
    }),
}));

const BpCheckedIcon = styled(BpIcon)({

    boxShadow: 'inset 0 0 0 2px #121217, inset 0 -1px 0 rgba(16,22,26,.1)',

    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 20,
        height: 20,
        backgroundImage: 'radial-gradient(#121217,#121217 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#ffffff',
    },
});

// Inspired by blueprintjs
function BpRadio(props) {
    return (
        <Radio

            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

export default function Options({ options, id, handleChange, selectedOption }) {
    console.log(selectedOption)
    return (
        <FormControl sx={{ width: "100%" }}>
            {options.map(((ele, index) => (
                <StyledQuestionCard   key={index}>
                    <RadioGroup
                      
                        defaultValue={selectedOption}
                        value={selectedOption}
                        onChange={() => handleChange(id, ele)}
                        aria-labelledby={ele}
                        name={ele}
                    >
                        <FormControlLabel  name={ele} value={ele}
                        control={<BpRadio />} label={ele} />

                    </RadioGroup>
                </StyledQuestionCard>
            )))}

        </FormControl>
    );
}
