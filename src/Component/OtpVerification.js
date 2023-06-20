import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookStoreService from "../Service/bookstoreservice";

const defaultTheme = createTheme();

function OtpVerification() {
  const navigate = useNavigate();
  const email = useParams();
  const [otp, setOtp] = useState({
    // const[isVerified,setIsVerified]=useState(false);
    otpGenerated: "",
    isVerify: "",
  });
  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    setOtp({ otpGenerated: event.target.value });
    console.log(otp.otpGenerated);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
//     try{
//       const response = await axios.post('/verify', { otp });
//       if (response.data.success) {
//         setIsVerified(true);
//       } else {
//         setIsVerified(false);
//         alert('Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       console.log(error);
//       setIsVerified(false);
//       alert('An error occurred. Please try again.');
//     }
//   };
    console.log(localStorage.getItem("email"));
    let obj = {
      email: localStorage.getItem("email"),
      // emailData: email,
      otp:event.target.value,
    };
    try {
      let data=BookStoreService.verifyOtp(obj);
      console.log(data);
      setOtp({ isVerify: data.data });
      console.log(otp.isVerify);
    } catch (error) {
      console.log(error);
    }

    
    console.log(obj);

    console.log(otp.isVerify);
    // console.log(isVerify.token);
    if (otp.isVerify) {
      console.log("Verified");

      alert("OTP Verification Successfull");
      navigate("/");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <Typography component="h1" variant="h5">
            OTP Verification 
          </Typography>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={25}>
                <TextField
                  required
                  fullWidth
                  id="otp"
                  label="Enter Your OTP Sent To mail"
                  name="otp"
                  autoComplete="otp"
                  onChange={handleInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Verify
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default OtpVerification;