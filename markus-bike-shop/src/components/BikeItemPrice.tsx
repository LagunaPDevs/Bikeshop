import { Grid2, Typography } from "@mui/material";

type BikeItemPriceProps = {
  title: string;
  item?: string;
  price?: number;
};

export default function BikeItemPrice({
  title,
  item,
  price,
}: BikeItemPriceProps) {
  return (
    <Grid2 container spacing={2} justifyContent="space-between">
      <Typography>{title}</Typography>
      <Typography>{item}</Typography>
      <Typography>{price} €</Typography>
    </Grid2>
  );
}
