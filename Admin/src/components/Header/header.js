import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import user from "../../assets/images/user.png";
import { IoMenu } from "react-icons/io5";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfSharp } from "react-icons/io5";
import UserImg from "../UserImg/UserImg";
import { mycontext } from "../../App";
import LockOutlineIcon from "@mui/icons-material/LockOutline";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpennotificationsDrop, setIsOpenNotificationsDrop] = useState(null);
  const context = useContext(mycontext);

  const openMyacc = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const openNotifications = Boolean(isOpennotificationsDrop);
  const handleOpenNotificationsDrop = () => {
    setIsOpenNotificationsDrop(true);
  };

  const handleCloseNotificationsDrop = () => {
    setIsOpenNotificationsDrop(false);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} alt="logo" />
              <span className="ml-2">HOTASH'S</span>
            </Link>
          </div>
          {context.windowWidth > 992 && (
            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }>
                {context.isToggleSidebar === false ? (
                  <MdOutlineMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <SearchBox />
            </div>
          )}

          <div className="col-sm-7 d-flex align-items-center justify-content-end gap-3 part3">
            <Button
              className="rounded-circle mr-3 ml-5"
              onClick={() => context.setThemeMode(!context.themeMode)}>
              <MdOutlineLightMode />
            </Button>

            <div className="dropdownWrapper position-relative ml-5">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpenNotificationsDrop}>
                {" "}
                <MdOutlineNotifications />
              </Button>

              <Button
                className="rounded-circle mr-3 isopennav"
                onClick={() => context.openNav()}>
                {" "}
                <IoMenu />
              </Button>

              <Menu
                anchorEl={isOpennotificationsDrop}
                id="notifications"
                className="notifications dropdown_list head"
                open={openNotifications}
                onClose={handleOpenNotificationsDrop}
                onClick={handleCloseNotificationsDrop}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <div className="heads pl-3 pb-0">
                  <h4 id="orders" style={{ fontSize: "1.3rem" }}>
                    Orders (12)
                  </h4>
                </div>

                <Divider className="mb-1" />

                <div className="scroll">
                  <MenuItem onClick={handleCloseNotificationsDrop}>
                    <div className="d-flex">
                      <div>
                        <UserImg img={user} />
                      </div>
                      <div className="dropdown-info">
                        <h4>
                          <span>
                            <b>Mahmudul </b>
                            added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationsDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="user-img">
                          <span className="rounded-circle">
                            <img src={user} alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdown-info">
                        <h4>
                          <span>
                            <b>Mahmudul </b>
                            added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationsDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="user-img">
                          <span className="rounded-circle">
                            <img src={user} alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdown-info">
                        <h4>
                          <span>
                            <b>Mahmudul </b>
                            added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationsDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="user-img">
                          <span className="rounded-circle">
                            <img src={user} alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdown-info">
                        <h4>
                          <span>
                            <b>Mahmudul </b>
                            added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-5 pr-5 pb-1 mt-2 w-100">
                  <Button className="btn-blue w-100 py-2 px-3">
                    View all notifications
                  </Button>
                </div>
              </Menu>
            </div>

            {context.islogin !== true ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-big btn-round">Sign in</Button>
              </Link>
            ) : (
              <div className="myacc-wrapper">
                <Button
                  className="myacc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}>
                  <div className="user-img">
                    <span className="rounded-circle">
                      <img src={user} alt="user" />
                    </span>
                  </div>
                  <div className="use-info res-hide">
                    <h4>
                      Keira Knightley{" "}
                      <MdArrowDropDown style={{ fontSize: "22px" }} />
                    </h4>
                    <p className="mb-0">@keira123</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyacc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <IoShieldHalfSharp />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
               <MenuItem className="logout"
                onClick={() => { context.setislogin(false);   
                  handleCloseMyAccDrop(); }}>
              <ListItemIcon>
                <LockOutlineIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
