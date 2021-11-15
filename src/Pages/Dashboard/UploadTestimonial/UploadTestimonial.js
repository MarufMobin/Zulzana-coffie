import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Rating, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const UploadTestimonial = () => {

    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        if (!data.get('discription').length > 0) {
            alert('The minimum length for "Discription" is 30 or character')
        } else {
            fetch(`https://fast-fjord-39007.herokuapp.com/testimonial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                }, body: JSON.stringify({
                    userEmail: user?.email,
                    name: user?.displayName,
                    imgUrl: user?.photoURL,
                    reviewDate: new Date(),
                    description: data.get('discription'),
                    designation: data.get('suggestions'),
                    ratting: ratingValue

                })
            }).then(res => res.json()).then( data => {
                if( data ){
                    alert("your Post SuccessFully Done")
                 }
            })

        }
        event.currentTarget.reset()
    };
    return (
        <Container sx={{ my: 15 }} maxWidth={'md'}>
            <Box component="form" aria-required onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="discription"
                            name="discription"
                            label="How would you feel "
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            id="suggestions"
                            name="suggestions"
                            label="Any suggestions for us"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400} gutterBottom>Share your experience</Typography>
                        <Rating onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }} name="half-rating" defaultValue={0} precision={0.5} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default UploadTestimonial;