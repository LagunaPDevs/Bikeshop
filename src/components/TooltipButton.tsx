import { Button, Tooltip } from "@mui/material";

type TooltipButtonProps = {
  children: React.ReactNode;
  title: string;
  onClick: any;
  disabled?: boolean;
};
export default function TooltipButton({
  title,
  onClick,
  disabled = false,
  children,
}: TooltipButtonProps) {
  return (
    <Tooltip title={title}>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </Tooltip>
  );
}
