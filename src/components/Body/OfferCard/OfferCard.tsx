import * as React from "react";
import { FC } from "react";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { OfferCardType } from "./offerCardTypes";
import {
  CardContainer,
  CardContentContainer,
  CardMediaContainer,
  CustomButton,
} from "./offerCardStyles";

export const OfferCard: FC<OfferCardType> = ({ title, description, logo }) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          padding={"10px 0 0 10px"}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          padding={"0px 0 0 10px"}
        >
          {description}
        </Typography>
      </CardContentContainer>
      <CardMediaContainer image={logo} />
      <CardActions>
        <CustomButton variant="contained" size="small">
          Calculează preț
        </CustomButton>
      </CardActions>
    </CardContainer>
  );
};
