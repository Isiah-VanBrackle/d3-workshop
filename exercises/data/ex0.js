function visualize() {
  const columnHeights = [10, 20, 30, 40, 50];

  d3.select('.chart') // we need to select the class that's actually on the page, check the index.html that class is chart
    .selectAll('div') // we are chaining a selection of all the 'divs' associated with the chart class
    .data(columnHeights) // we are defining the data as the values from our columnHeights array
    // .join( // the purpose of this join is to create functions that handle enter, update, and exit selections
    //   enter => enter.append('div') // look up arrow function syntax.
    //     .style('width', '100px')
    //     .style('height', (d) => `${d * 10}px` )
    //     .style('display', 'inline-block')
    //     .style('background-color', 'blue')
    //     .style('margin-right', '2px')
    //     .style('vertical-align', 'bottom')
    //     .style('padding-top', '4px')
    // )
    .enter() // if the elements don't exist on the DOM it's an enter selection. // if you've more elements than data thats an exit selection !review
    .append('div')
      .style('width', '100px')
      .style('height', (d) => `${d * 10}px` ) // this is a function where 'd' = one of the elements in our array of data.
      .style('display', 'inline-block')
      .style('background-color', 'orange')
      .style('margin-right', '2px')
      .style('vertical-align', 'bottom')
      .style('padding-top', '4px')
      

  // TODO: Create columns of blocks where each block varies in height inside
  // the chart selection.

}
