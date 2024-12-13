import React, { memo } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const AboutUs = ({ title, image, content, rotate }) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Grid
            container
            spacing={2}
            direction={isMedium ? (rotate ? "row-reverse" : "row") : "column-reverse"}
        >
            <Grid
                item
                sm={6}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    style={{
                        padding: isMedium ? "10px 80px" : "10px 60px",
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ marginBottom: "24px", fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="caption"
                        style={{ fontSize: "16px" }}
                    >
                        {content}
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box
                    style={{
                        padding: isMedium ? "60px" : "40px",
                    }}
                >
                    <img style={{ maxWidth: "30rem", height: "30rem" }} src={image} alt={title} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
