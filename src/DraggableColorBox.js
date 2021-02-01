import React from "react";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={props.classes.boxContent}>
        <span>{props.name}</span>
        <span>
          <DeleteIcon
            className={props.classes.deleteIcon}
            onClick={props.handleClick}
          />
        </span>
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
