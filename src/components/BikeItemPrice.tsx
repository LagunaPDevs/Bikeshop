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
      <Grid2 size={4}>
        <Typography>{title}</Typography>
      </Grid2>
      <Grid2 size={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>{item}</Typography>
      </Grid2>
      <Grid2 size={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography>{price} €</Typography>
      </Grid2>
    </Grid2>
  );
}
