import VDom from "../framework/Vdom";

const numRows = 13;
const numCols = 15;
const ELEMENTS = {
    WALL: 'wall',
    DESTROYABLE_WALL: 'destroyable-wall',
    EMPTY_CELL: 'empty-cell',
    FIELD: 'field',
}

const types = {
    wall: '▉',
    destroyableWall: 1,
    emptyCell: 'x',
    blank: '.',
    speedUp: 2,
    bombRadius: 3,
    bombs: 4,
}

export function GameField({template}) {
    return(
        <div className={"container"}>
             {template.flatMap((col) => {
                  return col.map((cell) => {
                    switch (cell) {
                        case types.wall:
                            return <div className={ELEMENTS.WALL} />
                        case types.destroyableWall:
                            return <div className={ELEMENTS.DESTROYABLE_WALL} />
                        case types.blank:
                            return <div className={ELEMENTS.FIELD}/>
                        default:
                            return <div className={ELEMENTS.FIELD}/>
                    }
                })
            })}
        </div>
    )
}

function addPowerUp(num, type, template) {
    while (num !== 0) {
        let i = Math.floor(Math.random() * numRows);
        let j = Math.floor(Math.random() * numCols);
        if (template[i][j] === types.destroyableWall) {
            template[i][j] = type;
            num--;
        }
    }
}

export function generateLevel(template, numberOfPlayers) {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (template[row][col] === "." && Math.random() < 0.90) {
                template[row][col] = types.destroyableWall;
            }
        }
    }
    addPowerUp(numberOfPlayers,  types.bombs, template);
    addPowerUp(numberOfPlayers,  types.speedUp, template);
    addPowerUp(numberOfPlayers, types.bombRadius, template);
    console.log(template);
    return template;
}

export const template = [
    ['▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉'],
    ['▉','x','x','.','.','.','.','.','.','.','.','.','x','x','▉'],
    ['▉','x','▉','.','▉','.','▉','.','▉','.','▉','.','▉','x','▉'],
    ['▉','x','.','.','.','.','.','.','.','.','.','.','.','x','▉'],
    ['▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉'],
    ['▉','.','.','.','.','.','.','.','.','.','.','.','.','.','▉'],
    ['▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉'],
    ['▉','.','.','.','.','.','.','.','.','.','.','.','.','.','▉'],
    ['▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉','.','▉'],
    ['▉','x','.','.','.','.','.','.','.','.','.','.','.','x','▉'],
    ['▉','x','▉','.','▉','.','▉','.','▉','.','▉','.','▉','x','▉'],
    ['▉','x','x','.','.','.','.','.','.','.','.','.','x','x','▉'],
    ['▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉']
];