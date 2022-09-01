interface StageType { 
        description: string,
        stageType: number,
        stageStatus: number,
        measures: {
            [key: string]: number
        }
}

export default StageType;