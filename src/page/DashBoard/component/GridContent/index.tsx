import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactNode } from "react";

interface PropType {
  title: string;
  subTitle?: string;
  avatar?: ReactNode;
  children?: ReactNode;
}

export default function GridContent({
  title,
  subTitle = "",
  children,
  avatar,
}: PropType) {
  return (
    <Card>
      <CardHeader title={title} subheader={subTitle} avatar={avatar} />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
