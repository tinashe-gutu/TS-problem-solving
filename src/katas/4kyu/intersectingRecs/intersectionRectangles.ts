/*
    function: 
    ============================
        name: intersectionRecs
        param: REC_ONE: object
        param: REC_TWO: object
        return: object | string
    ============================
    psuedo-code:
        declare REC_ONE_COORDINATES = findAllNodes(REC_ONE)
        declare REC_TWO_COORDINATES = findAllNodes(REC_TWO)
        for each NODE of REC_TWO_COORDINATES:
            if(isNodeInside(NODE, REC_ONE_COORDINATES)):
                declare WIDTH_HEIGHT = findWidthAndHeight(node, REC_ONE_COORDINATES)
                declare INTERSECTING_REC = createRec(node, WIDTH_HEIGHT)
                return INTERSECTING_REC
        return 'no intersections'
*/
interface Coordinate {
  x: number;
  y: number;
}

interface Rectangle {
  [key: string]: Coordinate;
  bottomLeft: Coordinate;
  topLeft: Coordinate;
  topRight: Coordinate;
  bottomRight: Coordinate;
}

interface RecProperties {
  [key: string]: number;
  leftX: number;
  bottomY: number;
  width: number;
  height: number;
}

function intersectionRecs(
  recOne: RecProperties,
  recTwo: RecProperties
): RecProperties | string {
  const recOneCoordinates: Rectangle = findAllCoordinates(recOne);
  const recTwoCoordinates: Rectangle = findAllCoordinates(recTwo);
  for (const node in recTwoCoordinates) {
    if (isNodeInside(recTwoCoordinates[node], recOneCoordinates)) {
      const widthHeight = findWidthAndHeight(
        {
          [node]: recTwoCoordinates[node],
        },
        recOneCoordinates
      );
      const intersectingRec: RecProperties = createRec(
        { [node]: recTwoCoordinates[node] },
        widthHeight
      );
      return intersectingRec;
    }
  }
  return "no intersections";
}

function findAllCoordinates(recOne: RecProperties): Rectangle {
  return {
    bottomLeft: { x: recOne.leftX, y: recOne.bottomY },
    topLeft: { x: recOne.leftX, y: recOne.bottomY + recOne.height },
    topRight: {
      x: recOne.leftX + recOne.width,
      y: recOne.bottomY + recOne.height,
    },
    bottomRight: { x: recOne.leftX + recOne.width, y: recOne.bottomY },
  };
}

function isNodeInside(node: Coordinate, recOneCoordinates: Rectangle): boolean {
  if (
    node.x >= recOneCoordinates.bottomLeft.x &&
    node.x <= recOneCoordinates.bottomRight.x &&
    node.y >= recOneCoordinates.bottomLeft.y &&
    node.y < recOneCoordinates.topLeft.y
  ) {
    return true;
  }
  return false;
}

function findWidthAndHeight(
  node: {
    [x: string]: Coordinate;
  },
  recOneCoordinates: Rectangle
) {
  const relativePos = Object.keys(node)[0];
  if (relativePos === "bottomLeft") {
    return {
      width: recOneCoordinates.bottomRight.x - node[relativePos].x,
      height: recOneCoordinates.topLeft.y - node[relativePos].y,
    };
  } else if (relativePos === "topLeft") {
    return {
      width: recOneCoordinates.bottomRight.x - node[relativePos].x,
      height: node[relativePos].y - recOneCoordinates.bottomLeft.y,
    };
  } else if (relativePos === "topRight") {
    return {
      width: node[relativePos].x - recOneCoordinates.bottomLeft.x,
      height: node[relativePos].y - recOneCoordinates.bottomLeft.y,
    };
  } else {
    return {
      width: node[relativePos].x - recOneCoordinates.bottomLeft.x,
      height: recOneCoordinates.topLeft.y - node[relativePos].y,
    };
  }
}

function createRec(
  node: { [x: string]: Coordinate },
  widthHeight: { width: number; height: number }
): RecProperties {
  const relativePos = Object.keys(node)[0];
  if (relativePos === "bottomLeft") {
    return {
      leftX: node[relativePos].x,
      bottomY: node[relativePos].y,
      width: widthHeight.width,
      height: widthHeight.height,
    };
  } else if (relativePos === "topLeft") {
    return {
      leftX: node[relativePos].x,
      bottomY: node[relativePos].y - widthHeight.height,
      width: widthHeight.width,
      height: widthHeight.height,
    };
  } else if (relativePos === "topRight") {
    return {
      leftX: node[relativePos].x - widthHeight.width,
      bottomY: node[relativePos].y - widthHeight.height,
      width: widthHeight.width,
      height: widthHeight.height,
    };
  } else {
    return {
      leftX: node[relativePos].x - widthHeight.width,
      bottomY: node[relativePos].y,
      width: widthHeight.width,
      height: widthHeight.height,
    };
  }
}

const myRectangle = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3,
};

const myRectangleTwo = {
  leftX: 4,
  bottomY: 2,
  width: 5,
  height: 3,
};

const myRectangleThree = {
  leftX: 5,
  bottomY: -1,
  width: 4,
  height: 3,
};

const myRectangleFour = {
  leftX: 0,
  bottomY: 1,
  width: 3,
  height: 2,
};

const myRectangleFive = {
  leftX: 4,
  bottomY: 3,
  width: 2,
  height: 4,
};
console.log(intersectionRecs(myRectangle, myRectangleTwo));
console.log(intersectionRecs(myRectangle, myRectangleThree));
console.log(intersectionRecs(myRectangle, myRectangleFour));
console.log(intersectionRecs(myRectangle, myRectangleFive));

