`use strict`;

const settingsCheckbox = document.getElementsByClassName(
  "section-settings__checkbox"
)[0];
const strengthBlocksContainer =
  document.getElementsByClassName("strength-blocks")[0];
const slider = document.getElementsByClassName(
  "section-settings__range-input"
)[0];
const sliderOutput = document.getElementsByClassName(
  "section-settings__length-content"
)[0];

const noOfSettings = 4;
const noOfStrengthBlocks = 4;
const checkmarkLabels = [
  "Include Uppercase letters",
  "include lowercase letters",
  "include numbers",
  "include symbols",
];

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
    checkLabel.textContent = checkmarkLabels[i];
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
    strengthBlocksContainer.appendChild(block);
  }
};
addSettingCheckboxes();
addStrengthBlocks();

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener("input", (event) => {
  sliderOutput.textContent = event.target.value;
});

// Range input slider progress support for webkit
for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

// Strength blocks bg color setting
const strengthBlocks = document.getElementsByClassName("strength-block");
const strengthLevel = document.getElementsByClassName("strength-level")[0];
const levels = {
  "too weak!": "red",
  weak: "orange",
  medium: "yellow",
  strong: "green",
};
const setStrengthColor = (level) => {
  for (let i = 0; i <= Object.keys(levels).indexOf(level); i++) {
    strengthLevel.textContent = level;
    strengthBlocks[i].className = `strength-block ${levels[level]}`;
  }
};
