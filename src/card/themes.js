const getStyles = (theme) => {
  switch(theme) {
    case "test":
      return `
        .row {
          
        }
      `;
    default:
      return `
        .row {
          font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
        }
      `;
  }
}

export { getStyles }
