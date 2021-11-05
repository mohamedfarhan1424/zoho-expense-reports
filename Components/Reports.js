import { ArrowDropDown } from "@mui/icons-material";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "./Reports.module.css";
import HomeImage from "../home.png";
import LifeCycle from "../lifecycle.png";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const [select, setSelect] = useState(true);
  const [select1, setSelect1] = useState(false);
  const [head, setHead] = useState("All");
  const [dialogopen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSelect = () => {
    setSelect(true);
    setSelect1(false);
  };
  const handleSelect1 = () => {
    setSelect1(true);
    setSelect(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleHead = (heading) => {
    handleSelect1();
    handleClose();
    setHead(heading);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftitems}>
          <div
            onClick={handleSelect}
            className={select ? styles.heading : styles.heading2}
          >
            <Typography variant="h6">Pending Reports</Typography>
          </div>
          <div
            onClick={handleSelect1}
            className={select1 ? styles.heading : styles.heading2}
          >
            <Typography variant="h6">{head} Reports</Typography>
          </div>
          <div className={styles.downbutton}>
            <Button
              className={styles.downbutton1}
              variant="none"
              id="basic-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ArrowDropDown />
            </Button>
            <Menu
              className={styles.dropdown}
              elevation={0.5}
              id="fade-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuProps={{
                "aria-labelledby": "basic-button",
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              <span className={styles.dropdownhead}>DEFAULT</span>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("All")}
              >
                All
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Unsubmitted")}
              >
                Unsubmitted
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Awaiting Approval")}
              >
                Awaiting Approval
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Approved")}
              >
                Approved
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Rejected")}
              >
                Rejected
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Reimbursed")}
              >
                Reimbursed
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Shared with me")}
              >
                Shared with me
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Archived")}
              >
                Archived
              </MenuItem>
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose}>
                <span className={styles.customview}>+ New Custom View</span>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className={styles.rightitems}>
          <div>
            <button className={styles.new} onClick={handleDialogOpen}>
              + New Report
            </button>
          </div>
          <div>
            <Button
              className={styles.iconbutton}
              id="basic-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
            >
              <img src="https://img.icons8.com/ios-glyphs/18/000000/ellipsis.png" />
            </Button>
            <Menu
              className={styles.dropdown}
              elevation={0.5}
              id="fade-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuProps={{
                "aria-labelledby": "basic-button",
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              <span className={styles.dropdownhead}>SORT BY</span>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Created Time
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Report#
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Report Name
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Status
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Approver
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Total
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                To be reimbursed
              </MenuItem>
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                <img src="https://img.icons8.com/material-outlined/20/000000/refresh.png" />{" "}
                Refresh List
              </MenuItem>
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                <img src="https://img.icons8.com/ios/20/000000/low-importance.png" />{" "}
                Import Reports
              </MenuItem>
            </Menu>
          </div>
          <div>
            <button className={styles.help}>
              <img src="https://img.icons8.com/fluency/23/000000/question-mark.png" />
            </button>
          </div>
        </div>
      </div>
      {select && (
        <div className={styles.pendingempty}>
          <div className={styles.image}>
            <Image src={HomeImage} />
          </div>
          <div className={styles.texts}>
            <Typography className={styles.business} variant="h5">
              Report business expenses
            </Typography>
            <br />
            <Typography className={styles.bodytext} variant="body1">
              Expense claims need to be added to a report before submitting for
              approval and reimbursement. Create and access reports here.
            </Typography>
            <br />
            <button className={styles.new} onClick={handleDialogOpen}>
              + New Report
            </button>
          </div>
          <div className={styles.lifecycle}>
            <Typography variant="h6">
              Life cycle of an Expense Report
            </Typography>
            <Image src={LifeCycle} />
          </div>
        </div>
      )}
      {select1 && (
        <div className={styles.pendingempty}>
          <div className={styles.image}>
            <Image src={HomeImage} />
          </div>
          <div className={styles.texts}>
            <Typography className={styles.business} variant="h5">
              Report business expenses
            </Typography>
            <br />
            <Typography className={styles.bodytext} variant="body1">
              Expense claims need to be added to a report before submitting for
              approval and reimbursement. Create and access reports here.
            </Typography>
            <br />
            <button className={styles.new} onClick={handleDialogOpen}>
              + New Report
            </button>
          </div>
          <div className={styles.lifecycle}>
            <Typography variant="h6">
              Life cycle of an Expense Report
            </Typography>
            <Image src={LifeCycle} />
          </div>
        </div>
      )}
      <Dialog
        open={dialogopen}
        onClose={handleDialogClose}
        className={styles.dialog}
      >
        <DialogTitle>
          <div className={styles.dialoghead}>
            <h4>New Report</h4>
            <h6 className={styles.close} onClick={handleDialogClose}>X</h6>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <h5>Report name*</h5>
              <TextField placeholder="eg:Trip to New York" className={styles.textfield} />
              <h5>Business Purpose</h5>
              <TextField placeholder="max 500 characters" className={styles.textfield} />
              <h5>Duration</h5>
              <div className={styles.duration}>
                <TextField type="date" className={styles.durfield} />
                <TextField type="date" className={styles.durfield} />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" className={styles.new}>Save</Button>
          <Button variant="outlined" onClick={handleDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
