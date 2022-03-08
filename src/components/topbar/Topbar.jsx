import React from "react";
import { TopBar } from "./Topbar.style";
import {
  NotificationsNone,
  Language,
  Settings,
  AssignmentInd
  
} from "@material-ui/icons";
import {Link}from "react-router-dom"
import { Badge } from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import Admin from "../../static/img/admin.jpg";

export default function Topbar() {
  
  return (
    <TopBar>
      <div className="topbar-wrapper">
        <div className="top-left">
          {" "}
          <span className="logo">Admin Panel</span>
        </div>
        <div className="top-right">
          <div className="topbarIconContainer">
            <Badge className="badge" badgeContent={2} color="error">
              <NotificationsNone />
            </Badge>

            <Badge className="badge" badgeContent={2} color="error">
              <Language />
            </Badge>
            <Badge className="badge" color="error">
              <Settings />
            </Badge>
            <Link className="badge" to="/Login">
              <AssignmentInd/>
            </Link>
          </div>

          <Avatar src={Admin} alt="" />
        </div>
      </div>
    </TopBar>
  );
}
