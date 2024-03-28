import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useDispatch } from 'react-redux';

export default function ClientListItem({one}) {
  let dispatch=useDispatch();
  return (
    
    <Card variant="outlined" sx={{ width: 240 , borderRadius:5 ,borderColor:'red'}} >
           <CardOverflow>
        <AspectRatio ratio="0.9" >
          
          <img 
          src={one.img}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">first name:  {one.clientFirstName}</Typography>
        <Typography level="title-md">last name:  {one.clientLastName}</Typography>
        <Typography level="title-md">phone:  {one.phone}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
      </CardOverflow>
    </Card>
  );
}
