import gsap from 'gsap'

type Coords = {
  x: number
  y: number
}

type LineEdge = {
  right: Coords
  left: Coords
}

const generateIntermediatePolygonPoints = (
  start: LineEdge, 
  end: LineEdge, 
  {
    length = 2
  }) => {
  const points = [start]
  for (let i = 1; i <= length-2; i++){
    points.push({
      right: {
        x: start.right.x + ( end.right.x - start.right.x ) * i / length + (0.5 - Math.random()) * 10,
        y: start.right.y + ( end.right.y - start.right.y ) * i / length + (0.5 - Math.random()) * 10,
      },
      left: {
        x: start.left.x + ( end.left.x - start.left.x ) * i / length + (0.5 - Math.random()) * 10,
        y: start.left.y + ( end.left.y - start.left.y ) * i / length + (0.5 - Math.random()) * 10,
      }
    })
  }
  points.push(end)
  return points
}

export const generatePolygonLineKeyframes = (line: LineEdge[]): Coords[][] => {
  return line.map((edge, index, edges) => {
    const leftPoints = edges
      .reduce((points, edge, currentIndex) => {
        if (currentIndex > index) {
          points.push(points.at(-1) as Coords)
        } else {
          points.push(edge.left)
        } 
        return points
      }, [] as Coords[])
    const rightPoints = edges
      .reduce((points, edge, currentIndex) => {
      if (currentIndex > index) {
        points.push(points.at(-1) as Coords)
      } else {
        points.push(edge.right)
      } 
      return points
    }, [] as Coords[])
    return [...rightPoints, ...leftPoints.reverse()]
  })
}

export const generatePolygonPointsKeyframes = (line: LineEdge[]): Coords[][] => {
  const lineKfs = generatePolygonLineKeyframes(line)
  const keyframesCount = lineKfs.length
  const pointsCount = lineKfs[0].length
  const result: Coords[][] = []
  for (let i = 0; i < pointsCount; i++){
    const pointKfs: Coords[] = []
    for (let k = 0; k < keyframesCount; k++){
      pointKfs.push(lineKfs[k][i])
    }
    result.push(pointKfs)
  }
  return result
}