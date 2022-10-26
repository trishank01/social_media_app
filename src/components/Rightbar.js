import {
  Avatar,
  List,
  AvatarGroup,
  ListItem,
  Divider,
  Box,
  ListItemText,
  ImageList,
  ListItemAvatar,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" >
        <Typography variant="h6" fontWeight={100}  mt={2} mb={2}>
          Online friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/women/14.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/women/8.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/women/6.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/57.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/women/2.jpg"
          />
          <Avatar
            alt="Tony Singh"
            src="https://randomuser.me/api/portraits/men/87.jpg"
          />
          <Avatar
            alt="John Kumar"
            src="https://randomuser.me/api/portraits/men/71.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5}>
          <ImageListItem >
            <img
              src="https://randomuser.me/api/portraits/men/0.jpg"
              alt="user"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://randomuser.me/api/portraits/men/0.jpg"
              alt="user"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://randomuser.me/api/portraits/men/0.jpg"
              alt="user"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}  mt={2}>
          Latest Converstions
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default RightBar;
