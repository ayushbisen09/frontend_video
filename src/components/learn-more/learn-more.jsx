import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{
        color: '#0078DE',
        textDecoration: 'underline',
        cursor: 'pointer',
        ...props.sx,
      }}
    >
      Learn More
    </Typography>
  );
}
