`use strict`;
const settingsCheckbox = document.getElementsByClassName(
  "section-settings__checkbox"
)[0];
const strengthBlocks = document.getElementsByClassName("strength-blocks")[0];
const noOfSettings = 4;
const noOfStrengthBlocks = 4;
// PAGE SETUP
//Adding checkboxes with labels
const addSettingCheckboxes = () => {
  for (let i = 0; i < noOfSettings; i++) {
    const label = document.createElement("label");
    label.setAttribute("class", "section-settings__checkbox-container");
    settingsCheckbox.appendChild(label);
    const labels = document.getElementsByClassName(
      "section-settings__checkbox-container"
    )[i];
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "checkbox");
    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    const checkLabel = document.createElement("span");
    checkLabel.setAttribute("class", "checklabel");
    labels.appendChild(input);
    labels.appendChild(checkMark);
    labels.appendChild(checkLabel);
  }
};
// Adding strength blocks
const addStrengthBlocks = () => {
  for (let i = 0; i < noOfStrengthBlocks; i++) {
    const block = document.createElement("div");
    block.setAttribute("class", "strength-block");
    strengthBlocks.appendChild(block);
  }
};
addSettingCheckboxes();
addStrengthBlocks();
